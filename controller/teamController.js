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

export const getTeam = async (req, res) => {
  try {
    const setTeam = await team.findById(req.params.id);
    res.status(200).json(setTeam);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};

export const updateTeam = async (req, res) => {
  try {
    const updatedTeam = await team.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedTeam);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};
