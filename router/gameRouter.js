import Router from "express";
import {
  crearJuego,
  getGame,
  getWin,
  updateGame,
} from "../controller/gameController.js";

const router = Router();

// Ruta para crear un nuevo jugador
router.post("/game", crearJuego);
router.patch("/game/:id", updateGame);
router.get("/game/:id", getGame);
router.get("/ganador/:id", getWin);

export default router;
