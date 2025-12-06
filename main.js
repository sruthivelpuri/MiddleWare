import express from 'express';
//instant object of express
// creating server
const app = express();//app is an instant object that contain all methods of express
//starting server

app.get('/',(req,res)=>{
    res.send("hello this is from backend");
})

app.get('/users',(req,res)=>{
    res.send("Welcome to HOME page");
})

app.get('/get-documents',(req,res)=>{
    res.send("Document is getting fetched");
})
app.listen(7008,() =>{
    console.log("server started at port 7008");
});