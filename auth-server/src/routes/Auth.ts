import { Router } from 'express'
const SignUpController = require('../controller/authController/SignUp')
const LoginController = require('../controller/authController/Login')
const NewTokenController = require('../controller/authController/NewToken')
const NewAccessTokenController = require('../controller/authController/NewAccessToken')

const router = Router()

router.post('/sign-up', SignUpController)

router.post('/login', LoginController)

router.post('/new-token', NewTokenController)

router.get('/refresh-token', NewAccessTokenController)

module.exports = router