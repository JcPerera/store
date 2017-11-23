import { Component, OnInit } from '@angular/core';
import { AuthUserService } from '../../services/auth-user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = {};
  sucess = null;
  constructor(private auth: AuthUserService,
    private router: Router) { }

  ngOnInit() {
  }

  registerUser() {
    this.auth.registerUser(this.user).subscribe(data => {
      if (data.success) {
        this.sucess= true;
        this.router.navigate(['/login']);
      } else {
        this.sucess =false;
        this.router.navigate(['/login/resgister']);
      }
    })
  }
}
