const express=require('express')
const router = express.Router()
const Department = require('../models/Department')
const { mongoose } = require('mongoose')

router.get('/',async (req,res)=>{
    try{
        const results = await Department.find()
        if(results){
            res.status(200).json(results)
        }
        else{
            res.status(404).send("Sorry, No Data Found ! ")
        }
    }
    catch(error){
        console.error(error);
        res.status(500).send("Server Error ! ")
    }
}) 

//give a dept id and get the  employee who are working there 

router.get('/:id',async (req,res)=>{
    try{
        const id = req.params.id
        const results = await Department.findById(id)
        if(results){
            res.status(200).json(results)
        }
        else{
            res.status(404).send("Sorry, No Data Found ! ")
        }
    }
    catch(error){
        console.error(error);
        res.status(500).send("Server Error ! ")
    }
})

router.get('/emp/:did',async (req,res)=>{
    try{
        const did = req.params.did
        //need to change 
        const results = await Department.find()
        if(results){
            res.status(200).json(results)
        }
        else{
            res.status(404).send("Sorry, No Data Found ! ")
        }
    }
    catch(error){
        console.error(error);
        res.status(500).send("Server Error ! ")
    }
})
router.get('/emp/:did',async (req,res)=>{
    try{
        const did = req.params.did
        
        //display only emp id, name,department name
        const results = await Employee.find({departmentId:did},{name:1,departmentId:1}).populate("departmentID")
      
        //manipulate the results
        //find how many employee are working in a department
        if(results){
            res.status(200).json(results)
        }
        else{
            res.status(404).send("Sorry, No Data Found ! ")
        }
    }
    catch(error){
        console.error(error);
        res.status(500).send("Server Error ! ")
    }
})


module.exports=router