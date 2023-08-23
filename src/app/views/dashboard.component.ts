import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Dashboard</h1>
    <p>Seuls les profils administrateurs peuvent accéder à cet écran.</p>
  `,
})
export class DashboardComponent {

}
