import Tournament from "../models/tournamentModel.js";

export const createTournamente = async (req, res) => {
  try {
    const newTournament = new Tournament(req.body);
    await newTournament.save();
    res.status(201).json(newTournament);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};

export const getTournament = async (req, res) => {
  try {
    const setTournament = await Tournament.findById(req.params.id);
    res.status(200).json(setTournament);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};

export const updateTournament = async (req, res) => {
  try {
    console.log(req.body);
    const updatedTournament = await Tournament.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updatedTournament);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};
