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
  },
  golesVisitante: {
    type: Number,
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
});

const Juego = mongoose.model("Juego", juegoSchema);

export default Juego;
