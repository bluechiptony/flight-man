import { Request, Response } from "express";
import { getMessageFromException, getStatusCodeFromException } from "../../utilities/helpers/helpers";

export const createAirport = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    res.status(getStatusCodeFromException(error)).json({ message: getMessageFromException(error) });
  }
};

export const updateAirport = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    res.status(getStatusCodeFromException(error)).json({ message: getMessageFromException(error) });
  }
};

export const getAirports = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    res.status(getStatusCodeFromException(error)).json({ message: getMessageFromException(error) });
  }
};
export const getAirport = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    res.status(getStatusCodeFromException(error)).json({ message: getMessageFromException(error) });
  }
};
