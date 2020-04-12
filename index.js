const express = require("express");
const fs = require("fs")
const app = express()
const students = JSON.parse(fs.readFileSync('./students.json', "utf8"))
const teachers = JSON.parse(fs.readFileSync('./teachers.json', "utf8"))
const subjects = JSON.parse(fs.readFileSync('./subjects.json', "utf8"))

app.listen(3000)
app.set('view engine', 'ejs')


app.get("/",(req,res)=>{
    res.render("home")
})

app.get("/teachers",(req,res)=>{
    res.render("teachers", { teachers: teachers })
})

app.get("/students",(req,res)=>{
    res.render("students", { students: students })
})

app.get("/subjects",(req,res)=>{
    res.render("subjects", { subjects: subjects })
})

