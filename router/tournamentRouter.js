import { Router } from "express";
import {
  createTournamente,
  getTournament,
  updateTournament,
} from "../controller/tournamentController.js";

const router = Router();

router.post("/tournament", createTournamente);
router.patch("/tournament/:id", updateTournament);
router.get("/tournament/:id", getTournament);

export default router;
