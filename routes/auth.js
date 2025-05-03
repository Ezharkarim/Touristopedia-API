import express from "express";
import {
  login,
  register,
  partnerregister,
  partnerlogin
} from "../controllers/auth.js";
const router=express.Router();

 
router.post("/register",register);
router.post("/login",login);

router.post("/partnerregister", partnerregister);
router.post("/partnerlogin", partnerlogin);
export default router