import { MongoClient } from "mongodb";
import { getConnection } from "../../config/database";
import { DatabaseError } from "../../utilities/helpers/helpers";
import { terminalLogger } from "../../utilities/logging/logger";
import { Airport } from "./airport-model";

let connection: MongoClient;
const databaseName: string = "flights";
let collection: string = "airports";

export const createAirport = async (Airport: Airport) => {
  try {
    connection = getConnection();
    let result = connection.db(databaseName).collection(collection).insertOne(Airport);
    return Airport.airportId;
  } catch (error) {
    terminalLogger.error(error.message);
    throw new DatabaseError("Sorry, something happened on our end. Please contact support");
  }
};

export const updateAirport = async (Airport: Airport) => {
  try {
    connection = getConnection();
    let result = connection
      .db(databaseName)
      .collection(collection)
      .updateOne({ airportId: Airport.airportId }, { $set: Airport });
    return Airport.airportId;
  } catch (error) {
    terminalLogger.error(error.message);
    throw new DatabaseError("Sorry, something happened on our end. Please contact support");
  }
};

export const getAirports = async (): Promise<Airport[]> => {
  try {
    connection = getConnection();

    let airports: any = connection.db(databaseName).collection(collection).find().toArray();

    return airports as Airport[];
  } catch (error) {
    terminalLogger.error(error.message);
    throw new DatabaseError("Sorry, something happened on our end. Please contact support");
  }
};
export const getAirport = async (airportId: string): Promise<Airport> => {
  try {
    connection = getConnection();
    let airport: any = connection.db(databaseName).collection(collection).findOne({ airportId: airportId });

    return airport as Airport;
  } catch (error) {
    terminalLogger.error(error.message);
    throw new DatabaseError("Sorry, something happened on our end. Please contact support");
  }
};
export const getAirportByName = async (name: string) => {
  try {
    connection = getConnection();
    let airport: any = connection.db(databaseName).collection(collection).findOne({ firstName: name });
    return airport as Airport;
  } catch (error) {
    terminalLogger.error(error.message);
    throw new DatabaseError("Sorry, something happened on our end. Please contact support");
  }
};
