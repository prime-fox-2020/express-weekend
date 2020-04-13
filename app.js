const fs = require('fs')
const express = require('express');
const app = express();

const port = 3000;


app.get('/', (req, res) => {
    res.send('Profil Aplikasi Sekolah')
})

app.get('/teachers', (req, res) => {
    const teachers = JSON.parse(fs.readFileSync('teachers.json', 'utf8'))
    res.send(teachers)
})

app.get('/students', (req, res) => {
    const students = JSON.parse(fs.readFileSync('students.json', 'utf8'))
    res.send(students)
})

app.get('/subjects', (req, res) => {
    const subjects = JSON.parse(fs.readFileSync('subjects.json', 'utf8'))
    res.send(subjects)
})

app.listen(port, (err, res) => {
    if (err) { console.log('ada yg salah'); }
    else { console.log('App berjalan di port: ', port); }
})