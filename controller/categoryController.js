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

export const getCategory = async (req, res) => {
  try {
    const setCategory = await Categoria.findById(req.params.id);
    res.status(200).json(setCategory);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const updatedCategory = await Categoria.findByIdAndUpdate(
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
