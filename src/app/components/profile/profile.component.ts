import { Component, OnInit } from '@angular/core';
import { AuthUserService } from "../../services/auth-user.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: Object;
  constructor(private auth: AuthUserService, private router: Router) { }

  ngOnInit() {
    this.auth.getProfile().subscribe(profile => {
      this.user = profile.user;
    },err =>{
      console.log(err);
      return false;
    });
  }

}
