import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee, Employee } from '../models/employee';
import { Observable } from 'rxjs';
import { retry, map, catchError } from 'rxjs/operators';
import { HandleErrorService } from './handle-error.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL = 'https://dummy.restapiexample.com/api/v1';
  constructor(
    private http: HttpClient,
    private handleError: HandleErrorService
  ) {}
  // TODO: think about making api service generic

  // HttpClient API get() method => Fetch employees list
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiURL + '/employees').pipe(
      map((data: any) =>
        data.data.map((item: IEmployee) => {
          return new Employee(item);
        })
      ),
      retry(1),
      catchError(this.handleError.showError)
    );
  }

  // HttpClient API get() method => Fetch employee
  getEmployee(id: number): Observable<Employee> {
    return this.http.get<any>(this.apiURL + '/employee/' + id).pipe(
      map(res => {
        return new Employee(res.data);
      }),
      retry(1),
      catchError(this.handleError.showError)
    );
  }

  // HttpClient API post() method => Create employee
  createEmployee(employee: any): Observable<any> {
    return this.http
      .post<any>(this.apiURL + '/create', JSON.stringify(employee))
      .pipe(retry(1), catchError(this.handleError.showError));
  }

  // HttpClient API put() method => Update employee
  updateEmployee(id: number, employee: any): Observable<IEmployee> {
    return this.http
      .put<IEmployee>(this.apiURL + '/update/' + id, JSON.stringify(employee))
      .pipe(retry(1), catchError(this.handleError.showError));
  }

  // HttpClient API delete() method => Delete employee
  deleteEmployee(id: number) {
    return this.http
      .delete<IEmployee>(this.apiURL + '/delete/' + id)
      .pipe(retry(1), catchError(this.handleError.showError));
  }
}
