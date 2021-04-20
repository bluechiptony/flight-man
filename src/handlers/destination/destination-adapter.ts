import { Request, Response } from "express";
import { getMessageFromException, getStatusCodeFromException } from "../../utilities/helpers/helpers";

export const createDestination = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    res.status(getStatusCodeFromException(error)).json({ message: getMessageFromException(error) });
  }
};

export const updateDestination = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    res.status(getStatusCodeFromException(error)).json({ message: getMessageFromException(error) });
  }
};

export const getDestinations = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    res.status(getStatusCodeFromException(error)).json({ message: getMessageFromException(error) });
  }
};
export const getDestination = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    res.status(getStatusCodeFromException(error)).json({ message: getMessageFromException(error) });
  }
};
