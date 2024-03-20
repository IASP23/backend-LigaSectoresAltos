import express from "express";
import connectDB from "./config/mongodb.js";
import { config } from "dotenv";
import tournamentRouter from "./router/tournamentRouter.js";
import bodyParser from "body-parser";
connectDB();
config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

app.listen(3000, () => {
  console.log(`Servidor esta en el puerto http://localhost:${PORT}`);
});

app.use(tournamentRouter);
