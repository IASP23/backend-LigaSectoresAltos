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
      type: Schema.Types.ObjectId,
      ref: "Categoria",
    },
  ],
});

const Torneo = mongoose.model("Torneo", torneoSchema);

export default Torneo;
