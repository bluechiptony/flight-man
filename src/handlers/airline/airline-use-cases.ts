import { ApplicationProcessError } from "../../utilities/helpers/helpers";
import { validateRequiredStringProperty } from "../../utilities/helpers/validators";
import { createAirline, getAirline, getAirlineByName, getAirlines, updateAirline } from "./airline-data-access";
import { Airline } from "./airline-model";
import { validateAirline, validateAirlineForUpdate } from "./airline-validator";

export const userCreatesAirline = async (req: any): Promise<string> => {
  try {
    let airline: Airline = validateAirline(req);

    //check if airline exist

    let airlineFound = await getAirlineByName(airline.name);
    if (airlineFound != null && airlineFound.name) {
      throw new ApplicationProcessError("Airline already exists. Suggest you rename this entry");
    }

    return await createAirline(airline);
  } catch (error) {
    throw error;
  }
};

export const userUpdatesAirline = async (req: any): Promise<string> => {
  try {
    let airline: Airline = validateAirline(req);

    //check if airline exist

    let airlineFound = await getAirlineByName(airline.name);
    if (airlineFound == null) {
      throw new ApplicationProcessError("Airline does not exist");
    }

    let newAirline = validateAirlineForUpdate(req, airlineFound);

    return await updateAirline(newAirline);
  } catch (error) {
    throw error;
  }
};

export const userGetsAirline = async (airlineId: string): Promise<Airline> => {
  try {
    validateRequiredStringProperty("Airline id", airlineId);
    return await getAirline(airlineId);
  } catch (error) {
    throw error;
  }
};
export const userGetsAirlines = async () => {
  try {
    return await getAirlines();
  } catch (error) {
    throw error;
  }
};
export const userGetsAirlinesByName = async (airlineName: string) => {
  try {
    validateRequiredStringProperty("Airline name", airlineName);
    return await getAirlineByName(airlineName);
  } catch (error) {
    throw error;
  }
};
