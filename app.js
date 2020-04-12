const express = require('express')
const fs = require('fs')

const app = express()
const port = 3000

const teachers = fs.readFileSync('./data/teachers.json','utf8')
const students = fs.readFileSync('./data/students.json','utf8')
const subjects = fs.readFileSync('./data/subjects.json','utf8')

app.set('view engine', 'ejs')

const message = ['Selamat datang di website SMP Negeri 1 Tangerang']

app.get('/', function(req, res){
    res.render('home.ejs', {
        data: message
    })
})

app.get('/teachers', function(req, res){
    res.render('teachers.ejs', {
        data: JSON.parse(teachers)
    })
})

app.get('/students', function(req, res){
    res.render('students.ejs', {
        data: JSON.parse(students)
    })
})

app.get('/subjects', function(req, res){
    res.render('subjects.ejs', {
        data: JSON.parse(subjects)
    })
})


app.listen(port, function(){
    console.log(port)
})