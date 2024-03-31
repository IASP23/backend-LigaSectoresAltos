/* Obtener ganador */
export const getWin = (juego) => {
  try {
    if (juego.golesLocal === juego.golesVisitante) {
      juego.ganador = "Empate";
    } else if (juego.golesLocal > juego.golesVisitante) {
      juego.ganador = "Local";
    } else {
      juego.ganador = "Visitante";
    }
    return juego;
  } catch (error) {
    throw new Error(error.message);
  }
};
/* Calcular goles del equipo  */

export const calcularGolesEquipo = (juego, idEquipo) => {
  let golesEquipo = 0;
  // Verificar si el equipo es el equipo local y sumar sus goles
  if (juego.equipoLocal == idEquipo) {
    golesEquipo += juego.golesLocal;
  }
  // Verificar si el equipo es el equipo visitante y sumar sus goles
  if (juego.equipoVisitante == idEquipo) {
    golesEquipo += juego.golesVisitante;
  }
  return golesEquipo;
};

export const calcularGolesJugador = (gol) => {
  let golesJugador = 0;
};
