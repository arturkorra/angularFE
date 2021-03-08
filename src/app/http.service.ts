import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  getBeer() {
    // tslint:disable-next-line: semicolon
    return this.http.get('https://api.openbrewerydb.org/breweries')
  }
  // tslint:disable-next-line: no-trailing-whitespace

}