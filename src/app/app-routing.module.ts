import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdsAuthGuardGuard } from './guard/pds-auth-guard.guard';
import { PdsDashboardComponent } from './pds-dashboard/pds-dashboard.component';
import { PdsLoginComponent } from './pds-login/pds-login.component';

const routes: Routes = [
  {
    path: 'login',
    component: PdsLoginComponent,
  },
  {
    path: 'dashboard',
    component: PdsDashboardComponent,
    canActivate: [PdsAuthGuardGuard]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
