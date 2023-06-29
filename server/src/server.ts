import express from 'express'

import fs from 'fs'
import tmp, { file } from 'tmp'

import { promisify } from 'util'
import * as stream from 'stream'
const pipeline = promisify(stream.pipeline)

const app = express()
const port = 8080

import * as tt from 'tar-transform'
import { bundle } from './exporter'

app.get('/m/:moduleName', async (req, response, next) => {
   
})

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})
