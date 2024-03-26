import Router from "express";
import { crearGol, getGol } from "../controller/golController.js";

const router = Router();

// Ruta para crear un nuevo jugador
router.post("/gol", crearGol);
router.get("/gol/:id", getGol);

export default router;
