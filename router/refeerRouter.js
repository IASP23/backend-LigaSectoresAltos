import Router from "express";
import { createRefeer } from "../controller/refeerController.js";

const router = Router();

// Ruta para crear un nuevo jugador
router.post("/refeer", createRefeer);

export default router;
