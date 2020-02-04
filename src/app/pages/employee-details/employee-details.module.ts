import { NgModule } from '@angular/core';
import { EmployeeDetailsPageRoutingModule } from './employee-details-routing.module';
import { EmployeeDetailsPage } from './employee-details.page';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [SharedModule, EmployeeDetailsPageRoutingModule],
  declarations: [EmployeeDetailsPage]
})
export class EmployeeDetailsPageModule {}
