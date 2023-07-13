const express=require('express')
const item=require('../../models/Items')

router=express.Router()

router.get('/',(req,res)=>{
    item.find({})
    .sort({date:-1})
    .then(items=>res.json(items));
    return("<h1>Hello world</h1>")
})

router.post('/',(req,res)=>{
    const data=new item({
        name:req.body.Name
    })
    data.save().then((item)=>res.json(item))
    .catch((err)=>res.json(err))
})

router.delete('/:id',(req,res)=>{
    item.findByIdAndDelete({
        _id:req.params.id 
    }).then((out)=>res.json(out))
    .catch((err)=>res.json(err))
})
module.exports=router
