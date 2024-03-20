import Router from "express";
import {
  crateTeam,
  getTeam,
  updateTeam,
} from "../controller/teamController.js";

const router = Router();
router.post("/team", crateTeam);
router.patch("/team/:id", updateTeam);
router.get("/team/:id", getTeam);

export default router;
