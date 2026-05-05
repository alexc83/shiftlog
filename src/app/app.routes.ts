import { Routes } from '@angular/router';
import {Dashboard} from './features/dashboard/dashboard';
import {SignedOut} from './features/signed-out/signed-out';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "",
    pathMatch: 'full'
  },
  {
    path: "home",
    component: SignedOut
  },
  {
    path: "dashboard",
    component: Dashboard
  }
];
