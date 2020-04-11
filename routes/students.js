const {Router} = require('express')
const router = Router()

const fs = require ('fs')

router.get('/students', function (req, res){
    let data = fs.readFileSync('./students.json','utf-8')
    data = JSON.parse(data)
    res.send(data)
})

module.exports = router