const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT
const dbConnect = require('./dbConnect')
const dbModel = require('./user')
const app = express()
















const startServer=async()=>{
    try {
        await dbConnect.authenticate()
        app.listen(PORT,()=>{
            console.log(`\x1b[32m Server is running on \x1b[31m http://localhost:${PORT} \x1b[33m`);
        })
    }catch (error) {
        console.log(error);
    }
}

startServer()