const fs = require('fs')
const Router = require('express')
const router = Router()

router.get('/students', (req, res) => {
  let students = fs.readFileSync('./data/students.json', 'utf8')
  students = JSON.parse(students)
  res.send(students)
})

module.exports = router