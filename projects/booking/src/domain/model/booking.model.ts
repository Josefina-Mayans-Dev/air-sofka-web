export interface IBooking {
    bookingStatus: string;
    bookingPrice: number;
    discount: number;
    flightId: string;
    userId: string;
    paymentMethod: string;
    email: string;
    prefix: string;
    phoneNumber: string;
  
    departureCity: string;
    arrivalCity: string;
    departureDate: string;
    arrivalDate: string;
  
    airportTax: number;
    additionalCharges: number;
    fuelInsurance: number;
    bookingFee: number;
    totalAmount: number;
    ticketPrice: number;
    keyNotes: string;
  
    passengers: Passenger[];
  }
  
  export interface Passenger {
    passengerTitle: string;
    passengerName: string;
    passengerLastName: string;
    passengerType: string;
    seatId: string;
  }

  export interface IBookingRequest {
    bookingStatus: string;
    bookingPrice: number;
    discount: number;
    flightId: string;
    userId: string;
    paymentMethod: string;
    email: string;
    prefix: string;
    phoneNumber: string;
  
    departureCity: string;
    arrivalCity: string;
    departureDate: string;
    arrivalDate: string;
  
    airportTax: number;
    additionalCharges: number;
    fuelInsurance: number;
    bookingFee: number;
    totalAmount: number;
    ticketPrice: number;
    keyNotes: string;
  
    passengers: Passenger[];
  }

  export interface IBookingResponse {
    message: string;
    email: string;
    phoneNumber: string;
    total: number;
  }