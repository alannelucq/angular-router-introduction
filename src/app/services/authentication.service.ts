import { inject, Injectable, signal } from '@angular/core';
import { Router } from "@angular/router";
import { toObservable } from "@angular/core/rxjs-interop";
import { of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isAuthenticated = false;
}
