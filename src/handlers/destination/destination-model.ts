import { Airport } from "../airport/airport-model";

export interface Destination {
  destinationId: string;
  name: string;
  airports: Airport[];
}
