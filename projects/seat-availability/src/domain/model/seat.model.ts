export enum SeatClass {
  FIRST = 'first',
  BUSINESS = 'business',
  ECONOMY = 'economy'
}

export enum SeatStatus {
  OCCUPIED = 'occupied',
  AVAILABLE = 'available',
  SELECTED = 'selected'
}


export interface ISeat {
  id: string;
  number: string;
  row: number;
  column: string;
  type: SeatClass;
  status: SeatStatus;
  price: number;
  idFlight: string;
}

export interface SeatRow {
  row: number;
  seats: ISeat[];
}

export interface SeatUpdateRequest {
  flightId: string;
  seatIds: string[];
}

export interface SeatUpdateResponse {
  success: boolean;
  updatedSeats: ISeat[];
  message?: string;
}
