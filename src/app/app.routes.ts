import { Router, Routes } from "@angular/router";
import { HomeComponent } from "./views/home.component";
import { inject } from "@angular/core";
import { AuthenticationService } from "./services/authentication.service";
import { DashboardComponent } from "./views/dashboard.component";
import { OrdersComponent } from "./views/orders.component";
import { ProfileComponent } from "./views/profile.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '',
    canActivate: [() => inject(AuthenticationService).isAuthenticated || inject(Router).navigate(['/'])],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'orders',
        component: OrdersComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
    ]
  },
];
