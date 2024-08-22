import express from "express"
import { isAuthenticated, isManagement, isSignedIn } from "../controllers/auth.js"
import { generateAwardsheet, getAll, getOne, getResult, sendMails, submitResult } from "../controllers/evaluate.js"

export const router = express.Router()

router.get('/all', isSignedIn, isAuthenticated, getAll)
router.get('/:evaluationId', isSignedIn, isAuthenticated, getOne)
router.post('/submit', isSignedIn, isAuthenticated, submitResult)
router.post('/getresult', getResult)
// router.post('/result', generateResult)
router.post('/awardsheet', isSignedIn, isAuthenticated, generateAwardsheet)
router.post('/sendmails', isSignedIn, isAuthenticated, isManagement, sendMails)