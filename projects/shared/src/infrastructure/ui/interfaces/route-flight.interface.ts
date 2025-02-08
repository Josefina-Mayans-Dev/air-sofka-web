export interface IRouteFlight {
    departureTime: string;
    departureAirportCode: string;
    arrivalTime: string;
    arrivalAirportCode: string;
    stopAirportCode?: string;
    stopDuration?: string; 
    days?: string;   
} 