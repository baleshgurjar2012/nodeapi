const express = require('express'); 
const mongoose = require('mongoose');
const app = express()

app.get('/',(req,res)=>{
    console.log('connected')
    res.send('connected')
})

const PORT = 5000; 
app.listen(PORT,()=>{
    console.log(`Running on PORT ${PORT}`); 
})

//mongodb connection
mongoose.connect('mongodb://127.0.0.1:27017/demo-project').then(()=>console.log("Mongo DB connected"))
.catch((er)=> console.log('error',er))

