import { Request, Response } from "express";
import { getMessageFromException, getStatusCodeFromException } from "../../utilities/helpers/helpers";
import { adaptExpressRequest } from "../../utilities/helpers/validators";
import { userCreatesAirline, userGetsAirline, userGetsAirlines, userUpdatesAirline } from "./airline-use-cases";

export const createAirline = async (req: Request, res: Response) => {
  try {
    res.status(201).json({
      message: "Airline created succesfully",
      airlineId: await userCreatesAirline(adaptExpressRequest(req).body),
    });
  } catch (error) {
    res.status(getStatusCodeFromException(error)).json({ message: getMessageFromException(error) });
  }
};

export const updateAirline = async (req: Request, res: Response) => {
  try {
    res.status(202).json({
      message: "Airline updated succesfully",
      airlineId: await userUpdatesAirline(adaptExpressRequest(req).body),
    });
  } catch (error) {
    res.status(getStatusCodeFromException(error)).json({ message: getMessageFromException(error) });
  }
};

export const getAirlines = async (req: Request, res: Response) => {
  try {
    res.status(200).json({
      message: "Airlines retrieved",
      airlineId: await userGetsAirlines(),
    });
  } catch (error) {
    res.status(getStatusCodeFromException(error)).json({ message: getMessageFromException(error) });
  }
};
export const getAirline = async (req: Request, res: Response) => {
  try {
    res.status(200).json({
      message: "Airline retieved",
      airlineId: await userGetsAirline(req.params.id),
    });
  } catch (error) {
    res.status(getStatusCodeFromException(error)).json({ message: getMessageFromException(error) });
  }
};
