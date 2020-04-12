const fs = require('fs')
const Router = require('express')
const router = Router()

router.get('/subjects', (req, res) => {
  let subjects = fs.readFileSync('./data/subjects.json', 'utf8')
  subjects = JSON.parse(subjects)
  res.send(subjects)
})

module.exports = router