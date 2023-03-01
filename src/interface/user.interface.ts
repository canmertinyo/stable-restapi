import mongoose from 'mongoose'

export interface UserDocument extends mongoose.Document {
  email: string
  name: string
  password: string
  createdAt: Date
  updatedAt: Date
  comparePassword(canditatePassword: string): Promise<boolean>
}
