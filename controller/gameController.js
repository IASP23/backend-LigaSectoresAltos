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

export const getGame = async (req, res) => {
  try {
    const setGame = await Juego.findById(req.params.id);
    res.status(200).json(setGame);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};

export const updateGame = async (req, res) => {
  try {
    const updatedCategory = await Juego.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};
