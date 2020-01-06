import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '@services/api.service';
import { Employee } from '@models/employee';
import { DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-list',
  templateUrl: 'employeeList.page.html',
  styleUrls: ['employeeList.page.scss']
})
export class EmployeeListPage implements OnInit {
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;
  employees: Employee[];
  temp = [];
  selected = [];
  // asyncResult: string;
  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getEmployees().subscribe((data: Employee[]) => {
      // TODO: check how to unsub
      this.employees = data;
      this.temp = data;
    });
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  //   this.filterSubject.unsubscribe();
  // }
  // Delete employee
  // deleteEmployee(id: number) {
  //   if (window.confirm('Are you sure, you want to delete?')) {
  //     this.api.deleteEmployee(id).subscribe(data => {
  //       this.getEmployees();
  //     });
  //   }
  // }
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
}
