import Router from "express";
import { crateTeam } from "../controller/teamController.js";

const router = Router();

// Ruta para crear un nuevo jugador
router.post("/team", crateTeam);

export default router;
