const fs = require('fs')
const express = require('express')
const app = express()
const port = 3000

const students = JSON.parse(fs.readFileSync('./data/students.json', 'utf8'))
const subjects = JSON.parse(fs.readFileSync('./data/subjects.json', 'utf8'))
const teachers = JSON.parse(fs.readFileSync('./data/teachers.json', 'utf8'))


// app.set('view engine', 'ejs')

app.get('/', (req,res) => {
  res.send(`Hello world`)
})

app.get('/profile', (req,res) =>{
  res.send(`PROFILE PAGE`)
})

app.get('/students', (req,res) =>{
  res.send(students)
})

app.get('/subjects', (req,res) =>{
  res.send(subjects)
})
  
app.get('/teachers', (req,res) =>{
  res.send(teachers)
})

app.listen(port, function(){
  console.log(`this app running on port: ${port}`);
})
