import mongoose from 'mongoose'

import { UserDocument } from './user.interface'

export interface SessionDocument extends mongoose.Document {
  user: UserDocument['_id']
  valid: boolean
  userAgent: string
  createdAt: Date
  updatedAt: Date
}
