import express from "express";
import { deleteRentacar,
    createRentacar,
    updateRentacar,
    getRentacar,
    getRentacars,
    countByType, 
    countByCity } from "../controllers/rentacar.js";
import {verifyAdmin} from "../utils/verifyToken.js"

 const router=express.Router();

 //create
 router.post("/",verifyAdmin,createRentacar);

 //update
 router.put("/:id",verifyAdmin,updateRentacar);

 //delete
 router.delete("/:id",verifyAdmin,deleteRentacar);

 //get
 router.get("/find/:id",getRentacar);

 //get all
 router.get("/",getRentacars);
 router.get("/countByCity",countByCity);
 router.get("/countByType",countByType);
 
 export default router