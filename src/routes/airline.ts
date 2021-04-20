import { Router } from "express";
import { createAirline, getAirline, getAirlines, updateAirline } from "../handlers/airline/airline-adapter";

const airlineRoutes: Router = Router();

airlineRoutes.post("/create", createAirline);
airlineRoutes.patch("/update", updateAirline);
airlineRoutes.get("/get", getAirlines);
airlineRoutes.get("/get/single/:id", getAirline);

export default airlineRoutes;
