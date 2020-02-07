import { Component, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AppComponent } from 'src/app/app.component';
import { CreateEmployeeComponent } from '@shared/components/modals/create-employee/create-employee.component';
import { Employee } from '@shared/models/employee';
import { EmployeeService } from '@shared/services/employee.service';

@Component({
  selector: 'app-list',
  templateUrl: 'employee-list.page.html',
  styleUrls: ['employee-list.page.scss']
})
export class EmployeeListPage {
  unsub = new Subject();
  @ViewChild(DatatableComponent) table: DatatableComponent;
  columns = [
    { prop: 'name', name: 'Name' },
    { prop: 'salary', name: 'Salary' }
  ];
  searchColumn = 'all';
  employees: Employee[];
  temp = [];
  selected = [];
  constructor(
    public api: EmployeeService,
    private router: Router,
    public modalCtrl: ModalController,
    public appComp: AppComponent
  ) {}

  ionViewWillEnter() {
    // Load the DT initially
    this.refreshDT();
    // this.sub.add(
    //   this.api
    //     .getEmployees()
    //     .subscribe((data: Employee[]) => {
    //       this.employees = data;
    //       this.temp = data;
    //     })
    // );
  }

  ionViewWillLeave() {
    this.unsub.next();
    this.unsub.complete();
  }

  onSelect({ selected }) {
    if (selected) {
      this.router.navigate(['employee-details', selected[0].id]);
      // this.selected = selected;
    }
  }
  refreshDT() {
    this.api
      .getEmployees()
      .pipe(takeUntil(this.unsub))
      .subscribe((data: Employee[]) => {
        this.employees = data;
        this.temp = data;
      });
  }
  updateFilter(event: any) {
    const searchText = event.target.value.toLowerCase().trim();
    if (this.searchColumn === 'all') {
      // Search for all columns by getting the key names of each column in the dataset
      const keys = Object.keys(this.temp[0]);
      // assign filtered matches to the active datatable
      this.employees = this.temp.filter(item => {
        for (const i of keys) {
          if (
            item[i] &&
            item[i]
              .toString()
              .toLowerCase()
              .indexOf(searchText) !== -1
          ) {
            return true;
          }
        }
      });
    } else {
      // Search for specific columns
      this.employees = this.temp.filter(item => {
        if (
          item[this.searchColumn] &&
          item[this.searchColumn]
            .toString()
            .toLowerCase()
            .indexOf(searchText) !== -1
        ) {
          return true;
        }
      });
    }
    this.table.offset = 0;
  }

  async showModal() {
    const modal = await this.modalCtrl.create({
      component: CreateEmployeeComponent
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data) {
      this.refreshDT();
    }
  }
}
