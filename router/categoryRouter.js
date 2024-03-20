import Router from "express";
import { crearCategoria } from "../controller/categoryController.js";

const router = Router();

// Ruta para crear un nuevo jugador
router.post("/categoria", crearCategoria);

export default router;
