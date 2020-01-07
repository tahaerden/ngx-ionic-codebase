import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UiComponentsPage } from './ui-components.page';

const routes: Routes = [
  {
    path: '',
    component: UiComponentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiComponentsPageRoutingModule {}
