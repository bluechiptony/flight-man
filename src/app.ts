import express, { Application } from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { initializeDB } from "./config/database";
import airlineRoutes from "./routes/airline";
import airportRoutes from "./routes/airport";
dotenv.config();

const app: Application = express();

const applicationName = process.env.APPLICATION_NAME;
const port = process.env.APPLICATION_PORT;
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/airlines", airlineRoutes);
app.use("/airports", airportRoutes);

initializeDB((error: any) => {
  app.listen(port, async () => {
    console.log(`${applicationName} started and runnning on port ${port}`);
  });
});
