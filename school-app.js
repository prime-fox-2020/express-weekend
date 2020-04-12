const express = require('express');
const fs = require('fs');
const port = 3000;
const app = express();


app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index.ejs')
})


app.get('/teachers', function(req, res) {
    let dataTeachers = fs.readFileSync('./teachers.json', 'utf-8');
    let teachersArr = JSON.parse(dataTeachers);
    res.render('teachers.ejs', {
        teachers: teachersArr
    })
})

app.get('/students', function(req, res) {
    let dataStudents = fs.readFileSync('./students.json', 'utf-8');
    let studentsArr = JSON.parse(dataStudents)
    res.render('students.ejs', {
        students: studentsArr
    })
})

app.get('/subjects', function(req, res) {
    let dataSubjects = fs.readFileSync('./subjects.json', 'utf-8');
    let subjectsArr = JSON.parse(dataSubjects)
    res.render('subjects.ejs', {
        subjects: subjectsArr
    })
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);  
})
