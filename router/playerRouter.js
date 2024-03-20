import Router from "express";
import { crearJugador } from "../controller/playerController.js";

const router = Router();

// Ruta para crear un nuevo jugador
router.post("/jugadores", crearJugador);

export default router;
