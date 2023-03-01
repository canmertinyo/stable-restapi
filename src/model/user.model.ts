import mongoose, { HookNextFunction } from 'mongoose'
import bcrypt from 'bcrypt'
import config from 'config'

import { UserDocument } from '../interface/user.interface'

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true }
  },
  { timestamps: true }
)

UserSchema.pre('save', async function (next: HookNextFunction) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, prefer-const
  let user = this as UserDocument

  if (!user.isModified('password')) return next()

  const salt = await bcrypt.genSalt(config.get('saltWorkFactor'))

  const hash = await bcrypt.hashSync(user.password, salt)

  user.password = hash

  return next()
})

UserSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
  const user = this as UserDocument

  return bcrypt.compare(candidatePassword, user.password).catch((error: any) => false + error)
}

export const User = mongoose.model<UserDocument>('User', UserSchema)
