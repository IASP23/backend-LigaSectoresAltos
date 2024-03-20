import Router from "express";
import {
  crearJugador,
  getPlayer,
  updatePlayer,
} from "../controller/playerController.js";

const router = Router();

// Ruta para crear un nuevo jugador
router.post("/player", crearJugador);
router.patch("/player/:id", updatePlayer);
router.get("/player/:id", getPlayer);

export default router;
