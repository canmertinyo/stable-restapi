import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import config from 'config'

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true }
  },
  { timestamps: true }
)

export const User = mongoose.model('User', UserSchema)
