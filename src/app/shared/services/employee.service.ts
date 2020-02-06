import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Employee, IEmployee } from '@shared/models/employee';
import { environment } from '@environments/environment';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private api: ApiService) {}

  getEmployees(): Observable<Employee[]> {
    return this.api.get(environment.apiUrl.employeeApi, '/employees').pipe(
      map((data: any) =>
        data.data.map((item: IEmployee) => {
          return new Employee(item);
        })
      )
    );
  }

  getEmployee(id: number): Observable<Employee> {
    return this.api.get(environment.apiUrl.employeeApi, `/employee/${id}`).pipe(
      map(res => {
        return new Employee(res.data);
      })
    );
  }

  createEmployee(employee: any): Observable<any> {
    return this.api.post(environment.apiUrl.employeeApi, '/create/', employee);
  }

  updateEmployee(id: number, employee: any): Observable<IEmployee> {
    return this.api.put(
      environment.apiUrl.employeeApi,
      `/update/${id}`,
      employee
    );
  }

  deleteEmployee(id: number) {
    return this.api.delete(
      environment.apiUrl.employeeApi,
      `'/delete/' + ${id}`
    );
  }
}
