export declare enum SeatClass {
    FIRST = "FIRST",
    BUSINESS = "BUSINESS",
    ECONOMY = "ECONOMY"
}
export declare enum SeatStatus {
    OCCUPIED = "OCCUPIED",
    AVAILABLE = "AVAILABLE",
    SELECTED = "SELECTED"
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
