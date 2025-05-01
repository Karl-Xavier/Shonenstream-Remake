import { Router } from "express"
const verifyToken = require('../middleware/verifyToken')
const redisCachedData = require('../middleware/cacheData')
const RecentController = require('../controller/home/RecentController')
const PopularController = require('../controller/home/PopularController')

const router = Router()

router.get('/home-recent', redisCachedData('homeRecent:'), RecentController)

router.get('/top-airing', redisCachedData('popular:'), PopularController)


module.exports = router