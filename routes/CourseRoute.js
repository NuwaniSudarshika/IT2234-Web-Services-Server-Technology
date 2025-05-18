const express=require('express')
const router = express.Router()
const Course = require('../model/Course')

router.get('/',async(req,res)=>{
    try{
        const results = await Course.find()
        if(results){
            res.status(200).json(results)
        }else{
            res.status(404).send("Sorry,No Data Found!")
        }
    }catch(error){
        console.error(error);
        res.status(500).send("Server Error !")
    }
})

router.get('/:id',async(req,res)=>{
    try{
        const id = req.params.id
        const results = await Course.find({code:id})
        if(result){
            res.status(200).json(results)
        }else{
            res.status(404).send("Sorry, No Data Found!")
        }
    }catch(error){
        console.error(error);
        res.status(500).send("Server, No Data Found!")
    }
})

router.get('/:code/:cid',async(req,res)=>{
    try{
        const id = req.params.cid
        const results = await Course.find({code:cid})
        if(results){
            res.status(200).json(results)
        }else{
            res.status(404).send("Sorry, No Data Found!")
        }
    }catch(error){
        console.error(error);
        res.status(500).send("Server Error !")
    }
})

module.exports=router