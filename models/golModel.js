import mongoose from "mongoose";

const { Schema } = mongoose;

const golSchema = new Schema({
  goles: {
    type: Number,
    required: true,
  },
  equipo: {
    type: Schema.Types.ObjectId,
    ref: "Team",
  },
  player: {
    type: Schema.Types.ObjectId,
    ref: "player",
  },
  partido: {
    type: Schema.Types.ObjectId,
    ref: "Game",
  },
});

const Gol = mongoose.model("Gol", golSchema);

export default Gol;
