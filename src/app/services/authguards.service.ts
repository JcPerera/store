import { Injectable } from '@angular/core';
import { Router, CanActivate } from "@angular/router";
import { AuthUserService } from "../services/auth-user.service";

@Injectable()
export class AuthguardsService implements CanActivate {

  constructor(private auth: AuthUserService, private router: Router) { }


  canActivate() {
    if (this.auth.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
