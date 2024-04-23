const express=require('express')

const dotenv=require('dotenv').config()
const cors=require('cors')

const {mongoose} =require('mongoose')
const app=express();
const cookieParser=require('cookie-parser')
//database connection
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log('database connected'))
.catch((err)=> console.log('database not connected',err))

//middle ware
app.use(express.json()) 
app.use(cookieParser())
app.use(express.urlencoded({extended:false}))

//changed from
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
  
  // ... your routes and server logic
  
  app.listen(5501, () => {
    console.log(' ');
  });
// changed to


app.use('/',require('./routes/authRoutes'))


const port=8000;
app.listen(port,()=>console.log("server is running at port 8000"))



  
  
  
  
  
   
