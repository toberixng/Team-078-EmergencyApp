import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    //loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    loadChildren: () => import('./welcom-page/welcom-page.module').then( m => m.WelcomPagePageModule)
  
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'admin-dashboard',
    loadChildren: () => import('./pages/admin-pages/admin-dashboard/admin-dashboard.module').then( m => m.AdminDashboardPageModule)
  },
  {
    path: 'welcom-page',
    loadChildren: () => import('./welcom-page/welcom-page.module').then( m => m.WelcomPagePageModule)
  },
  {
    path: 'respondant-login',
    loadChildren: () => import('./pages/respondant-pages/respondant-login/respondant-login.module').then( m => m.RespondantLoginPageModule)
  },

  {
    path: 'respondant-dashboard',
    loadChildren: () => import('./pages/respondant-pages/respondant-dashboard/respondant-dashboard.module').then( m => m.RespondantDashboardPageModule)
  },
  {
    path: 'admin-sign-up',
    loadChildren: () => import('./pages/admin-pages/admin-sign-up/admin-sign-up.module').then( m => m.AdminSignUpPageModule)
  },
  {
    path: 'admin-login',
    loadChildren: () => import('./pages/admin-pages/admin-login/admin-login.module').then( m => m.AdminLoginPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
{ }
