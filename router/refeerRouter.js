import Router from "express";
import {
  createRefeer,
  getRefeer,
  updateRefeer,
} from "../controller/refeerController.js";

const router = Router();

// Ruta para crear un nuevo jugador
router.post("/refeer", createRefeer);
router.patch("/refeer/:id", updateRefeer);
router.get("/refeer/:id", getRefeer);

export default router;
