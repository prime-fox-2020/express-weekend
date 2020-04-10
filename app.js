const express = require ('express')
const fs = require('fs')
const app = express ()
const port = 3000

const student = JSON.parse(fs.readFileSync('./data/student.json', 'utf-8'));
const subject = JSON.parse(fs.readFileSync('./data/subject.json', 'utf-8'));
const teacher = JSON.parse(fs.readFileSync('./data/teacher.json', 'utf-8'));


// app.use('/',router)

// buat request
app.listen (port,(err,res)=> {
    console.log(`this app run on port ${port}`)
})


// buat nge get setelah request

app.get('/',(req,res)=>{
    res.send('hello, ini profile')
})



app.get('/about',(req,res)=>{
    res.send('cobain aja dulu urusan mentok kan ada buddy')
})


//resend nanti pisah ke "anything".JS ajah
// masukin juga data data nya yang tadi uda di buat di JSON

// router.get('/teachers',(req,res)=>{
//     res.send(teacher)
// })



app.get('/students',(req,res)=>{
    res.send(student)
})

app.get('/subjects',(req,res)=>{
    res.send(subject)
})



// tambahin isinya router
// module.export = router
// app.use (router) h