const { Router } = require('express')
const router = Router()
const fs = require("fs")


router.get('/students', function(req, res) {
    fs.readFile('./students.json', 'utf-8', function(err, data) {
        if (err) {
            res.send(err)
        } else {
            let studentsArr = JSON.parse(data);
            res.render('students.ejs', {
                students: studentsArr
            })
        }
    });
})

module.exports = router
