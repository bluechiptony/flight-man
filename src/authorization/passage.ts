import { NextFunction, Request, Response } from "express";
import * as Token from "jsonwebtoken";

export const verifyTokenFromRequest = (req: Request, res: Response, next: NextFunction) => {
  // const bearerToken = req.headers["authorization"].split(" ")[1];
  const bearerToken = req.headers["authorization"]?.split(" ")[1];
  const bearerText = req.headers["authorization"]?.split(" ")[0];

  if (typeof bearerToken !== "undefined" || bearerText !== "Bearer") {
    Token.verify(bearerToken || "", process.env.AUTH_SK || "", (err: any, payload: any) => {
      if (err) {
        res.status(401).json({ message: "Invalid authorization header" });
      } else {
        req.body.userCode = payload.userCode;
        next();
      }
    });
  } else {
    res.status(401).json({ message: "Invalid authorization header" });
  }
};

export const verifyAdminToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const bearerToken = req.headers["authorization"]?.split(" ")[1];
    const bearerText = req.headers["authorization"]?.split(" ")[0];

    if (typeof bearerToken !== "undefined" || bearerText !== "Bearer") {
      Token.verify(bearerToken || "", process.env.AUTH_SK || "", (err: any, payload: any) => {
        if (err) {
          res.status(401).json({ message: "Invalid authorization header" });
        } else {
          if (payload.accountType !== "ADMINISTRATOR") {
            res.status(403).json({ message: "Your're not authorised to view this resource" });
          } else {
            req.body.userCode = payload.userCode;
            next();
          }
        }
      });
    } else {
      res.status(401).json({ message: "Invalid authorization header" });
    }
  } catch (error) {
    res.status(401).json({ message: "Invalid authorization header" });
  }
};

/**
 * Create JWT for an authenticated user
 * @param user User Details
 */
export const createAuthTokenForUser = async (user: any): Promise<string> => {
  const authKey: any = process.env.AUTH_SK;
  const expiry: any = process.env.AUTH_EXPIRY || 90000;
  try {
    return Token.sign(user, authKey, {
      expiresIn: expiry,
    });
  } catch (error) {
    throw new Error(error);
  }
};
