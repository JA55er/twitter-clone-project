import express from 'express'

const pingRouter = express.Router()

pingRouter.get('', (req, res) => {
  console.log('geting ping')
  res.send('ping')
})

export default pingRouter