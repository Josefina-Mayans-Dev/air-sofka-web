import { ISeat } from "./seat.model";

export interface ISeatMap {
    flightId: string;
    seats: ISeat[];
    selectedSeats: string[];
  }