import { Directive, inject, OnInit } from '@angular/core';
import { NgIf } from "@angular/common";
import { AuthenticationService } from "../services/authentication.service";

@Directive({
  selector: '[showIfAuthenticated]',
  standalone: true,
  hostDirectives: [{
    directive: NgIf
  }]
})
export class ShowIfAuthenticatedDirective implements OnInit {

  private authenticationService = inject(AuthenticationService);
  private ngIfDirective = inject(NgIf);
  ngOnInit() {
    this.ngIfDirective.ngIf = this.authenticationService.isAuthenticated;
  }
}
