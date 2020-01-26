import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, tap} from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class ProductService {

  private productUrl = 'api/products/products.json';
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
      );
  }

  handleError(error: HttpErrorResponse): Observable<Product[]> {
    const errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
    return throwError(errorMessage);
  }
}
