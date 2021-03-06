import express from 'express'
import cors from 'cors'

import api from './api'
import renderer from './middleware/renderer'


const app = express()

app.use(cors())

app.use('/api', api)
app.get('^/$', renderer)

app.use(express.static('public'))

app.get('*', renderer)

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`)
})
