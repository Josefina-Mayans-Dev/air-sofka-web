import { inject, Injectable } from "@angular/core";
import { ICostBreakdownRequest, ICostBreakdownResponse } from "../../domain/model/const-brackdown.model";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { IBooking, IBookingRequest, IBookingResponse } from "../../domain/model/booking.model";

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  mainUrl = 'http://localhost:8080/booking';
  http = inject(HttpClient);


  getCostBreakdown(costRequest: ICostBreakdownRequest): Observable<ICostBreakdownResponse> {
    return this.http.post<ICostBreakdownResponse>(`${this.mainUrl}/cost`, costRequest);

  }

  makeBooking(request: IBookingRequest): Observable<IBookingResponse> {
    return this.http.post<IBookingResponse>(`${this.mainUrl}`, request);

  }

}