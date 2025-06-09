import { Router } from "express";
const verifyToken = require('../middleware/verifyToken')
const GetUserInfoController = require('../controller/userController/GetUserInfoController')

const router = Router()

router.get('/user-info', verifyToken, GetUserInfoController)

module.exports = router