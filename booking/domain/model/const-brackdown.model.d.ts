export interface ICostBreakdownResponse {
    ticketPrice: number;
    airportTax: number;
    totalAmount: number;
    bookingFee: number;
    fuelInsurance: number;
    additionalCharges: number;
    discount: number;
}
export interface ICostBreakdown {
    ticketPrice: number;
    airportTax: number;
    totalAmount: number;
    bookingFee: number;
    fuelInsurance: number;
    additionalCharges: number;
    discount: number;
}
export interface ICostBreakdownRequest {
    passengers: {
        seatId: string;
    }[];
    userId: string;
}
