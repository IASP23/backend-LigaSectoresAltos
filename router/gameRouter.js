import Router from "express";
import {
  crearJuego,
  getGame,
  updateGame,
} from "../controller/gameController.js";

const router = Router();

// Ruta para crear un nuevo jugador
router.post("/game", crearJuego);
router.patch("/game/:id", updateGame);
router.get("/game/:id", getGame);

export default router;
