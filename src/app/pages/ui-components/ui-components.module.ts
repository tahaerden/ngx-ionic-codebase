import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UiComponentsPageRoutingModule } from './ui-components-routing.module';

import { UiComponentsPage } from './ui-components.page';
import { ComponentsModule } from '@components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    UiComponentsPageRoutingModule
  ],
  entryComponents: [],
  declarations: [UiComponentsPage]
})
export class UiComponentsPageModule {}
