import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { EmployeeListPage } from './employee-list.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ComponentsModule } from '@components/components.module';
import { CreateEmployeeComponent } from '@components/modals/create-employee/create-employee.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxDatatableModule,
    ComponentsModule,
    RouterModule.forChild([
      {
        path: '',
        component: EmployeeListPage
      }
    ])
  ],
  declarations: [EmployeeListPage, CreateEmployeeComponent],
  entryComponents: [CreateEmployeeComponent]
})
export class EmployeeListPageModule {}
