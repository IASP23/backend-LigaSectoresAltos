import Router from "express";
import {
  crearJugador,
  actualizarJugador,
  obtenerJugador,
  eliminarJugador,
} from "../controller/playerController.js";

const router = Router();

// Ruta para crear un nuevo jugador
router.post("/jugadores", crearJugador);

// Ruta para actualizar un jugador existente
router.put("/jugadores/:id", actualizarJugador);

// Ruta para obtener un jugador por su ID
router.get("/jugadores/:id", obtenerJugador);

// Ruta para eliminar un jugador existente
router.delete("/jugadores/:id", eliminarJugador);

export default router;
