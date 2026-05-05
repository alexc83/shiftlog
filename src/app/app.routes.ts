import { Routes } from '@angular/router';
import {DashboardComponent} from './features/dashboard/dashboard.component';
import {SignedOutComponent} from './features/signed-out/signed-out.component';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: 'full'
  },
  {
    path: "home",
    component: SignedOutComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  }
];
