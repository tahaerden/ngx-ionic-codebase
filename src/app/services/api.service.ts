import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee, Employee } from '../models/employee';
import { Observable, throwError } from 'rxjs';
import { retry, map, catchError } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL = 'http://dummy.restapiexample.com/api/v1';
  constructor(private http: HttpClient, private toast: ToastController) {}

  // HttpClient API get() method => Fetch employees list
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiURL + '/employees').pipe(
      retry(1),
      map((data: IEmployee[]) =>
        data.map((item: IEmployee) => {
          return new Employee(item);
        })
      ),
      catchError(this.handleError)
    );
  }

  // HttpClient API get() method => Fetch employee
  getEmployee(id: number): Observable<IEmployee> {
    return this.http
      .get<IEmployee>(this.apiURL + '/employee/' + id)
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API post() method => Create employee
  createEmployee(employee: string): Observable<IEmployee> {
    return this.http
      .post<IEmployee>(this.apiURL + '/create', JSON.stringify(employee))
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API put() method => Update employee
  updateEmployee(id: number, employee: string): Observable<IEmployee> {
    return this.http
      .put<IEmployee>(this.apiURL + '/update/' + id, JSON.stringify(employee))
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API delete() method => Delete employee
  deleteEmployee(id: number) {
    return this.http
      .delete<IEmployee>(this.apiURL + '/delete/' + id)
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
