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

export const getGol = async (req, res) => {
  try {
    const setGol = await Gol.findById(req.params.id);
    res.status(200).json(setGol);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};

export const calculate = async () => {
  idPartido;
  idTeam;
  goles;
  try {
  } catch (error) {
    throw Error(error);
  }
};
