import express from 'express'

import getStatus from './background/networkInfo'


const app = express()

app.get('/networkStatus', async (req, res, next) => {
  try {
    const status = await getStatus()
    res.json(status)
  } catch (ex) {
    next(ex)
  }
})

export default app
