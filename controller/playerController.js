import player from "../models/playerModel.js";

export const crearJugador = async (req, res) => {
  try {
    const nuevoPlayer = new player(req.body);
    await nuevoPlayer.save();
    res.status(201).json(nuevoPlayer);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};
