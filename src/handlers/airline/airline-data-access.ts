import { MongoClient } from "mongodb";
import { getConnection } from "../../config/database";
import { DatabaseError } from "../../utilities/helpers/helpers";
import { terminalLogger } from "../../utilities/logging/logger";
import { Airline } from "./airline-model";

let connection: MongoClient;
const databaseName: string = "flights";
let collection: string = "airlines";

export const createAirline = async (airline: Airline) => {
  try {
    connection = getConnection();
    let result = connection.db(databaseName).collection(collection).insertOne(airline);
    return airline.airlineId;
  } catch (error) {
    terminalLogger.error(error.message);
    throw new DatabaseError("Sorry, something happened on our end. Please contact support");
  }
};

export const updateAirline = async (airline: Airline) => {
  try {
    connection = getConnection();
    let result = connection
      .db(databaseName)
      .collection(collection)
      .updateOne({ airlineId: airline.airlineId }, { $set: airline });
    return airline.airlineId;
  } catch (error) {
    terminalLogger.error(error.message);
    throw new DatabaseError("Sorry, something happened on our end. Please contact support");
  }
};

export const getAirlines = async (): Promise<Airline[]> => {
  try {
    connection = getConnection();

    let airliines: any = connection.db(databaseName).collection(collection).find().toArray();

    return airliines as Airline[];
  } catch (error) {
    terminalLogger.error(error.message);
    throw new DatabaseError("Sorry, something happened on our end. Please contact support");
  }
};
export const getAirline = async (airlineId: string): Promise<Airline> => {
  try {
    connection = getConnection();
    let airline: any = connection.db(databaseName).collection(collection).findOne({ airlineId: airlineId });

    return airline as Airline;
  } catch (error) {
    terminalLogger.error(error.message);
    throw new DatabaseError("Sorry, something happened on our end. Please contact support");
  }
};
export const getAirlineByName = async (name: string) => {
  try {
    connection = getConnection();
    let airline: any = connection.db(databaseName).collection(collection).findOne({ firstName: name });
    return airline as Airline;
  } catch (error) {
    terminalLogger.error(error.message);
    throw new DatabaseError("Sorry, something happened on our end. Please contact support");
  }
};
