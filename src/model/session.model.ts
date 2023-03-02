import mongoose from 'mongoose'

import { SessionDocument } from '../interface/session.interface'

const SessionSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    valid: { type: Boolean, default: true },
    userAgent: { type: String }
  },
  { timestamps: true }
)

export const SessionModel = mongoose.model<SessionDocument>('Session', SessionSchema)
