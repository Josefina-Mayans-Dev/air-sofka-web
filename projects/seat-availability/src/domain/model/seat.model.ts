export interface ISeat {
  id: string;
// number: row+column
  row: number;
  column: string;
  status: SeatStatus;
  price: number;
  type: SeatClass;
}

export enum SeatStatus {
  AVAILABLE = 'AVAILABLE',
  OCCUPIED = 'OCCUPIED',
  SELECTED = 'SELECTED'
}

export enum SeatClass{
  ECONOMY = "ECONOMY",
  BUSINESS = "BUSINESS",
  FIRST = "FIRST"
}