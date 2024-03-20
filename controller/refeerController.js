import refeer from "../models/refeerModel.js";

export const createRefeer = async (req, res) => {
  try {
    const newRefeer = new refeer(req.body);
    await newRefeer.save();
    res.status(201).json(newRefeer);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};
