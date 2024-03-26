import Router from "express";
import {
  calcular,
  crearGame,
  getGame,
  updateGame,
} from "../controller/gameController.js";

const router = Router();

// Ruta para crear un nuevo jugador
router.post("/game", crearGame);
router.patch("/game/:id", updateGame);
router.get("/game/:id", getGame);
router.get("/games", calcular);

export default router;
