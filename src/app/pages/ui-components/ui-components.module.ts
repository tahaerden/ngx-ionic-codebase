import { NgModule } from '@angular/core';
import { UiComponentsPageRoutingModule } from './ui-components-routing.module';
import { UiComponentsPage } from './ui-components.page';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [SharedModule, UiComponentsPageRoutingModule],
  entryComponents: [],
  declarations: [UiComponentsPage]
})
export class UiComponentsPageModule {}
