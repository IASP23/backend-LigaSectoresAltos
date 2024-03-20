import Router from "express";
import { createRefeer } from "../controller/refeerController.js";

const router = Router();

// Ruta para crear un nuevo jugador
router.post("/arbitro", createRefeer);

export default router;
