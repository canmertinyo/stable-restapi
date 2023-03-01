import { DocumentDefinition } from 'mongoose'

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
