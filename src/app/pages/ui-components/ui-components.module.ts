import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UiComponentsPageRoutingModule } from './ui-components-routing.module';

import { UiComponentsPage } from './ui-components.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UiComponentsPageRoutingModule
  ],
  declarations: [UiComponentsPage]
})
export class UiComponentsPageModule {}
