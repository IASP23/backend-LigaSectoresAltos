import Gol from "../models/golModel.js";

export const crearGol = async (req, res) => {
  try {
    const nuevoGol = new Gol(req.body);
    await nuevoGol.save();
    res.status(201).json(nuevoGol);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};
