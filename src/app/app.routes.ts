import { Routes } from '@angular/router';
import {DashboardComponent} from './features/dashboard/dashboard.component';
import {SignedOutComponent} from './features/signed-out/signed-out.component';
import {CreateShiftComponent} from './features/shifts/pages/create-shift-component/create-shift-component';

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
  },
  {
    path: "create-shift",
    component: CreateShiftComponent
  },
  {
    path: "edit-shift/:id",
    component: CreateShiftComponent
  },
];
