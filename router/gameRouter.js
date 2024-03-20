import Router from "express";
import { crearJuego } from "../controller/gameController.js";

const router = Router();

// Ruta para crear un nuevo jugador
router.post("/game", crearJuego);

export default router;
