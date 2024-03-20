import Jugador from "../models/playerModel.js";

// Controlador para crear un nuevo jugador
export const crearJugador = async (req, res) => {
  try {
    const nuevoJugador = await Jugador.create(req.body);
    res.status(201).json(nuevoJugador);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};

// Controlador para actualizar un jugador existente
export const actualizarJugador = async (req, res) => {
  try {
    const jugadorActualizado = await Jugador.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(jugadorActualizado);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};

// Controlador para obtener un jugador por su ID
export const obtenerJugador = async (req, res) => {
  try {
    const jugador = await Jugador.findById(req.params.id);
    res.status(200).json(jugador);
  } catch (error) {
    res.status(404).json({ mensaje: "Jugador no encontrado" });
  }
};

// Controlador para eliminar un jugador existente
export const eliminarJugador = async (req, res) => {
  try {
    await Jugador.findByIdAndDelete(req.params.id);
    res.status(200).json({ mensaje: "Jugador eliminado correctamente" });
  } catch (error) {
    res.status(404).json({ mensaje: "Jugador no encontrado" });
  }
};
