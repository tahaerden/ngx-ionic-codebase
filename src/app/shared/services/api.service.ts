import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { HandleErrorService } from './handle-error.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private http: HttpClient,
    private handleError: HandleErrorService
  ) {}
  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http
      .get(`${environment.apiUrl}${path}`, { params })
      .pipe(retry(1), catchError(this.handleError.showError));
  }

  put(path: string, body = {}): Observable<any> {
    return this.http
      .put(`${environment.apiUrl}${path}`, JSON.stringify(body))
      .pipe(retry(1), catchError(this.handleError.showError));
  }

  post(path: string, body = {}): Observable<any> {
    return this.http
      .post(`${environment.apiUrl}${path}`, JSON.stringify(body))
      .pipe(retry(1), catchError(this.handleError.showError));
  }

  delete(path: string): Observable<any> {
    return this.http
      .delete(`${environment.apiUrl}${path}`)
      .pipe(retry(1), catchError(this.handleError.showError));
  }
}
