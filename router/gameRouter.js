import Router from "express";
import {
  calcularPorJugadores,
  crearGame,
  getGame,
  updateGame,
} from "../controller/gameController.js";

const router = Router();

// Ruta para crear un nuevo jugador
router.post("/game", crearGame);
router.patch("/game/:id", updateGame);
router.get("/game/:id", getGame);
router.get("/games", calcularPorJugadores);

export default router;
