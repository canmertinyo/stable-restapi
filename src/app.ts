import express from 'express'
import config from 'config'

import { connectDatabase } from './db/connect'

const port = config.get('port') as number
const host = config.get('host') as string

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(port, host, () => {
  console.log(`server listening at http://${host}:${port}`)
  connectDatabase()
})
