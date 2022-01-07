const express = require ('express')
const router = new express.Router();
const MensRanking = require("../models/mens")


router.post("/mens",async(req,res)=>{
    try{
     const addRecord = new MensRanking(req.body)
     console.log(req.body);
      const inserMens= await addRecord.save();
      res.status(201).send(inserMens);
    }catch(e){
            res.status(400).send(e);
    }
})

router.get("/mens",async(req,res)=>{
    try{
     const getMens = await MensRanking.find({}).sort({"ranking":1});
      res.send(getMens);
    }catch(e){
            res.status(400).send(e);
    }
})
// We will handle get request of indiv
router.get("/mens/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
     const getMen = await MensRanking.findById({_id})
      res.send(getMen);
    }catch(e){
            res.status(400).send(e);
    }
})

// We will handle patch request of indiv
router.patch("/mens/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
     const getMen = await MensRanking.findByIdAndUpdate(_id,req.body)
      res.send(getMen);
    }catch(e){
            res.status(500).send(e);
    }
})

// We will handle delete request of indiv
router.delete("/mens/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
     const getMen = await MensRanking.findByIdAndDelete(req.params.id)
      res.send(getMen);
    }catch(e){
            res.status(500).send(e);
    }
})

module.exports = router;