const fs = require('fs')
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Welcome to School App')
})

app.get('/teachers', (req, res) => {
  const teachers = fs.readFileSync('./teachers.json', 'utf8')
  res.send(teachers)
})

app.get('/students', (req, res) => {
  const students = fs.readFileSync('./students.json', 'utf8')
  res.send(students)
})

app.get('/subjects', (req, res) => {
  const subjects = fs.readFileSync('./subjects.json', 'utf8')
  res.send(subjects)
})

app.listen(port, () => {
  console.log(`server is on ${port}`)
})