import { MongoClient } from "mongodb";
import { getConnection } from "../../config/database";
import { DatabaseError } from "../../utilities/helpers/helpers";
import { terminalLogger } from "../../utilities/logging/logger";
import { Booking } from "./booking-model";

let connection: MongoClient;
const databaseName: string = "bookings";
let collection: string = "bookings";

export const createBooking = async (booking: Booking) => {
  try {
    connection = getConnection();
    let result = connection.db(databaseName).collection(collection).insertOne(booking);
    return booking.bookingId;
  } catch (error) {
    terminalLogger.error(error.message);
    throw new DatabaseError("Sorry, something happened on our end. Please contact support");
  }
};

export const updateBooking = async (booking: Booking) => {
  try {
    connection = getConnection();
    let result = connection
      .db(databaseName)
      .collection(collection)
      .updateOne({ bookingId: booking.bookingId }, { $set: booking });
    return booking.bookingId;
  } catch (error) {
    terminalLogger.error(error.message);
    throw new DatabaseError("Sorry, something happened on our end. Please contact support");
  }
};

export const getBookings = async (): Promise<Booking[]> => {
  try {
    connection = getConnection();

    let bookings: any = connection.db(databaseName).collection(collection).find().toArray();

    return bookings as Booking[];
  } catch (error) {
    terminalLogger.error(error.message);
    throw new DatabaseError("Sorry, something happened on our end. Please contact support");
  }
};
export const getBookingsForDateRange = async (startDate: Date, endDate: Date): Promise<Booking[]> => {
  try {
    connection = getConnection();

    let bookings: any = connection
      .db(databaseName)
      .collection(collection)
      .find({ takeOffTime: { $gte: startDate, $lte: endDate } })
      .toArray();

    return bookings as Booking[];
  } catch (error) {
    terminalLogger.error(error.message);
    throw new DatabaseError("Sorry, something happened on our end. Please contact support");
  }
};
export const getBooking = async (bookingId: string): Promise<Booking> => {
  try {
    connection = getConnection();
    let booking: any = connection.db(databaseName).collection(collection).findOne({ bookingId: bookingId });

    return booking as Booking;
  } catch (error) {
    terminalLogger.error(error.message);
    throw new DatabaseError("Sorry, something happened on our end. Please contact support");
  }
};
export const getBookingForser = async (name: string) => {
  try {
    connection = getConnection();
    let booking: any = connection.db(databaseName).collection(collection).findOne({ "user.firstName": name });
    return booking as Booking;
  } catch (error) {
    terminalLogger.error(error.message);
    throw new DatabaseError("Sorry, something happened on our end. Please contact support");
  }
};
