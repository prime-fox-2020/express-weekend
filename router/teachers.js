const {Router} = require('express')
const router = Router()

const fs = require('fs')

router.get('/teachers', (req, res) => {
  fs.readFile('./data/teachers.json', 'utf8', (err, data) => {
    if(err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
})

module.exports = router