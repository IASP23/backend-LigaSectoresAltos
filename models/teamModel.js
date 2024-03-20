import mongoose from "mongoose";

const { Schema } = mongoose;

const equipoSchema = new Schema({
  nombre: {
    type: String,
  },
  fechaCreacion: {
    type: String,
  },
  descripcion: String,
  jugadores: [
    {
      type: Schema.Types.ObjectId,
      ref: "player",
    },
  ],
});

const Equipo = mongoose.model("Team", equipoSchema);

export default Equipo;
