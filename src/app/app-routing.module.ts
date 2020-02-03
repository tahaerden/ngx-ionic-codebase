import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'employee-list',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/employee-list/employee-list.module').then(
        m => m.EmployeeListPageModule
      )
  },
  {
    path: 'ui-components',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/ui-components/ui-components.module').then(
        m => m.UiComponentsPageModule
      )
  },
  {
    // check route guards to prevent navigation when form is dirty
    path: 'employee-details/:id',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/employee-details/employee-details.module').then(
        m => m.EmployeeDetailsPageModule
      )
  },
  {
    path: 'instagram',
    children: [
      {
        path: '',
        redirectTo: 'posts',
        pathMatch: 'full'
      },
      {
        path: 'posts',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./pages/instagram/posts/posts.module').then(
            m => m.PostsPageModule
          )
      },
      {
        path: 'search',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./pages/instagram/search/search.module').then(
            m => m.SearchPageModule
          )
      }
    ]
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
