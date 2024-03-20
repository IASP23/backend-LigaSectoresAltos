import mongoose from "mongoose";

const { Schema } = mongoose;

const arbitroSchema = new Schema({
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
  juegos: [
    {
      type: Schema.Types.ObjectId,
      ref: "Juego",
    },
  ],
});

const Arbitro = mongoose.model("Arbitro", arbitroSchema);

export default Arbitro;
