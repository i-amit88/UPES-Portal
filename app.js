import dotenv from 'dotenv'
import express, { json } from 'express'
import mongoose from 'mongoose'
import AdminJS from 'adminjs'
import cors from 'cors'
import AdminJSExpress from '@adminjs/express'
import * as AdminJSMongoose from '@adminjs/mongoose'
import MongoStore from 'connect-mongo'
//Configs
import { usersResource, User } from './models/User.js'
import { designationResource } from './models/Designation.js'
//Controllers
import { authenticateAdmin } from './controllers/auth.js'
//Routes
import { router as authRoutes } from './routes/auth.js'
import { router as timeTableRoutes } from './routes/timetable.js'
import { router as annoucementRouter} from './routes/announcement.js'
import { router as policyRouter } from './routes/policy.js'
import { router as studentRouter } from './routes/student.js'
import { schoolResource } from './models/School.js'
import { subjectResource } from './models/Subject.js'
import { courseResource } from './models/Course.js'
import { batchResource } from './models/Batch.js'
import { timeTableResource } from './models/Timetable.js'
import { studentResource } from './models/Student.js'
import { announcementResource } from './models/Announcement.js'
import { policyResource } from './models/Policy.js'
import { router as courseRouter} from './routes/course.js'
// import fs from 'fs'
// import * as csv from 'csv'

dotenv.config()

//App Configs
const PORT = process.env.PORT || 8000
const DB = process.env.DB || ""

//Admin Js Adapter
AdminJS.registerAdapter({
    Resource: AdminJSMongoose.Resource,
    Database: AdminJSMongoose.Database
})

//Init App Of Express
const app = express()

//Database Connection
mongoose.connect('mongodb+srv://adminn:GQV33TKzSr3YvQuf@test.jwbz8ex.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex:true,
    ignoreUndefined: true,
}).then(() => {
    console.log('DB CONNECTED')
}).catch(err => console.log(err))

// fs.createReadStream('./data.csv')
//     .pipe(csv.parse({ delimiter: ",", from_line: 2}))
//     .on("data", (row) => {
//         const newUser = {
//             "firstName": row[1],
//             "lastName": row[2],
//             "sapId": row[0],
//             "email": `${row[1]}@mail.com`,
//             "password": row[1],
//             "designations": row[4],
//             "school": row[5],
//             "reportingManager": row[3],
//             "activeAccount": "active",
//             "role": "faculty"
//         }
//         let user = new User(newUser)
//         user.save()
//             .then((data) => {
//                 console.log(data)
//             })
//             .catch((error) => {
//                 console.log(error)
//             })
//     })

//Session Store For Logged In Users AdminJs
const sessionStore =  MongoStore.create({
    client: mongoose.connection.getClient(),
    collectionName: "session",
    stringify: false,
    autoRemove: "interval",
    autoRemoveInterval: 1
})

//Admin Js Config
const adminJs = new AdminJS({
    resources: [
        designationResource, 
        usersResource, 
        schoolResource, 
        subjectResource, 
        courseResource, 
        batchResource, 
        timeTableResource, 
        studentResource,
        announcementResource,
        policyResource
    ],
    branding: {
        companyName: "SoCS Information System",
        logo: '',
        withMadeWithLove: false,
        
    },

})
//Authenticate Function
const authenticate = async (email, password) => {
    const DEFAULT_ADMIN = {
        email: '',
        password: 'password',
        name: ''
    }
    return Promise.resolve(DEFAULT_ADMIN)
    // return Promise.resolve(authenticateAdmin(email, password)
    //     .then(user => {
    //         if(user.error1 || user.error2 || user.error3)
    //             return null
    //         if(user){
    //             DEFAULT_ADMIN.email = user.email
    //             DEFAULT_ADMIN.name = user.firstName
    //             return Promise.resolve(DEFAULT_ADMIN)
    //         }
    //         else      
    //             return null
    //     }))
}
//Router For AdminJs Authenticated Routes
const router = AdminJSExpress.buildAuthenticatedRouter(
    adminJs,
    {
        authenticate,
        cookieName: 'adminjs',
        cookiePassword: 'sessionsecret',
    },
    null,
    {
        store: sessionStore,
        resave: true,
        saveUninitialized: true,
        secret: 'sessionsecret',
        cookie: {
          httpOnly: process.env.NODE_ENV === 'production',
          secure: process.env.NODE_ENV === 'production',
        },
        name: 'adminjs',
    }
)
//Use static sources
app.use(express.static('public'))
//CORS
app.use(cors({
    origin: ['http://localhost:3000'], 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
    credentials: true
}))

//Json parser
app.use(json())
//Auth Routes
app.use('/api/auth', authRoutes)
//Timetable Routes
app.use('/api/timetable', timeTableRoutes)
//Annoucement Routes
app.use('/api/annoucement', annoucementRouter)
//Policy Routes
app.use('/api/policy', policyRouter)
//Student Routes
app.use('/api/student', studentRouter)
app.use('./api/courses', courseRouter)

//Admin Js Routes
app.use(adminJs.options.rootPath, router)


app.listen(PORT, () => {
    console.log(`Server Running At PORT: ${PORT}`)
})