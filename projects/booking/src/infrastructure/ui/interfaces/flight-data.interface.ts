export interface FlightLeg {
    departureTime: string;
    departureAirportCode: string;
    stopAirportCode: string;
    stopDuration: string;
    arrivalTime: string;
    arrivalAirportCode: string;
    days: string;
  }
  
  export interface FlightDetail {
    detail: string[];
    ref: string;
  }
  
  export interface FlightInfo {
    title: string;
    date: string;
    legs: FlightLeg[];
    detail: FlightDetail;
  }
  