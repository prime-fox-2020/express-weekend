const {Router} = require('express')
const router = Router()

const fs = require ('fs')
// let data = fs.readFile('./data/teachers.json','utf-8', (err,res) =>{
//     if(err) console
// })
// data = JSON.parse(data)

// console.log(data)

router.get('/teachers', function (req, res){
    // res.send('masuk')
    let data = fs.readFileSync('./teachers.json','utf-8')
    data = JSON.parse(data)
    res.send(data)
})

module.exports = router