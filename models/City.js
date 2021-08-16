const mongoose= require('mongoose')

const citySchema = new mongoose.Schema({
    name:{type: 'String',required: true},
    image:{type:'String'},
    country:{type:'String'},
    currentMoney:{type:'String'},
    language:{type:'String'},
    description:{type:'String'}
})

const City=mongoose.model('city',citySchema)
 module.exports = City