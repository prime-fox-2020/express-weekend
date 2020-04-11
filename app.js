const express = require('express')
const app = express()
const port = 3000

const fs = require('fs');
const teachers = fs.readFileSync('teachers.json', 'utf-8')
const students = fs.readFileSync('students.json', 'utf-8')
const subjects = fs.readFileSync('subjects.json', 'utf-8')

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/teacher', (req, res) => res.send(teachers))
app.get('/student', (req, res) => res.send(students))
app.get('/subject', (req, res) => res.send(subjects))

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))