import express from 'express';
const router=express.Router();

router.get('/check',(req,res)=>{
    res.json({err:"True",message:"no token"})
})
export default router