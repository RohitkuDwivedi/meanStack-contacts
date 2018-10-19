import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
UserName: "";
Password: "" ;
  constructor() { }

  ngOnInit() {
  }
login() {
  alert('UserName :' + this.UserName + '\nPassword :' + this.Password );
}
}
