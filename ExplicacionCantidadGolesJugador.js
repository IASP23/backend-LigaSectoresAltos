/* Equipo A */

const equipoLocal = {
  nombre: "Barcelona",
  fechaCreacion: "2020-01-01",
  goles: 15,
  descripcion: "Equipo de fútbol local",
  jugadores: ["Messi", "Suarez"],
};

const juego = {
  _id: "65fb7eb33d0127acb98e509c",
  jugadoresLocal: ["Ronaldo", "Bale"],
  jugadoresVisitante: ["Messi", "Suarez"],
  golesLocal: 0,
  equipoLocal: equipoLocal,
  golesVisitante: 0,
  equipoVisitante: "Real Madrid",
  ganador: "",
  goles: [
    {
      jugadorId: "Ronaldo",
      cantidad: 3,
    },
    {
      jugadorId: "Messi",
      cantidad: 3,
    },
    {
      jugadorId: "Bale",
      cantidad: 1,
    },
  ],
};

/* Player */

const player = [
  {
    id: "1",
    nombre: "Messi",
    goles: 1,
  },
  {
    id: "2",
    nombre: "Ronaldo",
    goles: 0,
  },
  {
    id: "3",
    nombre: "Neymar",
    goles: 2,
  },
];

console.log("Si", juego);
/* Para los goles */
let totalGoles = 0;

juego.goles.forEach((gol) => {
  totalGoles += gol.cantidad;
});

/* Para obtener los goles que se hizo cada jugador */

const cantidadGolesPorJugadorPartido = {};

/* Suma de goles en caso de que el jugador se repita mas de una vez */
juego.goles.forEach((gol) => {
  if (cantidadGolesPorJugadorPartido[gol._id]) {
    cantidadGolesPorJugadorPartido[gol._id] += gol.cantidad;
  } else {
    cantidadGolesPorJugadorPartido[gol._id] = gol.cantidad;
  }
});

for (const jugadorId in cantidadGolesPorJugadorPartido) {
  if (jugadorId == player.id) {
    player.goles += cantidadGolesPorJugadorPartido[jugadorId];
  }
}

/* Ver si el jugador pertenece a ese equipo */

juego.goles.forEach((gol) => {
  if (equipoLocal.jugadores.includes(gol.jugadorId)) {
    const jugadorAModificar = player.find(
      (jugador) => jugador.nombre == gol.jugadorId
    );

    if (jugadorAModificar) {
      jugadorAModificar.goles += 3;
    }

    equipoLocal.goles += gol.cantidad;
    juego.golesLocal += gol.cantidad;
  }
});
console.log(player);
console.log(equipoLocal);
console.log(juego);
