const fs = require('fs')
const Router = require('express')
const router = Router()

router.get('/teachers', (req, res) => {
  let teachers = fs.readFileSync('./data/teachers.json', 'utf8')
  teachers = JSON.parse(teachers)
  res.send(teachers)
})

module.exports = router