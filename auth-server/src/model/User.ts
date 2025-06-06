import mongoose from "mongoose"
import { v4 } from 'uuid'

const userSchema = new mongoose.Schema({
    userId: { type: String, default: v4() },
    fullName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profileImage: {
        type: String,
        required: false,
        default: ''
    },
    created:{
        type: Date,
        default: Date.now()
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    verificationToken: { type: String },
    tokenCreatedAt: { type: Date }
})

const User = mongoose.model('user', userSchema)

module.exports = User