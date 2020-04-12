const express=require('express')
const fs =require('fs')

const app=express()
const port=3000


app.get('/',function(req,res){
    res.send('School Application')
})

app.get('/students',function(req,res){
    fs.readFile('./students.json','utf8',(err,data)=>{
    if(err){
        res.send(err)
    }else{
        data=JSON.parse(data)
        res.send(data)
    }
})
})

app.get('/teachers',function(req,res){
    fs.readFile('./teachers.json','utf8',(err,data)=>{
    if(err){
        res.send(err)
    }else{
        data=JSON.parse(data)
        res.send(data)
    }
})
})

app.get('/subjects',function(req,res){
    fs.readFile('./subjects.json','utf8',(err,data)=>{
    if(err){
        res.send(err)
    }else{
        data=JSON.parse(data)
        res.send(data)
    }
})
})
    
app.listen(port,function(){
    console.log('CONNECTED')
})

