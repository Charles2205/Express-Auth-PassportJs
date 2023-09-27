const {Sequelize,DataTypes} = require('sequelize')
const dbConnect = require('./dbConnect')
const users= dbConnect.define('users',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    user_name:{
        type:DataTypes.STRING,
        allowNull: false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    full_name:{
        type:DataTypes.STRING,
        allowNull:false
    }
})
users.sync({alter:true})
module.exports= users