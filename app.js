
const express = require('express')
const app = express()
const port = 3000

const students = require('./routes/student.js') // from routes
const subjects = require('./routes/subject.js') // from routes
const teachers = require('./routes/teacher.js') // from routes

app.use(students) // use the routes
app.use(subjects) // use the routes
app.use(teachers) // use the routes

app.get('/', (req, res) => {
    res.send(`Welcome to our page! try adding some routes of students/teachers/subjects on the url.`)
})

app.listen(port, function (){
    console.log(`This app working on port: ${port}`)
})

// view experiment source: Youtube - Wikanyaa
// app.set('save', 'ejs')

// app.get('/', (request, response) => {
//     // response.send(`This is Home page.`)                                 // 1
//     // response.render(`../views/home.ejs`)                                // 2
//     const colors = ['Aqua', 'Violet', 'Maroon', 'Tosca', 'Bumblebee']
//     response.render(`../views/home.ejs`, {                                 // 3
//         /** for html => */colors: colors /** <= for mentioned above*/
//     })                                   
// })
