import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL = 'http://dummy.restapiexample.com/api/v1';
  constructor(private http: HttpClient) { }

  // HttpClient API get() method => Fetch employees list
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiURL + '/employees')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API get() method => Fetch employee
  getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(this.apiURL + '/employee/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API post() method => Create employee
  createEmployee(employee: string): Observable<Employee> {
    return this.http.post<Employee>(this.apiURL + '/create', JSON.stringify(employee))
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API put() method => Update employee
  updateEmployee(id: number, employee: string): Observable<Employee> {
    return this.http.put<Employee>(this.apiURL + '/update/' + id, JSON.stringify(employee))
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API delete() method => Delete employee
  deleteEmployee(id: number) {
    return this.http.delete<Employee>(this.apiURL + '/delete/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
