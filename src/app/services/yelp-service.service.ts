import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    "Authorization": "Bearer gz5hj8hk71lkRGD7dfgIdddLcf1JpCAB2ESHH3ecPrGLf3F3PE7lmeXhw24dQAozyX35T6Ab8yxNVFmuvBGtYW2Ex79iJjba0dldEGn6o5JPlNkL7n4IrSX7mrwbXHYx"
  })
}

@Injectable({
  providedIn: 'root'
})
export class YelpServiceService {
  private _yelpUrl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search"

  constructor(private _http: HttpClient) { }

  getLocation(searchType) : Observable<any> {
    console.log()
    return this._http.get(`${this._yelpUrl}?price=${searchType.searchPrice}&location=${searchType.searchWord}`, httpOptions)
  }
}
