import { Evaluate } from "../models/Evaluate.js"
import readXlsxFile from "read-excel-file/node"
import pdf from 'pdf-creator-node'
import fs from 'fs'
import { Student } from "../models/Student.js"
import { User } from "../models/User.js"
import { sendMail } from "../utils/sendMail.js"

var template = fs.readFileSync('./template/awardsheet.html', 'utf-8')
export const submitResult = (req, res) => {
    
    //Get Values From Form
    const { value, file, subjectName, subjectCode, semester, parameters } = req.body
    //Split The Base64
    let base64Image = file.split(';base64,').pop();
    Evaluate
        .findOne({ _id: value, uploaded: false })
        .then((eva) => {
            //Find If It Exits
            if(!eva)
                return res.status(400).json({
                    error: true,
                    errorMessage: "Can't find the batch OR Result already uploaded!"
                })
                //Convert Base64 to original file
                fs.writeFile(`temp/${value}.xlsx`, base64Image, { encoding: 'base64' }, (err) => {
                    //If No Error
                    if(!err) {
                        Evaluate.updateOne({ 
                            _id: value 
                        }, { 
                            $set: { 
                                parameters: parameters
                            }
                        }).then((update) => {
                            if(!update) 
                                return res.status(400).json({
                                    error: true,
                                    message: 'Error At database'
                                })

                            //Read the xlsx file
                            readXlsxFile(fs.createReadStream(`./temp/${value}.xlsx`)).then((rows) => {
                                //removes the first row
                                rows.shift()
                                //mapping the rows
                                try {
                                    for(let i = 0; i < rows.length; i++) {
                                        Student.findOne({ sapId: rows[i][1] })
                                            .then((student) => {
                                                if(!student) 
                                                    return 'Error'
                                                let grades = {
                                                    subjectName: subjectName,
                                                    subjectCode: subjectCode,
                                                    semester: semester,
                                                    internalMarks: rows[i][4],
                                                    endSemMarks: rows[i][5],
                                                    midSemMarks: rows[i][3],
                                                    evaluation: value
                                                }
                                                Student
                                                    .updateOne({ sapId: student.sapId }, { $push: { grades: grades }})
                                                    .exec()
                                            })
                                    }
                                }catch(error) {
                                    return res.status(400).json({
                                        error: true,
                                        errorMessage: error
                                    })
                                }
                                try {
                                    Evaluate
                                        .updateOne({ _id: value }, { $set: { uploaded: true } })
                                        .exec()
                                        .then((done) => {
                                            res.json({
                                                success: true,
                                                message: "Result Uploaded!"
                                            })
                                        })
                                }catch(error) {
                                    return res.status(400).json({
                                        error: true,
                                        errorMessage: error
                                    })
                                }
                                
                            })
                        })
                    }
                })
        }) 
        .catch((error) => {
            res.status(400).json({
                error: true,
                errorMessage: error
            })
        })
   
  
}

export const getAll = (req, res) => {
    const { _id } = req.auth
    if(req.query.all) {
        Evaluate
            .find({ uploaded: false })
            .populate({
                path: 'evaluator',
                select: 'firstName lastName email reportingManager',
                populate: {
                    path: 'reportingManager',
                    select: 'firstName lastName email'
                }
            })
            .then((data) => {
                res.json(data)
            })
            .catch((err) => {
                res.status(400).json({
                    error: true,
                    errorMessage: err
                })
            })
    }else {
        Evaluate
            .find({ evaluator: _id })
            .then((data) => {
                res.json(data)
            })
            .catch((err) => {
                res.status(400).json({
                    error: true,
                    errorMessage: err
                })
            })
    }
}

export const getOne = (req, res) => {
    const { evaluationId } = req.params
    Evaluate
        .findOne({ evaluationId, uploaded: false })
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res.status(400).json({ 
                error: true,
                errorMessage: err
            })
        })

}

export const getResult = (req, res) => {
    
    const { evaluationId } = req.body
    Student.find({ 
        grades: { 
            $elemMatch: {
                evaluation: evaluationId
            }
        }
    })
    .then((result) => {
        res.json(result)
    })
    .catch((error) => {
        res.status(400).json({
            error: true,
            errorMessage: error
        })
    })
}

// export const generateResult = (req, res) => {
//     const { sapId } = req.body
//     const options = {
//         format: "A4",
//         orientation: "portrait",
//         border: "10mm"
//     }
//     Student
//         .findOne({ sapId: sapId })
//         .then((student) => {
//             let grades = student.grades.map(item=> item.toObject())
//             let finalGrades = []
//             grades.map((item) => {
//                 let finalGrade = 0
//                 if(item.semester === 'I' || item.semester === 'II') {
//                     finalGrade = (item.internalMarks * 0.5) + (item.endSemMarks * 0.3) + (item.midSemMarks * 0.2)

//                 }else {
//                     finalGrade = (item.internalMarks * 0.3) + (item.endSemMarks * 0.5) + (item.midSemMarks * 0.2)

//                 }
//                 finalGrades.push({ subjectName: item.subjectName, subjectCode: item.subjectCode, finalGrade: finalGrade })
//             })
//             const document = {
//                 html: template,
//                 data: {
//                   name: student.name,
//                   sapId: student.sapId,
//                   rollNumber: student.rollNumber,
//                   grades: finalGrades
//                 },
//                 path: `./temp/pdf/${student.sapId}.pdf`,
//                 type: "",
//             }
//             pdf
//                 .create(document, options)
//                 .then((file) => {
//                     if(file) {
//                         res.download(file.filename, `${student.sapId}.pdf`, (err) => {
//                             if (err) {
//                               res.status(500).send({
//                                 message: "Could not download the file. " + err,
//                               })
//                             }
//                           })
                       
//                     }else {
//                         res.status(400).json({
//                             error: true
//                         })
//                     }
//                 })
//                 .catch((error) => {
//                     res.status(400).json({
//                         error: true,
//                         errorMessage: "Can't generate PDF"
//                     })
//                 })
//         })
//         .catch((error) => {
//             res.status(400).json({
//                 error: true,
//                 errorMessage: error
//             })
//         })
// }

export const generateAwardsheet = (req, res) => {
    const { evaluationId } = req.body
    const options = {
        format: "A4",
        orientation: "portrait",
        border: "10mm"
    }
    Student
        .find({ 
            grades: {
                $elemMatch: {
                    evaluation: evaluationId
                }
            }
        })
        .then((student) => {
            Evaluate.findOne({
                _id: student[0].grades[0].evaluationId
            })
            .lean()
            .then((data) => {
                let grades = student.map(item=> item.toObject())   
                const document = {
                    html: template,
                    data: {
                        student: grades,
                        evaluation: data
                    },
                    path: `./temp/pdf/${evaluationId}.pdf`,
                    type: "",
                }
                pdf
                    .create(document, options)
                    .then((file) => {
                        if(file) {
                            Evaluate
                                .updateOne({ 
                                    _id: evaluationId 
                                }, {
                                    $set: {
                                        downloaded: true
                                    }
                                })
                                .then((update) => {
                                    if(update) {
                                        res.download(file.filename, `${evaluationId}.pdf`, (err) => {
                                            if (err) {
                                                res.status(500).send({
                                                    message: "Could not download the file. " + err,
                                                })
                                            }
                                        })
                                    }else {
                                        res.status(400).json({
                                            error: true,
                                            errorMessage: 'Unknown'
                                        })
                                    }
                                })
                                .catch((error) => {
                                    res.status(400).json({
                                        error: true,
                                        errorMessage: error
                                    })
                                })
                        
                        }else {
                            res.status(400).json({
                                error: true
                            })
                        }
                    })
                    .catch((error) => {
                        res.status(400).json({
                            error: true,
                            errorMessage: "Can't generate PDF"
                        })
                    })
            })
            .catch((error) => {
                res.status(400).json({
                    error: true,
                    errorMessage: error
                })
            })
        })
        .catch((error) => {
            res.status(400).json({
                error: true,
                errorMessage: error
            })
        })
}

export const sendMails = (req, res) => {
    let template = req.body.template.toString()
    Evaluate
        .find({ uploaded: false })
        .populate('evaluator')
        .then((data) => {
            data.map((item, index) => {                
                template = template.replace("{NAME}", `${item.evaluator.firstName} ${item.evaluator.lastName}`)
                template = template.replace("{BATCHNAME}", `${item.courseName} ${item.batchName}`)
                template = template.replace("{SUBJECTNAME}", `${item.subjectName}`)
                const mailOptions = {
                    from: 's.bhupender2401@gmail.com',
                    to: `${item.evaluator.email}`,
                    subject: 'Reminder',
                    text: template
                }
                sendMail(mailOptions)
                
                if(index === data.length - 1) {
                    return res.json({
                        success: true,
                        message: "Mails Sent!"
                    })
                }
            })
           
        })
        .catch((error) => {
            res.status(400).json({
                error: true,
                errorMessage: "Error Sending Mails"
            })
        })
}