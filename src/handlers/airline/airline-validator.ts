import { generateUUID, validateRequiredStringProperty } from "../../utilities/helpers/validators";
import { Airline } from "./airline-model";

export const validateAirline = (req: any): Airline => {
  validateRequiredStringProperty("Airline name ", req.name);
  return {
    airlineId: generateUUID(),
    name: req.name,
    description: req.description,
  };
};
export const validateAirlineForUpdate = (req: any, airline: Airline): Airline => {
  validateRequiredStringProperty("Airline id", req.airlineId);
  return {
    airlineId: airline.airlineId,
    name: req.name || airline.name,
    description: req.description || airline.description,
  };
};
