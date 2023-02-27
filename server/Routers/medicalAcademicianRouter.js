import express from "express";
import bcrypt from 'bcryptjs';
import Academician from '../models/academicianModel.js';
import mongoose from "mongoose";


const router = express.Router();

// http://localhost:5000/academician/signin POST request
router.post("/signin", async (req,res)=>{
    try {
        const {email, password} = req.body;
        const academician = await User.findOne({email})
        if(!academician)
            return res.status(400).json({message: "academician does not exist"})
        
        const isPasswordCorrect = await bcrypt.compare(password, academician.password)
        if(!isPasswordCorrect)
            return res.status(400).json({message: "Wrong Password"})
        
        return res.status(200).json({ academician, message: 'Authentication successful' })

    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})

export default router;