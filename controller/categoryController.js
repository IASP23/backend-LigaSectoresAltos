import Categoria from "../models/categoryModel.js";

// Controlador para crear una nueva categoría
export const crearCategoria = async (req, res) => {
  try {
    const nuevaCategoria = new Categoria(req.body);
    await nuevaCategoria.save();
    res.status(201).json(nuevaCategoria);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};
