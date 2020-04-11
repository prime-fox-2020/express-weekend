const {Router} = require('express')
const router = Router()

const fs = require ('fs')

router.get('/subjects', function (req, res){
    fs.readFile('./data/subjects.json', 'utf-8', (err, data) => {
        if (err) {
            res.send(err)
        } else {
            res.send(data)
        }
    })
})

module.exports = router