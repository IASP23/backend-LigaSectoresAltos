import Game from "../models/gameModel.js";
import player from "../models/playerModel.js";

export const crearGame = async (req, res) => {
  try {
    const nuevoGame = new Game(req.body);
    await nuevoGame.save();
    res.status(201).json(nuevoGame);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};

export const getGame = async (req, res) => {
  try {
    const setGame = await Game.findById(req.params.id);
    res.status(200).json(setGame);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};

export const updateGame = async (req, res) => {
  try {
    const updatedCategory = await Game.findByIdAndUpdate(
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

export const getWin = async (req, res) => {
  try {
    const setGame = await Game.findById(req.params.id);

    if (setGame.golesLocal == setGame.golesVisitante) {
      setGame.ganador = "Empate";
    }

    if (setGame.golesLocal > setGame.golesVisitante) {
      setGame.ganador = setGame.equipoLocal;
    } else {
      setGame.ganador = setGame.equipoVisitante;
    }
    setGame.save();
    res.status(200).json(setGame);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};
