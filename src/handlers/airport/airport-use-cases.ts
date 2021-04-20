import { ApplicationProcessError } from "../../utilities/helpers/helpers";
import { validateRequiredStringProperty } from "../../utilities/helpers/validators";

import { createAirport, getAirport, getAirportByName, getAirports, updateAirport } from "./airport-data-access";
import { Airport } from "./airport-model";
import { validateairport, validateairportForUpdate } from "./airport-validator";

export const userCreatesairport = async (req: any): Promise<string> => {
  try {
    let airport: Airport = validateairport(req);

    //check if airport exist

    let airportFound = await getAirportByName(airport.name);
    if (airportFound != null && airportFound.name) {
      throw new ApplicationProcessError("airport already exists. Suggest you rename this entry");
    }

    return await createAirport(airport);
  } catch (error) {
    throw error;
  }
};

export const userUpdatesairport = async (req: any): Promise<string> => {
  try {
    //check if airport exist

    let airportFound = await userGetsAirport(req.airportId);
    if (airportFound == null) {
      throw new ApplicationProcessError("Unable to find airport");
    }
    let newAirport = validateairportForUpdate(req, airportFound);

    return await updateAirport(newAirport);
  } catch (error) {
    throw error;
  }
};

export const userGetsAirport = async (airportId: string): Promise<Airport> => {
  try {
    validateRequiredStringProperty("airport id", airportId);
    return await getAirport(airportId);
  } catch (error) {
    throw error;
  }
};
export const userGetsAirports = async () => {
  try {
    return await getAirports();
  } catch (error) {
    throw error;
  }
};
export const userGetsAirportsByName = async (airportName: string) => {
  try {
    validateRequiredStringProperty("airport name", airportName);
    return await getAirportByName(airportName);
  } catch (error) {
    throw error;
  }
};
