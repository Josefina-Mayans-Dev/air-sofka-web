import { FlightSearchCriteria } from "../../infrastructure/ui/interfaces/flight-search-criteria";
import { IFlight } from "./flight";
export interface IFlightSelected {
    filters?: FlightSearchCriteria;
    origin?: IFlight;
    destination?: IFlight;
}
