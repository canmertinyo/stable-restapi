import { Express, Request, Response } from 'express'
import config from 'config'

import { createUserHandler } from './controller/user.controller'

const prefix = config.get('prefix') as string

console.log(prefix)

export default function (app: Express): void {
  app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200))

  //register user router
  app.post(prefix + 'users', createUserHandler)

  //login router
  app.post(prefix + 'sessions', createUserSessionHandler)
}
