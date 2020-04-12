const fs      = require('fs');
const express = require('express');
const app     = express();
const port    = 3000 || process.env.PORT;

//json file
const teachers = fs.readFileSync('./db/teachers.json', 'utf8');
const students = fs.readFileSync('./db/students.json', 'utf8');
const subjects = fs.readFileSync('./db/subjects.json', 'utf8');

//SetUp 
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => res.render('index'));

app.get('/teachers', (req,res) => {
  const teacher = JSON.parse(teachers);
  res.render('teachers', {teacher : teacher});
});

app.get('/students', (req,res) => {
  const student = JSON.parse(students);
  res.render('students', {student : student});
});

app.get('/subjects', (req,res) => {
  const subject = JSON.parse(subjects);
  res.render('subjects', {subject : subject});
});

app.listen(port, () => console.log('School app is started'));