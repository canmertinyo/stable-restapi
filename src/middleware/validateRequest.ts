import { AnySchema } from 'yup'
import { Request, Response, NextFunction } from 'express'

const validate =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
      await schema.validate({
        body: req.body,
        query: req.query,
        params: req.params
      })

      return next()
    } catch (e: any) {
      console.error(e)
      return res.status(400).send(e)
    }
  }

export default validate
