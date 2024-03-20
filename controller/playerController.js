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

export const getPlayer = async (req, res) => {
  try {
    const setPlayer = await player.findById(req.params.id);
    res.status(200).json(setPlayer);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};

export const updatePlayer = async (req, res) => {
  try {
    const updatedPlayer = await player.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updatedPlayer);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};
