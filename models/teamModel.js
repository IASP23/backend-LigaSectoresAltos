import mongoose from "mongoose";

const { Schema } = mongoose;

const equipoSchema = new Schema({
  nombre: {
    type: String,
  },
  fechaCreacion: {
    type: Date,
    default: Date.now,
  },
  descripcion: String,
  jugadores: [
    {
      nombre: {
        type: String,
        required: true,
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
    },
  ],
});

const Equipo = mongoose.model("Team", equipoSchema);

export default Equipo;
