import { Express, Request, Response } from 'express'

import validateRequest from './middleware/validateRequest'
import { createUserHandler } from './controller/user.controller'
import { createUserSchema } from './schema/user.schema'

export default function (app: Express): void {
  app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200))

  //register user router
  app.post('/api/users', validateRequest(createUserSchema), createUserHandler)
}
