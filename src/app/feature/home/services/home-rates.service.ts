import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Rate } from '../models/rate.interface';

@Injectable({
  providedIn: 'root',
})
export class RatesApiService {
  constructor(public http: HttpClient) {}

  public getRates(): Observable<any> {
    // let headers: HttpHeaders = new HttpHeaders();
    // headers = headers.append("apikey", "p9rZlLbBNj2KiAEFyJl0PT8Ti6LEDYr8"); 

    return this.http.get("https://v6.exchangerate-api.com/v6/b3c603e83c2db7debc5adc98/latest/KZT").pipe(
      map((res: any) => res),
      catchError(this.handleError)
    );
  }

  private handleError = (error: any) => throwError(error);
}
