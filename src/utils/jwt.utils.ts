import jwt from 'jsonwebtoken'
import config from 'config'

const privateKey = config.get('privateKey') as string

// eslint-disable-next-line @typescript-eslint/ban-types
export function sign(object: Object, options?: jwt.SignOptions | undefined): any {
  return jwt.sign(object, privateKey, options)
}
