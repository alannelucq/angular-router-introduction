import { inject, NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./views/home.component";
import { DashboardComponent } from "./views/dashboard.component";
import { OrdersComponent } from "./views/orders.component";
import { ProfileComponent } from "./views/profile.component";
import { AuthenticationService } from "./services/authentication.service";

const routes: Routes = [
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
