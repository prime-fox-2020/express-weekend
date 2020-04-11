const {Router} = require('express')
const router = Router()

const fs = require ('fs')

router.get('/subjects', function (req, res){
    let data = fs.readFileSync('./subjects.json','utf-8')
    data = JSON.parse(data)
    res.send(data)
})

module.exports = router