import mongoose from "mongoose";

const { Schema } = mongoose;

const juegoSchema = new Schema({
  fecha: {
    type: Date,
    required: true,
  },
  hora: {
    type: String,
    required: true,
  },
  equipos: [
    {
      equipo: {
        type: Schema.Types.ObjectId,
        ref: "Team",

        jugadores: [
          {
            type: Schema.Types.ObjectId,
            ref: "player",
          },
        ],
      },
    },
  ],
  resultado: {
    type: String,
    enum: ["equipoA", "equipoB", "empate"],
  },
  gol: {
    type: Schema.Types.ObjectId,
    ref: "Gol",
  },
});

const Juego = mongoose.model("Juego", juegoSchema);

export default Juego;
