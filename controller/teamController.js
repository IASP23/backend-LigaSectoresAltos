import team from "../models/teamModel.js";

export const crateTeam = async (req, res) => {
  try {
    const newTeam = new team(req.body);
    await newTeam.save();
    res.status(201).json(newTeam);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};
