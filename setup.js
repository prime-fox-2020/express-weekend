const fs = require('fs')
const teachers = JSON.parse(fs.readFileSync('./teachers.json', 'utf8'))
const students = JSON.parse(fs.readFileSync('./students.json', 'utf8'))
const subject = JSON.parse(fs.readFileSync('./subject.json', 'utf8'))

const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

console.table(teachers)

app.get('/', (req, res) => {
    const message = 'Sekolah Muara Ilmu merupakan institusi pendidikan formal yang memiliki akreditasi A.\nSekolah Muara Ilmu menggunakan kurikulum berbasis internasional yang diterapkan di Jepang.\nDengan tim pengajar yang memiliki spesialisasi pada bidang pengajaran, kami dapat mencetak generasi-generasi cemerlang.'
    res.render('home.ejs', {
        message : message
    })
})

app.get ('/teachers', (req, res) => {
    res.send(teachers)
})

app.get ('/students', (req, res) => {
    res.send(students)
})

app.get ('/subject', (req, res) => {
    response.send(subject)
})

app.listen (port, () => {
    console.log('This app is running on port: ', port)
})