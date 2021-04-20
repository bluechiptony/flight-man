export interface Booking {
  bookingId: string;
  bookingReference: string;
  flightId: string;
  customer: any;
  createdDate: Date;
  updatedDate: Date;
  createdBy?: string;
  updatedBy?: string;
}
