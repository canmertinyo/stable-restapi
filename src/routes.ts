import { Express, Request, Response } from 'express'

import { createUserHandler } from './controller/user.controller'

export default function (app: Express): void {
  app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200))

  //register user router
  app.post('/api/users', createUserHandler)
}
