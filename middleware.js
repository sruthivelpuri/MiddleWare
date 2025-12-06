import express from 'express';
import bodyParser from 'body-parser';
const app = express();

//middleware function
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hello from Middleware");
})

app.post('/adduser',(req,res)=>{
    let data=req.body;
    //logic to add user
    console.log(data);
    res.send("User added successfully");
});

app.listen(7009,()=>{
    console.log("Middleware server started at port 7009");
})