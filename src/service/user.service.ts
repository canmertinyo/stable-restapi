import { DocumentDefinition } from 'mongoose'
import { omit } from 'lodash'

import { UserDocument } from '../interface/user.interface'
import { User } from '../model/user.model'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function createUser(input: DocumentDefinition<UserDocument>): Promise<any> {
  try {
    return await User.create(input)
  } catch (error: any) {
    throw new Error(error)
  }
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
function findUser(): void {}

export async function validatePassword({
  email,
  password
}: {
  email: UserDocument['email']
  password: string
}): Promise<any> {
  const user = await User.findOne({ email })

  if (!user) {
    return false
  }

  const isValid = await user.comparePassword(password)

  if (!isValid) {
    return false
  }

  return omit(user.toJSON(), 'password')
}
