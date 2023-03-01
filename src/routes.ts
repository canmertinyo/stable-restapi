import { Express, Request, Response } from 'express'

export default function (app: Express): void {
  app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200))
}
