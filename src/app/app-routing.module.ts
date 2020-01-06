import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'employee-list',
    loadChildren: () => import('./pages/employee-list/employee-list.module').then(m => m.EmployeeListPageModule)
  },
  {
    path: 'ui-components',
    loadChildren: () => import('./pages/ui-components/ui-components.module').then( m => m.UiComponentsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
