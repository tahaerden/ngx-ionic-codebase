import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient, private toast: ToastController) {}

  get(apiUrl: string, path: string): Observable<any> {
    return this.http
      .get(`${apiUrl}${path}`)
      .pipe(retry(1), catchError(this.handleError));
  }

  put(apiUrl: string, path: string, body = {}): Observable<any> {
    return this.http
      .put(`${apiUrl}${path}`, JSON.stringify(body))
      .pipe(retry(1), catchError(this.handleError));
  }

  post(apiUrl: string, path: string, body = {}): Observable<any> {
    return this.http
      .post(`${apiUrl}${path}`, JSON.stringify(body))
      .pipe(retry(1), catchError(this.handleError));
  }

  delete(apiUrl: string, path: string): Observable<any> {
    return this.http
      .delete(`${apiUrl}${path}`)
      .pipe(retry(1), catchError(this.handleError));
  }

  // Error handling
  handleError = (error: any) => {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    this.toast
      .create({
        color: 'danger',
        header: 'Error',
        message: errorMessage,
        duration: 5 * 1000,
        buttons: [
          {
            icon: 'close-circle',
            text: null,
            role: 'cancel'
          }
        ]
      })
      .then(toast => {
        toast.present();
      });
    return throwError(errorMessage);
  };
}
