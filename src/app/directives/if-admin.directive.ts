import { Directive, inject, OnInit } from '@angular/core';
import { NgIf } from "@angular/common";
import { IdentityService } from "../services/identity.service";
import { Role } from "../roles.enum";

@Directive({
  selector: '[ifAdmin]',
  standalone: true,
  hostDirectives: [{
    directive: NgIf
  }]
})
export class IfAdminDirective implements OnInit {

  private identityService = inject(IdentityService);
  private ngIfDirective = inject(NgIf);

  ngOnInit() {
    console.log(this.identityService.roles);
    this.ngIfDirective.ngIf = this.identityService.roles.includes(Role.Admin);
  }

}
