const express=require('express');
const dotenv=require('dotenv').config();
const dbConfig=require('./config/df')
// database configure

dbConfig();

const app =express();
// middlewares
app.use(express.json())

// routes 
app.use('/api/auth',require('./routes/authRoutes'))
app.use('/api/users',require('./routes/userRoutes'))
app.get('/',(req,res)=>{
    res.send("the welcome status is clear")
})

//server starter
const port=process.env.PORT || 7000;
app.listen(port, () =>{console.log("server is started on ",port)})

