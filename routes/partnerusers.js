import {
  updatePartneruser,
  deletePartneruser,
  getPartneruser,
  getPartnerusers
} from "../controllers/partneruser.js";
import express from "express";
import { verifyToken, verifyPartneruser } from "../utils/verifyToken.js";

const router = express.Router();

//update
router.put("/update/:id", verifyPartneruser, updatePartneruser);

//delete
router.delete("/:id", verifyPartneruser, deletePartneruser);

 //get
 router.get("/:id", verifyPartneruser, getPartneruser);

 //get all
 router.get("/", verifyPartneruser, getPartnerusers);



export default router;
