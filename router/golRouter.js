import Router from "express";
import { crearGol, getGol, updateGol } from "../controller/golController.js";

const router = Router();

// Ruta para crear un nuevo jugador
router.post("/gol", crearGol);
router.patch("/gol/:id", updateGol);
router.get("/gol/:id", getGol);

export default router;
