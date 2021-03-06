import { Component, OnInit } from '@angular/core';
import { AuthUserService } from '../../services/auth-user.service'
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;
  alerts: any = [];
  constructor(
    private router: Router,
    private authService: AuthUserService) { }

  ngOnInit() {
  }

  login() {
    const user = {
      username: this.username,
      password: this.password
    }
    this.authService.authenticateUser(user).subscribe(data => {
      this.empty();
      if (data.success) {
        this.add(data.msg);
        this.authService.storeUserData(data.token, data.user);
        this.authService.saveCartId();
        this.router.navigate(['/']);
      } else {
        this.add(data.msg);
        this.router.navigate(['login']);
      }
    })
  }

  add(msgs): void {
    this.alerts.push({
      msg: msgs,
      timeout: 2000
    });
  }
  empty(){
    this.username="";
    this.password="";
  }


}
