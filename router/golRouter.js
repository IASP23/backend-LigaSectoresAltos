import Router from "express";
import { crearGol } from "../controller/golController.js";

const router = Router();

// Ruta para crear un nuevo jugador
router.post("/gol", crearGol);

export default router;
