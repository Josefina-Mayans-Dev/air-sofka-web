import { IDetailsFlight, IRouteFlight } from "shared"

export interface IDataCard {
    route: IRouteFlight,
    detail: IDetailsFlight,
    price: number
}