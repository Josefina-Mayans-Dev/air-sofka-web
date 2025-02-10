export interface FlightSearchCriteria {
    tripType: string;//"Round Trip" | "One Way" | "Multi-City";
    origin: string;
    destination: string;
    departureDate: string;
    returnDate?: string;
    adults: number;
    payWithMiles?: boolean;
    promoCode?: string;
}