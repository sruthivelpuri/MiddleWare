import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import cors from 'cors';    
const app = express();

app.use(cors());

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




//API calls

const fetchdata = () =>{
    axios.get("http://localhost:7009/").then((response)=>{
        console.log(response.data);
    }   ).catch((error)=>{
        console.log(error);
    }   );  
}

const postdata = () =>{
    let user={
        name:"John Doe",
        age:30,
        email:"XYZ@GMAIL.COM"
    }
    axios.post("http://localhost:7009/adduser",user).then((response)=>{
        console.log(response.data);
    }   ).catch((error)=>{
        console.log(error);
    }   );
}