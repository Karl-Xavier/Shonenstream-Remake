import { Router } from 'express'
const SignUpController = require('../controller/authController/SignUp')
const LoginController = require('../controller/authController/Login')
const NewTokenController = require('../controller/authController/NewToken')
const VerifyTokenController = require('../controller/authController/VerifyOTP')
const ForgotPasswordController = require('../controller/authController/ForgotPassword')
const VerifyResetOTPController = require('../controller/authController/VerifyResetOTP')

const router = Router()

router.post('/sign-up', SignUpController)

router.post('/verify-token', VerifyTokenController)

router.post('/login', LoginController)

router.post('/new-token', NewTokenController)

router.post('/forgot-password', ForgotPasswordController)

router.post('/verify-reset', VerifyResetOTPController)

module.exports = router