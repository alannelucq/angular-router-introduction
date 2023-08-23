import { Component, inject } from '@angular/core';
import { AuthenticationService } from "./services/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuItems = [
    { name: 'Accueil', path: '' },
    { name: 'Dashboard', path: 'dashboard' },
    { name: 'Mes commandes', path: 'orders' },
    { name: 'Mon profil', path: 'profile' }
  ];
}
