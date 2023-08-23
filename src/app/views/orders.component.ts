import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Mes commandes</h1>
    <p>Seuls les utilisateurs authentifiés peuvent accéder à cet écran.</p>
  `,
})
export class OrdersComponent {

}
