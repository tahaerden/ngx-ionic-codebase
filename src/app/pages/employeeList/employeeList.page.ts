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
  employees = [];
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
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
          emp.icon = this.icons[Math.floor(Math.random() * this.icons.length)];
          return new Employee(emp);
        }
        );
      });
  }
  ngOnInit() {
    // this.employees = this.getEmployees();
    this.getEmployees();
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
