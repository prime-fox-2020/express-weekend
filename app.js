const express = require('express')
const app = express()
const port = 3000

const profile = require('./routes/profile')
const teachers = require('./routes/teachers')
const subjects = require('./routes/subjects')
const students = require('./routes/students')

app.use(profile)
app.use(teachers)
app.use(students)
app.use(subjects)

app.listen(port, () => {
  console.log(`Connected on port ${port}`)
})


