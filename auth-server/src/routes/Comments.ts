import { Router } from 'express'
const getComments = require('../controller/commentController/getComment')
const PostCommentController = require('../controller/commentController/postComment')
const verifyToken = require('../middleware/verifyToken')
const PostLikesController = require('../controller/commentController/postLikes')
const PostDisLikesController = require('../controller/commentController/postDisLikes')

const router = Router()

router.get('/get-comments', getComments)

router.post('/post-comment', verifyToken, PostCommentController)

router.post('/:id/likes', verifyToken, PostLikesController)

router.post('/:id/dislikes', verifyToken, PostDisLikesController)

module.exports = router