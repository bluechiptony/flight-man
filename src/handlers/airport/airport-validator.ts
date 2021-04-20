import { generateUniqueCode, generateUUID, validateRequiredStringProperty } from "../../utilities/helpers/validators";
import { Airport } from "./airport-model";

export const validateairport = (req: any): Airport => {
  validateRequiredStringProperty("airport name ", req.name);
  return {
    airportId: generateUUID(),
    code: generateUniqueCode(5, true),
    name: req.name,
    destination: req.destination,
  };
};
export const validateairportForUpdate = (req: any, airport: Airport): Airport => {
  validateRequiredStringProperty("airport id", req.airportId);
  return {
    airportId: airport.airportId,
    code: req.code || airport.code,
    name: req.name || airport.name,
    destination: req.destination || airport.destination,
  };
};
