import mongoose from "mongoose";

const { Schema } = mongoose;

const torneoSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  fechaInicio: {
    type: Date,
    required: true,
  },
  fechaFin: {
    type: Date,
    required: true,
  },
  categorias: [
    {
      tipo: {
        type: String,
        required: true,
      },
      descripcion: String,
      equipos: [
        {
          type: Schema.Types.ObjectId,
          ref: "Equipo",
        },
      ],
    },
  ],
});

const Torneo = mongoose.model("Torneo", torneoSchema);

export default Torneo;
