import Equipo from "../models/teamModel.js";

// Controlador para crear un nuevo equipo
export const crearEquipo = async (req, res) => {
  try {
    const nuevoEquipo = new Equipo(req.body);
    const nuevoEquipo2 = await nuevoEquipo.save();
    res.status(201).json(nuevoEquipo);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};

export const crearEquipoController = async (req, res) => {
  const { nombre, fechaCreacion, descripcion } = req.body;
  try {
    const equipo = await crearEquipo(nombre, fechaCreacion, descripcion);
    res.status(201).json({ equipo });
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};

// Controlador para actualizar un equipo existente
export const actualizarEquipo = async (req, res) => {
  try {
    const equipoActualizado = await Equipo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(equipoActualizado);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};

// Controlador para obtener un equipo por su ID
export const obtenerEquipo = async (req, res) => {
  try {
    const equipo = await Equipo.findById(req.params.id);
    res.status(200).json(equipo);
  } catch (error) {
    res.status(404).json({ mensaje: "Equipo no encontrado" });
  }
};

// Controlador para eliminar un equipo existente
export const eliminarEquipo = async (req, res) => {
  try {
    await Equipo.findByIdAndDelete(req.params.id);
    res.status(200).json({ mensaje: "Equipo eliminado correctamente" });
  } catch (error) {
    res.status(404).json({ mensaje: "Equipo no encontrado" });
  }
};
