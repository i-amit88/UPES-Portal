import {createTransport} from 'nodemailer'

const smtpConfig = {
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "s.bhupender2401@gmail.com",
        pass: "gwjrsuzbhzpxckiv"
    }
}

export const mailTransport = createTransport(smtpConfig)
mailTransport.verify((error, success) => {
    if(error)
        console.log(`Error: ${error}`)
    else    
        console.log("Mail SMTP Success")
})
export const sendMail = (mailOptions) => {
    return mailTransport.sendMail(mailOptions, (res) => {
        console.log(res)
        return res
    })
}