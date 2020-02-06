import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map, catchError } from 'rxjs/operators';
import { HandleErrorService } from '@shared/services/handle-error.service';
import { Employee, IEmployee } from '@shared/models/employee';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(
    private http: HttpClient,
    private handleError: HandleErrorService
  ) {}

  // HttpClient API get() method => Fetch employees list
  getEmployees(): Observable<Employee[]> {
    return this.http
      .get<Employee[]>(environment.apiUrl.employeeApi + '/employees')
      .pipe(
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
    return this.http
      .get<any>(environment.apiUrl.employeeApi + '/employee/' + id)
      .pipe(
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
      .post<any>(
        environment.apiUrl.employeeApi + '/create',
        JSON.stringify(employee)
      )
      .pipe(retry(1), catchError(this.handleError.showError));
  }

  // HttpClient API put() method => Update employee
  updateEmployee(id: number, employee: any): Observable<IEmployee> {
    return this.http
      .put<IEmployee>(
        environment.apiUrl.employeeApi + '/update/' + id,
        JSON.stringify(employee)
      )
      .pipe(retry(1), catchError(this.handleError.showError));
  }

  // HttpClient API delete() method => Delete employee
  deleteEmployee(id: number) {
    return this.http
      .delete<IEmployee>(environment.apiUrl.employeeApi + '/delete/' + id)
      .pipe(retry(1), catchError(this.handleError.showError));
  }
}
