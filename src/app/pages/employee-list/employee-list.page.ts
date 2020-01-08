import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ApiService } from '@services/api.service';
import { Employee } from '@models/employee';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: 'employee-list.page.html',
  styleUrls: ['employee-list.page.scss']
})
export class EmployeeListPage implements OnInit, OnDestroy {
  unsub = new Subject();
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;
  employees: Employee[];
  temp = [];
  selected = [];
  constructor(private api: ApiService, private router: Router) {}

  ngOnInit() {
    this.api
      .getEmployees()
      .pipe(takeUntil(this.unsub))
      .subscribe((data: Employee[]) => {
        this.employees = data;
        this.temp = data;
      });

    // this.sub.add(
    //   this.api
    //     .getEmployees()
    //     .subscribe((data: Employee[]) => {
    //       this.employees = data;
    //       this.temp = data;
    //     })
    // );
  }

  ngOnDestroy() {
    this.unsub.next();
    this.unsub.complete();
  }
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
      console.log('here');

      this.router.navigate(['employee-details', selected[0].id]);
      // this.selected = selected;
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
