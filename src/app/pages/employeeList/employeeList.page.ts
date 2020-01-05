import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '@services/api.service';
import { Employee } from '@models/employee';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { NgForOf } from '@angular/common';
import { log } from 'util';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-list',
  templateUrl: 'employeeList.page.html',
  styleUrls: ['employeeList.page.scss']
})
export class EmployeeListPage implements OnInit {
  // employees: Employee[] = [];
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;
  // @ViewChild('hdrTpl', { static: true }) hdrTpl: TemplateRef<any>;
  employees: Employee[];
  temp = [];
  selected = [];
  // asyncResult: string;
  constructor(private api: ApiService) {}
  // Delete employee
  // deleteEmployee(id: number) {
  //   if (window.confirm('Are you sure, you want to delete?')) {
  //     this.api.deleteEmployee(id).subscribe(data => {
  //       this.getEmployees();
  //     });
  //   }
  // }
  getEmployees() {
    this.api.getEmployees().subscribe((data: Employee[]) => {
      // cache our list
      this.employees = data.map((emp: any) => {
        return new Employee(emp);
      });
      this.temp = [...this.employees];
    });
  }
  onSelect({ selected }) {
    if (selected) {
      this.selected = selected;
    }
  }
  updateFilter(event: any) {
    const value = event.target.value.toLowerCase().trim();
    // get the key names of each column in the dataset
    const keys = Object.keys(this.temp[0]);
    // assign filtered matches to the active datatable
    this.employees = this.temp.filter(item => {
      for (const i of keys) {
        if (
          item[i] &&
          item[i]
            .toString()
            .toLowerCase()
            .indexOf(value) !== -1
        ) {
          return true;
        }
      }
    });
    this.table.offset = 0;
  }
  // TODO: Implement async await func
  // async getAsyncData() {
  //   this.asyncResult = await this.httpClient.get<Employee>(this.url).toPromise();
  //   console.log('No issues, I will wait until promise is resolved..');
  // }

  ngOnInit() {
    this.getEmployees();
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  //   this.filterSubject.unsubscribe();
  // }
}
