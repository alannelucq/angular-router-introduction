import { Routes } from "@angular/router";
import { HomeComponent } from "./views/home.component";
import { inject } from "@angular/core";
import { AuthenticationService } from "./services/authentication.service";
import { DashboardComponent } from "./views/dashboard.component";
import { OrdersComponent } from "./views/orders.component";
import { ProfileComponent } from "./views/profile.component";
import { IdentityService } from "./services/identity.service";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '',
    canMatch: [() => inject(AuthenticationService).isAuthenticated],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        canMatch: [() => inject(IdentityService).isAdmin()]
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
  {
    path: '**',
    redirectTo: '/'
  }
];
