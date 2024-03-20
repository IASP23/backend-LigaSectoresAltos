import mongoose from "mongoose";

const { Schema } = mongoose;

const torneoSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  fechaInicio: {
    type: String,
    required: true,
  },
  fechaFin: {
    type: String,
    required: true,
  },
  categorias: [
    {
      categoria: {
        type: Schema.Types.ObjectId,
        ref: "Categoria",
        equipo: [
          {
            type: Schema.Types.ObjectId,
            ref: "Team",
          },
        ],
      },
    },
  ],
});

const Torneo = mongoose.model("Torneo", torneoSchema);

export default Torneo;
