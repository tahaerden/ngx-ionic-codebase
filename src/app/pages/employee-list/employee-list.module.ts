import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeeListPage } from './employee-list.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [
    NgxDatatableModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: EmployeeListPage
      }
    ])
  ],
  declarations: [EmployeeListPage]
  // entryComponents: []
})
export class EmployeeListPageModule {}
