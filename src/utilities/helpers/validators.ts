import CamelCaseKeys = require("camelcase-keys");
import { readFileSync, createReadStream } from "fs";
const neatCsv = require("neat-csv");
import { v4 as uuidv4 } from "uuid";
import { customAlphabet } from "nanoid";
import { lowercase, uppercase, numbers } from "nanoid-dictionary";
import { RequiredPropertyError, InvalidDataTypeError } from "./helpers";

export const validateRequiredStringProperty = (label: string, property: any) => {
  if (property == null || property === undefined || property === "undefined") {
    throw new RequiredPropertyError(`${label} must be provided`);
  }
  if (typeof property !== "string") {
    throw new InvalidDataTypeError(`${label} is of an invalid data type`);
  }
};

export const validateRequiredProperty = (label: string, property: any) => {
  if (property == null || property === undefined || property === "undefined") {
    throw new RequiredPropertyError(`${label} must be provided`);
  }
};
export const validateRequiredDateProperty = (label: string, property: any) => {
  const regEx = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
  if (property == null || property === undefined || property === "undefined") {
    throw new RequiredPropertyError(`${label} must be provided`);
  }

  if (!(new Date(property) instanceof Date)) {
    throw new InvalidDataTypeError(`${label} is of an invalid date format`);
  }
};

export const validateRequiredNumericProperty = (label: string, property: any) => {
  const newProp = +property;

  if (Number.isNaN(newProp) && property !== undefined) {
    throw new InvalidDataTypeError(`${label} is of an invalid data type`);
  }

  if (property == null || property === undefined || property === "undefined") {
    throw new RequiredPropertyError(`${label} must be provided`);
  }

  if (typeof property !== "number" && isNaN(property)) {
    throw new InvalidDataTypeError(`${label} is of an invalid data type`);
  }
};

export const validateIfArray = (label: string, arrayProspect: any) => {
  if (arrayProspect == null || arrayProspect === undefined || arrayProspect === "undefined") {
    throw new RequiredPropertyError(`${label} must be provided`);
  } else {
    if (!(Array.isArray(arrayProspect) && arrayProspect.length > 0)) {
      throw new RequiredPropertyError(`${label} must be provided`);
    }
  }
};

export const validateEmailAddress = (email: string): void => {
  if (!isValidEmail(email)) {
    throw new Error("Invalid email address");
  }
};

export const validatePhoneNumber = (phone: string): void => {
  if (!isValidPhoneNumber(phone)) {
    throw new Error("Invalid phone number");
  }
};

// import generate from "nano";

/**
 * Generates unique code
 * @param length Length of unique code
 * @param isUppercase - Whether the string returned should be uppercase
 * @returns Generated string
 */
export const generateUniqueCode = (length: number, isUppercase?: boolean): string => {
  const nans = customAlphabet(lowercase + uppercase + numbers, length);
  return isUppercase ? nans().toUpperCase() : nans();
};

export const readCsvFile = async (url: string): Promise<Object[]> => {
  try {
    let fileData = await readFileSync(url).toString();
    if (fileData.charCodeAt(0) === 0xfeff) {
      fileData = fileData.substr(1);
    }
    let parsed = await neatCsv(fileData);
    return parsed;
  } catch (error) {
    throw new Error("Error parsing file");
  }
};

export const generateUUID = (): string => {
  return uuidv4();
};

export const adaptExpressRequest = (req: any): AppAdaptedRequest => {
  const adaptRequest: AppAdaptedRequest = {
    path: req.path,
    method: req.method,
    pathParams: req.params,
    queryParams: req.query,
    body: req.body,
    user: req.user || {},
  };

  return adaptRequest;
};

export const upperFirstCharacter = (word: string): string => {
  if (word.length === 1) {
    return word.toUpperCase();
  }
  return word.charAt(0).toUpperCase() + word.substring(1);
};

export const isValidEmail = (email: string): boolean => {
  const valid = new RegExp(/^[^@\s]+@[^@\s]+\.[^@\s]+$/);
  return valid.test(email);
};

export const isValidPhoneNumber = (phone: string): boolean => {
  const valid = RegExp(/^\d{4}\d{3}\d{4}$/);
  return valid.test(phone);
};

export const getDateStringFromTime = (time: number): string => {
  const currentDate = new Date(time);
  return currentDate.getDate() + "-" + (currentDate.getMonth() + 1) + "-" + currentDate.getFullYear();
};

export const camelizeCase = (item: any) => {
  return CamelCaseKeys(item);
};

const arrayConjunctions = ["for", "and", "the", "a", "so", "nor", "or"];
export const convertToNameCase = (text: string) => {
  text.replace("  ", " ").toLowerCase();
  text = text.trim();
  const breakText = text.split(" ");

  for (let index = 0; index < breakText.length; index++) {
    if (!arrayConjunctions.includes(breakText[index + 1])) {
      breakText[index] = convertWordToSentenceCase(breakText[index]);
    }
  }
  return breakText.join(" ");
};

export const convertWordToSentenceCase = (text: string) => {
  text = text.trim();
  text.replace("  ", " ").toLowerCase();
  const breakText = text.split("");
  for (let index = 0; index < breakText.length; index++) {
    if (index === 0) {
      breakText[index] = breakText[index].toUpperCase();
    } else {
      breakText[index] = breakText[index].toLowerCase();
    }
  }
  return breakText.join("");
};

// program to split array into smaller chunks

export function splitArrayIntochunks(arr: any[], chunk: number): any[] {
  let chunkArray: any[] = [];
  for (let i = 0; i < arr.length; i += chunk) {
    chunkArray.push(arr.slice(i, i + chunk));
  }
  return chunkArray;
}

export const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export interface AppAdaptedRequest {
  path: any;
  method: any;
  pathParams: any;
  queryParams: any;
  body: any;
  user: any;
}
