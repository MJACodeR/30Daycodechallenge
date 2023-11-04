/*
function write three type
 anonymous func (without function name) syntax- func() { body of function }
 normal func (with name) syntax- func function_Name() { body of function } 
 arrow func syntax-  () => { body of function }

//*function expression- when we create a function and assign to a variable k/a func expression.
//*callback - A function passed another func as arguments as k/a callback.
const display = (name,callback)=>{
    console.log(`Hello ${name}`);
    callback();
}
const callMe = ()=>{
    console.log('I am called');
}
display("Abhi!",callMe);
//* A Promise of code execution.
//* starting state is pending.if the operation is successfully,the process is end in fulfilled state.if the operation is reject,the process is end reject state.
Promises provide a way to work with asynchronous operations and handle their results and errors.
They allow you to define success and error callbacks using .then() and .catch() methods.
const count = true;
let countValue = new Promise((resolve,reject)=>{
setTimeout(()=>{
if(count){
    resolve("There is a count value.")
}
else{
    reject("No count value")
}
},2000)
}).then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  })
//*async await is to easier way to write a promise.
async = return a promise.
await = wait for promise.
async/await is a higher-level and more readable way to work with Promises.
It simplifies error handling by using traditional try...catch blocks.
async function display(){
    let P1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('55')
        },2000)
    })
    let P2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve('88')
        },3000)
    })   
    let data = await P1;
    let data2 = await P2;
    console.log({data,data2})
}
display();

//*async await with promise
const match = (async ()=>{
try {
    let P1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('55')
        },2000)
    })
    const result = await P1;
    console.log(result);
} catch (error) {
    console.log(error)
} 
})
match() 
//simple function se Promise linkhne k tarika.
function fetchDataFromAPI(){
    return new Promise((resolve,reject)=>{
        //fetching from API
        setTimeout(() => { 
            const data = {id:1,name:"ABHISHEK"}
            resolve(data)
         },2000)
    })
}
//simple function se async linkhne k tarika.
async function fetchDataAndProcess(){
    try {
        console.log('Fetching data...');
        const result = await fetchDataFromAPI();
        console.log('Data fetched:', result);
    } catch (error) {
        console.log("Data not fetch...")
    }
}
fetchDataAndProcess()

//*create server in nodeJS
const http = require('http');
const port = 3000;
const server = http.createServer((req,res)=>{
res.end("hello")
})
//server listen
server.listen(port,()=>console.log(`http://localhost:${port}`))
//*create server in express
const express = require('express');
const app = express();
const port = 3000;
//GET request according need route
app.get('/',(req,res)=> res.send({message:'Hello World'}))

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})
*/




