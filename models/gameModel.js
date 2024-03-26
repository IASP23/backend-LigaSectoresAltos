import mongoose from "mongoose";

const { Schema } = mongoose;

const juegoSchema = new Schema({
  fecha: {
    type: String,
    required: true,
  },
  hora: {
    type: String,
    required: true,
  },
  equipoLocal: {
    type: Schema.Types.ObjectId,
    ref: "Team",
  },
  equipoVisitante: {
    type: Schema.Types.ObjectId,
    ref: "Team",
  },
  golesLocal: {
    type: Number,
    default: 0,
  },
  golesVisitante: {
    type: Number,
    default: 0,
  },
  estado: {
    type: String,
    enum: ["pendiente", "jugando", "finalizado"],
    default: "pendiente",
  },
  jugadoresLocal: [
    {
      type: Schema.Types.ObjectId,
      ref: "player",
    },
  ],
  jugadoresVisitante: [
    {
      type: Schema.Types.ObjectId,
      ref: "player",
    },
  ],
  ganador: { type: String },
  goles: [
    {
      jugador: {
        type: Schema.Types.ObjectId,
        ref: "player",
      },
      cantidad: {
        type: Number,
      },
    },
  ],
});

const Juego = mongoose.model("Juego", juegoSchema);

export default Juego;
