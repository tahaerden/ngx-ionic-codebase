import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { EmployeeListPage } from './employeeList.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxDatatableModule,
    RouterModule.forChild([
      {
        path: '',
        component: EmployeeListPage
      }
    ])
  ],
  declarations: [EmployeeListPage]
})
export class EmployeeListPageModule {}
