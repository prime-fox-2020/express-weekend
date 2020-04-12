const { Router } = require('express')
const router = Router()
const fs = require("fs")


router.get('/teachers', function(req, res) {
    fs.readFile('./teachers.json', 'utf-8', function(err, data) {
        if (err) {
            res.send(err)
        } else {
            let teachersArr = JSON.parse(data);
            res.render('teachers.ejs', {
                teachers: teachersArr
            })
        }
    });
})


module.exports = router