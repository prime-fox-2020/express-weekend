const { Router } = require('express')
const router = Router()
const fs = require("fs")


router.get('/subjects', function(req, res) {
    fs.readFile('./subjects.json', 'utf-8', function(err, data) {
        if (err) {
            res.send(err)
        } else {
            let subjectsArr = JSON.parse(data);
            res.render('subjects.ejs', {
                subjects: subjectsArr
            })
        }
    });
})

module.exports = router