import Juego from "../models/gameModel.js";

export const crearJuego = async (req, res) => {
  try {
    const nuevoJuego = new Juego(req.body);
    await nuevoJuego.save();
    res.status(201).json(nuevoJuego);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};
