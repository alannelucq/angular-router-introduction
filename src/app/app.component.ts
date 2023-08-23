import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";
import { ShowIfAuthenticatedDirective } from "./directives/show-if-authenticated.directive";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule, ShowIfAuthenticatedDirective]
})
export class AppComponent {
}
