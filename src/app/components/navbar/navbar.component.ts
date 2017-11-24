import { Component, OnInit } from '@angular/core';
import { AuthUserService } from '../../services/auth-user.service'
import { Router } from "@angular/router";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user = {
    username: "",
  }

  constructor(
    private router: Router,
    private authService: AuthUserService) {
  }

  ngOnInit() {
    
  }




  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
    return false;
  }

}
