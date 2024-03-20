import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose
      .connect("mongodb://localhost:27017/db_liga_sectores_altos")
      .then(() => console.log("Conexión a MongoDB establecida"))
      .catch((err) => console.error("Error al conectar a MongoDB", err));
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;
