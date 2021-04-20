import { Request, Response } from "express";
import { getMessageFromException, getStatusCodeFromException } from "../../utilities/helpers/helpers";

export const createBooking = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    res.status(getStatusCodeFromException(error)).json({ message: getMessageFromException(error) });
  }
};

export const updateBooking = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    res.status(getStatusCodeFromException(error)).json({ message: getMessageFromException(error) });
  }
};

export const getBookings = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    res.status(getStatusCodeFromException(error)).json({ message: getMessageFromException(error) });
  }
};
export const getBooking = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    res.status(getStatusCodeFromException(error)).json({ message: getMessageFromException(error) });
  }
};

export const getBookingForuser = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    res.status(getStatusCodeFromException(error)).json({ message: getMessageFromException(error) });
  }
};
