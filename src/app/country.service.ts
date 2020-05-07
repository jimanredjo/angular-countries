import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Country} from './country';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  url = 'https://restcountries.eu/rest/v2/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getCountries(): Observable<any> {
    return this.http.get('https://restcountries.eu/rest/v2/all')
      .pipe(
        tap(_ => this.log('fetched countries')),
        catchError(this.handleError<Country[]>('getCountries', []))
        );
  }

  getCountry(countryName): Observable<any>{
    return this.http.get(`${this.url}name/${countryName}`);
  }

  private log(message: string) {
    // this.messageService.add(`PatientService: ${message}`);
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      // console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
