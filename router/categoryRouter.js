import Router from "express";
import {
  crearCategoria,
  getCategory,
  updateCategory,
} from "../controller/categoryController.js";

const router = Router();

// Ruta para crear un nuevo jugador
router.post("/category", crearCategoria);
router.patch("/category/:id", updateCategory);
router.get("/category/:id", getCategory);

export default router;
