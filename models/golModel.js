import mongoose from "mongoose";

const { Schema } = mongoose;

const golSchema = new Schema({
  cantidad: {
    type: Number,
    required: true,
  },
  jugador: {
    type: Schema.Types.ObjectId,
    ref: "Jugador",
  },
  partido: {
    type: Schema.Types.ObjectId,
    ref: "Partido",
  },
});

const Gol = mongoose.model("Gol", golSchema);

export default Gol;
