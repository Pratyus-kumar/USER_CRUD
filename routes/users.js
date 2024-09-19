const express = require('express')
const router = express.Router()
const user = require('../models/user')

router.get('/', async(req,res) => {
    try{
    const users=  await user.find()
    res.json(users)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.get('/:id', async(req,res) => {
    try{
    const user1=  await user.findById(req.params.id)
    res.json(user1)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.post('/',async(req,res) =>{
    const user1 = new user({
    name: req.body.name,
    tech:req.body.tech,
    sub:req.body.sub
})
   try{
   const a1 = await user1.save()
   res.json(a1)
   }catch(err){
    res.send('error')
   }
})

router.patch('/:id',async(req,res)=>{
    try{
     const user1 = await user.findById(req.params.id)
     user1.sub = req.body.sub
     const a1 = await user1.save()
     res.json(a1)
    }catch(err){
        res.send('Error')
    }
})
module.exports = router