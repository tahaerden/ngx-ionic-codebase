import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeDetailsPageRoutingModule } from './employee-details-routing.module';

import { EmployeeDetailsPage } from './employee-details.page';
import { ComponentsModule } from '@components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    EmployeeDetailsPageRoutingModule
  ],
  declarations: [EmployeeDetailsPage]
})
export class EmployeeDetailsPageModule {}
