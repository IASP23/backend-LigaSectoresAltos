import express from "express";
import connectDB from "./config/mongodb.js";
import { config } from "dotenv";
import categoryRouter from "./router/categoryRouter.js";
import gameRouter from "./router/gameRouter.js";
import playerRouter from "./router/playerRouter.js";
import refeerRouter from "./router/refeerRouter.js";
import teamRouter from "./router/teamRouter.js";
import tournamentRouter from "./router/tournamentRouter.js";
import golRouter from "./router/golRouter.js";
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

app.use(categoryRouter);
app.use(gameRouter);
app.use(playerRouter);
app.use(refeerRouter);
app.use(teamRouter);
app.use(golRouter);
app.use(tournamentRouter);
