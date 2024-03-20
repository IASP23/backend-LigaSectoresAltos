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
