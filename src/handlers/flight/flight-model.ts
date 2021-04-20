export interface Flight {
  flightId: string;
  planeId: string;
  originAirport: string;
  destinationAirPort: string;
  takeOffTime: Date;
  landingTime: Date;
  hasMealService?: boolean;
  price: number;
  mealPrice?: number;
}
