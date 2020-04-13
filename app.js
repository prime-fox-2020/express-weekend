const fs = require('fs')
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`School App Inisiated.`)
})

app.get('/teachers', (req, res) => {
  let teachers = fs.readFileSync('./teachers.json', 'utf8')
  res.send(teachers)
})

app.get('/students', (req, res) => {
  let students = fs.readFileSync('./students.json', 'utf8')
  res.send(students)
})

app.get('/subjects', (req, res) => {
  let subjects = fs.readFileSync('./subjects.json', 'utf8')
  res.send(subjects)
})

app.listen(port, () => {
    console.log(`Server is online on port ${port}.`)
})