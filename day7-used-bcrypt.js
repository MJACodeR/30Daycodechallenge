const express = require('express')
const app = express();
const port = 3000;
const bcrypt = require('bcrypt')
const saltRounds = 10

const bodyParser = require("body-parser");
app.use(bodyParser.json()); 

app.post('/login',(req,res)=>{
    const {username,password}= req.body;
    bcrypt.hash(password, saltRounds, function(err, hashpassword) {
        if(err){
            console.log(err);
            res.send({"error":"Error in hashing password"})
        }else{
            res.json({username,hashpassword})
            console.log(hashpassword); 
        }
    });
})

app.post('/SignIn',(req,res)=>{
    const {password,hashpassword}= req.body;
    bcrypt.compare(password, hashpassword, function(err, result) {
        if(err){
            console.log('enter wrong password..');
        }
        else{
            res.send(result)
        }
    });
})

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})