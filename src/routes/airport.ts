import { Router } from "express";
import { createAirport, getAirport, getAirports, updateAirport } from "../handlers/airport/airport-adapter";

const airportRoutes: Router = Router();

airportRoutes.post("/create", createAirport);
airportRoutes.patch("/update", updateAirport);
airportRoutes.get("/get", getAirports);
airportRoutes.get("/get/single/:id", getAirport);

export default airportRoutes;
