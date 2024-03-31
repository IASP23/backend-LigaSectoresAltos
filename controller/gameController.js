import Game from "../models/gameModel.js";
import team from "../models/teamModel.js";
import player from "../models/playerModel.js";

import { calcularGolesEquipo, getWin } from "../utils/gameLogic.js";

export const crearGame = async (req, res) => {
  try {
    const nuevoGame = new Game(req.body);
    await nuevoGame.save();
    res.status(201).json(nuevoGame);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};

export const getGame = async (req, res) => {
  try {
    const setGame = await Game.findById(req.params.id);
    res.status(200).json(setGame);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};

export const updateGame = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedGame = await Game.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    const teams = await team.find();

    /* Modifica el Partido */
    const updatedGameWithGoles = await calculateGoles(updatedGame);
    await updatedGameWithGoles.save();

    /* Modifica el equipo */

    for (const equipo of teams) {
      await calcularPorEquipo(equipo.id);
    }

    res.status(200).json(updatedGameWithGoles);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};

export const calculateGoles = async (updatedGame) => {
  try {
    const jugadoresGoles = {};
    let partido = updatedGame;
    const idLocal = partido.equipoLocal;

    const equipoLocal = await team.findById(idLocal);
    partido.goles.forEach((gol) => {
      if (equipoLocal.jugadores.includes(gol.jugador)) {
        if (jugadoresGoles[gol.jugador]) {
          jugadoresGoles[gol.jugador] += gol.cantidad;
        } else {
          jugadoresGoles[gol.jugador] = gol.cantidad;
        }
        partido.golesLocal += gol.cantidad;
      } else {
        if (jugadoresGoles[gol.jugador]) {
          jugadoresGoles[gol.jugador] += gol.cantidad;
        } else {
          jugadoresGoles[gol.jugador] = gol.cantidad;
        }
        partido.golesVisitante += gol.cantidad;
      }
    });

    partido = getWin(partido);

    return partido;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const calcularPorEquipo = async (idEquipo) => {
  try {
    const partidos = await Game.find({
      $or: [{ equipoLocal: idEquipo }, { equipoVisitante: idEquipo }],
    });
    const equipoMod = await team.findById(idEquipo);

    let totalGoles = 0;

    /* Calcular los goles del equipo por cada partido */
    partidos.forEach((partido) => {
      totalGoles += calcularGolesEquipo(partido, idEquipo);
    });

    equipoMod.goles = totalGoles;
    await equipoMod.save();
    return true;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const calcularPorJugadores = async (req, res) => {
  try {
    const partidos = await Game.find();

    let jugadoresGoles = {};

    partidos.forEach((partido) => {
      partido.goles.forEach((gol) => {
        if (jugadoresGoles[gol.jugador]) {
          jugadoresGoles[gol.jugador] += gol.cantidad;
        } else {
          jugadoresGoles[gol.jugador] = gol.cantidad;
        }
      });
    });

    ///* EL VALOR DEL JUGADORES GOLES DEBO MODIFICAR DIRECTAMENTE A JUGADORES SIN SUMAR  */ */

    Object.keys(jugadoresGoles).forEach(async (jugadorId) => {
      const golesJugador = jugadoresGoles[jugadorId];
      const jugador = await player.findById(jugadorId);
      jugador.goles = golesJugador; // Suma inicial si "goles" es indefinido
      await jugador.save();
    });

    res.status(200).json(jugadoresGoles);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};
