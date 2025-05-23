const mongoose = require('mongoose')
const courseSchema =new mongoose.Schema({
    code:{type:String},
    name:{type:String},
    credits:{type:Number},
    description:{type:String}
})

const Course = mongoose.model('courses',courseSchema)
const webservices = new Course({
    code:'IT2234',
    name:'Practical for webService',
    credit:3,
    description:'Build a REST API with NodeJS technology'
})
webservices.save()
module.exports=Course