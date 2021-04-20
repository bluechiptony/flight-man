import { MongoClient } from "mongodb";
import { getConnection } from "../../config/database";
import { DatabaseError } from "../../utilities/helpers/helpers";
import { terminalLogger } from "../../utilities/logging/logger";
import { Flight } from "./flight-model";

let connection: MongoClient;
const databaseName: string = "flights";
let collection: string = "flights";

export const createFlight = async (flight: Flight) => {
  try {
    connection = getConnection();
    let result = connection.db(databaseName).collection(collection).insertOne(flight);
    return flight.flightId;
  } catch (error) {
    terminalLogger.error(error.message);
    throw new DatabaseError("Sorry, something happened on our end. Please contact support");
  }
};

export const updateFlight = async (flight: Flight) => {
  try {
    connection = getConnection();
    let result = connection
      .db(databaseName)
      .collection(collection)
      .updateOne({ flightId: flight.flightId }, { $set: flight });
    return flight.flightId;
  } catch (error) {
    terminalLogger.error(error.message);
    throw new DatabaseError("Sorry, something happened on our end. Please contact support");
  }
};

export const getFlights = async (): Promise<Flight[]> => {
  try {
    connection = getConnection();

    let flights: any = connection.db(databaseName).collection(collection).find().toArray();

    return flights as Flight[];
  } catch (error) {
    terminalLogger.error(error.message);
    throw new DatabaseError("Sorry, something happened on our end. Please contact support");
  }
};
export const getFlightsForDateRange = async (startDate: Date, endDate: Date): Promise<Flight[]> => {
  try {
    connection = getConnection();

    let flights: any = connection
      .db(databaseName)
      .collection(collection)
      .find({ takeOffTime: { $gte: startDate, $lte: endDate } })
      .toArray();

    return flights as Flight[];
  } catch (error) {
    terminalLogger.error(error.message);
    throw new DatabaseError("Sorry, something happened on our end. Please contact support");
  }
};
export const getFlight = async (flightId: string): Promise<Flight> => {
  try {
    connection = getConnection();
    let levelReturned: any = connection.db(databaseName).collection(collection).findOne({ flightId: flightId });

    return levelReturned as Flight;
  } catch (error) {
    terminalLogger.error(error.message);
    throw new DatabaseError("Sorry, something happened on our end. Please contact support");
  }
};
export const getFlightByName = async (name: string) => {
  try {
    connection = getConnection();
    let flight: any = connection.db(databaseName).collection(collection).findOne({ firstName: name });
    return flight as Flight;
  } catch (error) {
    terminalLogger.error(error.message);
    throw new DatabaseError("Sorry, something happened on our end. Please contact support");
  }
};
