import Rentacar from "../models/Rentacar.js";

export const createRentacar=async(req,res,next)=>{
    const newRentacar = new Rentacar(req.body);
    try{

        const savedRentacar=await newRentacar.save();
        res.status(200).json(savedRentacar);
    }catch(err){
        next(err);
    }
}

export const updateRentacar=async(req,res,next)=>{
    try{

        const updatedRentacar=await Rentacar.findByIdAndUpdate(req.params.id, { $set:req.body},{new:true});
        res.status(200).json(updatedRentacar);
    }catch(err){
        next(err);
    }
}

export const deleteRentacar=async(req,res,next)=>{
    try{

        await Rentacar.findByIdAndDelete(req.params.id);
        res.status(200).json("Car has been deleted.");
    }catch(err){
        next(err);
    }
}

export const getRentacar=async(req,res,next)=>{
    try{

        const rentacar=await Rentacar.findById(req.params.id);
        res.status(200).json(rentacar);
    }catch(err){
        next(err);
    }
}

export const getRentacars=async(req,res,next)=>{
    const {min,max,...others}=req.query
    try{

        const rentacars=await Rentacar.find({...others,cheapestPrice:{$gt:min | 1,$lt:max || 325436478}}).limit(req.query.limit);
        res.status(200).json(rentacars);
    }catch(err){
        next(err);
    }
}

export const countByCity=async(req,res,next)=>{
    const cities=req.query.cities.split(",")
    try{



        const list=await Promise.all(cities.map(city=>{
            return Rentacar.countDocuments({city:city})
        }))
        res.status(200).json(list);
    }catch(err){
        next(err);
    }
}

export const countByType=async(req,res,next)=>{
   
    try{
        const rentacarCount =await Rentacar.countDocuments({type:"RENT A CAR"})
        

        res.status(200).json([
            {type:"Rentacars",count:rentacarCount}

        ]);

    }catch(err){
        next(err);
    }
}