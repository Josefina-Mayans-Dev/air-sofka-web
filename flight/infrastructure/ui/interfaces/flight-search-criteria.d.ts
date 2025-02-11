export interface FlightSearchCriteria {
    tripType: string;
    origin: string;
    destination: string;
    departureDate: string;
    returnDate?: string;
    adults: number;
    payWithMiles?: boolean;
    promoCode?: string;
}
