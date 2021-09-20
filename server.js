const express=require("express")
const cors= require('cors')
const passport = require('passport')
const router= require("./routes/index")
require("dotenv").config()
require("./config/database")
require('./config/passport')

const app= express()

app.use(cors())

 app.use(express.json())
 app.use('/api',router)


app.listen(process.env.PORT || 4000, process.env.HOST || '0.0.0.0',()=>console.log('The server is listening!'))