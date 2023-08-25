import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <h1>404</h1>
    <p>La page recherchée n'existe pas.</p>
    <a routerLink="/">Retourner à l'accueil</a>
  `,
  styles: [
    `:host {
      display: flex;
      flex-direction: column;
    }`,
    `a {
      margin: 10px auto;
      text-decoration: none;
      border: 1px solid black;
      color: black;
      padding: 10px;
      cursor: pointer;
    }`
  ]
})
export class PageNotFoundComponent {
}
