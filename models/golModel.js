import mongoose from "mongoose";

const { Schema } = mongoose;

const golSchema = new Schema({
  cantidad: {
    type: Number,
    required: true,
  },
  equipos: [
    {
      equipo: {
        type: Schema.Types.ObjectId,
        ref: "Team",

        jugadores: [
          {
            type: Schema.Types.ObjectId,
            ref: "player",
          },
        ],
      },
    },
  ],
  partido: {
    type: Schema.Types.ObjectId,
    ref: "Partido",
  },
});

const Gol = mongoose.model("Gol", golSchema);

export default Gol;
