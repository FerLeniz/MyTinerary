const mongoose= require('mongoose')

const userSchema = new mongoose.Schema({
    name:{type: 'String'},
    lastName:{type:'String'},
    email:{type:'String'},
    password:{type:'String'},
    url:{type:'String'},
    country:{type:'String'},
    google:{type:"Boolean",default:false},
})

const User=mongoose.model('user',userSchema)
 module.exports = User