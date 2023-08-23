import { Injectable } from '@angular/core';
import { Role } from "../roles.enum";


@Injectable({
  providedIn: 'root'
})
export class IdentityService {
  roles = [Role.Admin, Role.Customer];

  isAdmin() {
    return this.roles.includes(Role.Admin);
  }
}
