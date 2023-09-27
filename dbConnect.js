const {Sequelize} = require('sequelize')
require('dotenv').config()
const DB_NAME = process.env.DB_NAME
const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD


const sequel = new Sequelize(DB_NAME,DB_USER,DB_PASSWORD,{
    host:DB_HOST
,    dialect:'mssql'
})

module.exports = sequel