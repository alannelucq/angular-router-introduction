import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";
import { IfAuthenticatedDirective } from "./directives/if-authenticated.directive";
import { IfAdminDirective } from "./directives/if-admin.directive";

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <header>
      <a routerLinkActive="active" routerLink="" [routerLinkActiveOptions]="{ exact: true }">Accueil</a>
      <a routerLinkActive="active" routerLink="dashboard" *ifAdmin>Dashboard</a>
      <a routerLinkActive="active" routerLink="orders" *ifAuthenticated>Mes commandes</a>
      <a routerLinkActive="active" routerLink="profile" *ifAuthenticated>Mon Profil</a>
    </header>
    <div class="content">
      <router-outlet/>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule, IfAuthenticatedDirective, IfAdminDirective]
})
export class AppComponent {
}
