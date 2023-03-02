import mongoose from 'mongoose'
import config from 'config'

export async function connectDatabase(): Promise<void> {
  const dbUri = config.get('dbUri') as string

  mongoose.set('strictQuery', true)

  return mongoose
    .connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('database connected'))
    .catch((err: any) => {
      console.log('connection failed!' + err)
    })
}
