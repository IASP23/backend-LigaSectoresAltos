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

export const getRefeer = async (req, res) => {
  try {
    const setRefeer = await refeer.findById(req.params.id);
    res.status(200).json(setRefeer);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};

export const updateRefeer = async (req, res) => {
  try {
    const updatedRefeer = await refeer.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updatedRefeer);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};
