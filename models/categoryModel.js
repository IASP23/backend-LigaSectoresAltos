import mongoose from "mongoose";

const { Schema } = mongoose;

const categoriaSchema = new Schema({
  tipo: {
    type: String,
    required: true,
  },
  descripcion: String,
  equipos: [
    {
      type: Schema.Types.ObjectId,
      ref: "Team",
    },
  ],
});

const Categoria = mongoose.model("Categoria", categoriaSchema);

export default Categoria;
