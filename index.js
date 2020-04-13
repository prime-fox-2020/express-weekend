const fs = require('fs');
const express = require('express');
const teachers = JSON.parse(fs.readFileSync('./teachers.json', 'utf8'));
const students = JSON.parse(fs.readFileSync('./students.json', 'utf8'));
const subjects = JSON.parse(fs.readFileSync('./subjects.json', 'utf8'))

const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.send('<h1>My First School App1<h1>');
})

app.get('/teachers', (req, res)=>{
    res.send(teachers);
})

app.get('/students', (req, res)=>{
    res.send(students);
})

app.get('/subjects', (req, res)=>{
    res.send(subjects);
})

app.listen(port, ()=>{
    console.log(`run in port ${port}`);
})