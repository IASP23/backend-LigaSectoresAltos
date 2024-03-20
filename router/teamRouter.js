import express from "express";
import { c } from "../controller/teamController.js";

const router = express.Router();

// Ruta para crear un nuevo equipo
router.post("/equipos", crearEquipo);

// Ruta para actualizar un equipo existente
router.put("/equipos/:id", actualizarEquipo);

// Ruta para obtener un equipo por su ID
router.get("/equipos/:id", obtenerEquipo);

// Ruta para eliminar un equipo existente
router.delete("/equipos/:id", eliminarEquipo);

export default router;
