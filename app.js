const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('halo')
})

const students = require('./router/students')
app.use(students)

const teachers = require('./router/teachers')
app.use(teachers)

const subjects = require('./router/subjects')
app.use(subjects)

// const students = require('./data/students.json')
// const teachers = require('./data/teachers.json')
// const subjects = require('./data/subjects.json')

// app.set('view engine', 'ejs')

// app.get('/teachers', (req, res) => {
//     res.render('teachers.ejs', {teachers})
// })

// app.get('/students', (req, res) => {
//     res.render('students.ejs', {students})
// })

// app.get('/subjects', (req, res) => {
//     res.render('subjects.ejs', {subjects})
// })

app.listen(port, (err, res) => {
    console.log('this app running on ports:', port)
})
