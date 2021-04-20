import { Request, Response } from "express";
import { getMessageFromException, getStatusCodeFromException } from "../../utilities/helpers/helpers";

export const createPlane = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    res.status(getStatusCodeFromException(error)).json({ message: getMessageFromException(error) });
  }
};

export const updatePlane = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    res.status(getStatusCodeFromException(error)).json({ message: getMessageFromException(error) });
  }
};

export const getPlanes = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    res.status(getStatusCodeFromException(error)).json({ message: getMessageFromException(error) });
  }
};
export const getPlane = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    res.status(getStatusCodeFromException(error)).json({ message: getMessageFromException(error) });
  }
};
