import { Directive, inject, OnInit } from '@angular/core';
import { NgIf } from "@angular/common";
import { IdentityService } from "../services/identity.service";
import { AuthenticationService } from "../services/authentication.service";

@Directive({
  selector: '[ifAdmin]',
  standalone: true,
  hostDirectives: [{
    directive: NgIf
  }]
})
export class IfAdminDirective implements OnInit {

  private identityService = inject(IdentityService);
  private authenticationService = inject(AuthenticationService);
  private ngIfDirective = inject(NgIf);

  ngOnInit() {
    this.ngIfDirective.ngIf = this.authenticationService.isAuthenticated && this.identityService.isAdmin();
  }

}
