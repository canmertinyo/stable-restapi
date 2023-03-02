import { LeanDocument } from 'mongoose'
import config from 'config'

import { SessionModel } from '../model/session.model'
import { SessionDocument } from '../interface/session.interface'
import { UserDocument } from '../interface/user.interface'
import { sign } from '../utils/jwt.utils'

export async function createSession(userId: string, userAgent: string): Promise<any> {
  const session = await SessionModel.create({ user: userId, userAgent })

  return session.toJSON()
}

//create access token

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function createAccessToken({
  user,
  session
}: {
  user: Omit<UserDocument, 'password'> | LeanDocument<Omit<UserDocument, 'password'>>
  session: Omit<SessionDocument, 'password'> | LeanDocument<Omit<SessionDocument, 'password'>>
}) {
  const accessToken = sign(
    { ...user, session: session._id },
    { expiresIn: config.get('accessTokenTtl') } // 15 minutes
  )

  return accessToken
}
