import Partneruser from "../models/Partneruser.js";
import bcrypt from "bcryptjs";

export const updatePartneruser = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);

    const hash = bcrypt.hashSync(req.body.password, salt);
    const updatedPartneruser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body, password: hash },
      { new: true }
    );
    res.status(200).json(updatedPartneruser);
  } catch (err) {
    next(err);
  }
};

export const deletePartneruser = async (req, res, next) => {
  try {
    await Partneruser.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted.");
  } catch (err) {
    next(err);
  }
};

export const getPartneruser = async (req, res, next) => {
  try {
    const partneruser = await Partneruser.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

export const getPartnerusers = async (req, res, next) => {
  try {
    const partnerusers = await Partneruser.find();
    res.status(200).json(partnerusers);
  } catch (err) {
    next(err);
  }
};
