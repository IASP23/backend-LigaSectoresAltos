import mongoose from "mongoose";

const { Schema } = mongoose;

const categoriaSchema = new Schema({
  tipo: {
    type: String,
    required: true,
  },
  descripcion: String,
});

const Categoria = mongoose.model("Categoria", categoriaSchema);

export default Categoria;
