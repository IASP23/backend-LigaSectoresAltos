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
  equipoA: {
    type: Schema.Types.ObjectId,
    ref: "Equipo",
  },
  equipoB: {
    type: Schema.Types.ObjectId,
    ref: "Equipo",
  },
  resultado: {
    type: String,
    enum: ["equipoA", "equipoB", "empate"],
  },
});

const Juego = mongoose.model("Juego", juegoSchema);

export default Juego;
