import { Router } from "express";
import { createTournamente } from "../controller/tournamentController.js";

const router = Router();

router.post("/tournament", createTournamente);

export default router;
