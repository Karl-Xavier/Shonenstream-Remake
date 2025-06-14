import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  author: { type: String, required: true },
  content: { type: String, required: true },
  profileImage: { type: String, required: true },
  likes: { type: Array, default: [] },
  dislikes: { type: Array, default: [] },
  parentId: { type: String, default: null },
  name: { type: String, required: true }
})

const Comment = mongoose.model('comment', commentSchema)

module.exports = Comment