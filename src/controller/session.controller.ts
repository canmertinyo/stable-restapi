import { Request, Response } from 'express'
import config from 'config'

import { sign } from '../utils/jwt.utils'
import { validatePassword } from '../service/user.service'
import { createAccessToken, createSession } from '../service/session.service'

export async function createUserSessionHandler(req: Request, res: Response): Promise<any> {
  const user = await validatePassword(req.body)

  if (!user) {
    return res.status(401).send('invalid username or password')
  }

  const session = await createSession(user._id, req.get('user-agent') || '')

  const accessToken = createAccessToken({ user, session })

  const refreshToken = sign(session, { expiresIn: config.get('refreshTokenTtl') })

  return res.send({ accessToken, refreshToken })
}
