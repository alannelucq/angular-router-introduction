import { Routes } from "@angular/router";
import { HomeComponent } from "./views/home.component";
import { inject } from "@angular/core";
import { AuthenticationService } from "./services/authentication.service";
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
        canMatch: [() => inject(IdentityService).isAdmin()],
        loadComponent: () => import('./views/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'orders',
        loadComponent: () => import('./views/orders.component').then(m => m.OrdersComponent),
      },
      {
        path: 'profile',
        loadComponent: () => import('./views/profile.component').then(m => m.ProfileComponent),
      },
    ]
  },
  {
    path: '**',
    loadComponent: () => import('./views/page-not-found.component').then(m => m.PageNotFoundComponent)
  }
];
