import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Mon profil</h1>
    <p>Seuls utilisateurs authentifiés peuvent accéder à cet écran.</p>
  `,
})
export class ProfileComponent {

}
