export enum AccountType {
  "ADMINISTRATOR",
  "SUPPORT",
  "CUSTOMER",
}

export interface User {
  firstName: string;
  lastName: string;
  emailAddres: string;
  password: string;
  accountType: string;
}
