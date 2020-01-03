import { Component, OnInit } from '@angular/core';
import { ApiService } from '@services/api.service';
import { Employee } from '@models/employee';

@Component({
  selector: 'app-list',
  templateUrl: 'employeeList.page.html',
  styleUrls: ['employeeList.page.scss']
})
export class EmployeeListPage implements OnInit {
  // employees: Employee[] = [];
  employees: Employee[];
  selected = [];
  constructor(private api: ApiService) { }
  // Delete employee
  // deleteEmployee(id: number) {
  //   if (window.confirm('Are you sure, you want to delete?')) {
  //     this.api.deleteEmployee(id).subscribe(data => {
  //       this.getEmployees();
  //     });
  //   }
  // }
  getEmployees() {
    this.api.getEmployees()
      .subscribe((data: Employee[]) => {
        this.employees = data.map(
          (emp: any) => {
            return new Employee(emp);
          }
        );
      });
  }

  ngOnInit() {
    this.getEmployees();
  }
}
