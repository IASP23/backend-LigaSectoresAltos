import mongoose from "mongoose";

const { Schema } = mongoose;

const jugadorSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  cedula: {
    type: String,
  },
  fechaNacimiento: {
    type: Date,
    required: true,
  },
  tipo: {
    type: String,
    required: true,
  },
  tarjetasRojas: {
    type: Number,
    default: 0,
  },
  tarjetasAmarillas: {
    type: Number,
    default: 0,
  },
});

const Jugador = mongoose.model("player", jugadorSchema);

export default Jugador;
