import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Accueil</h1>
    <p>Tous les utilisateurs peuvent accéder à cet écran.</p>
  `,
})
export class HomeComponent {

}
