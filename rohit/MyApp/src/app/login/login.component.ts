import { Component, OnInit } from '@angular/core';
import {ApiService } from '../api.service';
import {Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Password="";
  UserName="";
  constructor(private api : ApiService , private router:Router) { }
  login(){
    const sendUser = {
      UserName: this.UserName,
      Password:this.Password,
    }
    this.api.authenticate(sendUser).subscribe(res => {
      if (1) {
        this.api.saveUser(sendUser);
        this.router.navigate(['/viewContact']);
      } else {
        // Error msg
      }

    });
    //this.router.navigate(['/viewContact']); // to navigate after authentication of user 
  }
  ngOnInit() {
  }

}
