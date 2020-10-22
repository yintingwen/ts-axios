const express = require('express')

const router = express.Router()

router.get('/query', (req,res,next) => {
  res.json(req.query)
})

router.post('/body/json', (req, res) => {
  res.json(req.body)
})

router.post('/body/json', (req, res) => {
  // const data = []
  // req.on('data', (chunk) => {
  //   if (chunk) {
  //     data.push(chunk)
  //   }
  // })
  // req.on('end', () => {
  //   const buffer = Buffer.concat(data)
  //   res.json(buffer.toJSON())
  // })
  return req.query
})


module.exports = router
