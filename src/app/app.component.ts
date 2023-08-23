import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";
import { IfAuthenticatedDirective } from "./directives/if-authenticated.directive";
import { IfAdminDirective } from "./directives/if-admin.directive";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule, IfAuthenticatedDirective, IfAdminDirective]
})
export class AppComponent {
}
