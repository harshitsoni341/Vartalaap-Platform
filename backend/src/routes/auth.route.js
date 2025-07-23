import express from 'express';
import {logout, login, signup ,onboard } from '../controllers/auth.controller.js';
import { protectRoute } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post("/signup", signup)
router.post("/login", login)
router.post("/logout", logout)

router.post("/onboarding", protectRoute ,onboard)

//add forget password route later

//check if user if logged in
router.get("/me",protectRoute,(req,res)=>{
    res.status(200).json({success:true,user:req.user});
});

export default router;