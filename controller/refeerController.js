import refeer from "../models/refeerModel.js";

export const crearJuego = async (req, res) => {
  try {
    const nuevoRefeer = new refeer(req.body);
    await nuevoRefeer.save();
    res.status(201).json(nuevoRefeer);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};
