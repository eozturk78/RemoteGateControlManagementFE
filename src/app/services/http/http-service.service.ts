import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, ViewChild, ElementRef } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { HandleError, HttpErrorHandler } from './http-error-handler.service';
import { map, tap } from 'rxjs/operators';
import { BaseService } from '../base/base.service';

@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {
  handleError: HandleError;
  public baseUrl = 'https://api.aesmartsystems.com';

  @ViewChild('errorMessage') errorMessage!: ElementRef<HTMLDivElement>;

  constructor(
    private http: HttpClient,
    private base: BaseService,
    private httpErrorHandler: HttpErrorHandler
  ) {
    this.handleError = httpErrorHandler.createHandleError('HeroesService');
  }

  post<T>(url: string, params: any): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${url}`, params).pipe(
      map((data: any) => {
        this.base.errorMessage = [];
        if (data.IsSuccess) return data.Response;
        else {
          this.base.errorMessage.push(data.ErrorMessage);
          throw Error(data.ErrorMessage);
        }
      }),
      catchError(this.handleError<T>(url))
    );
  }

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${url}`).pipe(
      map((data: any) => {
        this.base.errorMessage = [];
        if (data.IsSuccess) return data.Response;
        else {
          this.base.errorMessage.push(data.ErrorMessage);
          throw Error(data.ErrorMessage);
        }
      }),
      catchError(this.handleError<T>(url))
    );
  }

  delete<T>(url: string, id?: string): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}/${url}`).pipe(
      map((data: any) => {
        this.base.errorMessage = [];
        if (data.IsSuccess) return JSON.parse(data.Response);
        else {
          this.base.errorMessage.push(data.ErrorMessage);
          throw Error(data.ErrorMessage);
        }
      }),
      catchError(this.handleError<T>(url))
    );
  }
}
