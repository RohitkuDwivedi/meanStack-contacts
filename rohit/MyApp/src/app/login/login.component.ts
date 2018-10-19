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
    if(this.UserName==""){
      alert("blank")
      return ;
    }
    const sendUser = {
      UserName: this.UserName,
      Password:this.Password,
    }
    this.api.authenticate(sendUser).subscribe(res => {
        this.api.saveUser(sendUser);
        this.router.navigate(['/viewContact']);
        console.log("RES:"+res);
        
      },
      err => {console.log("ERR:"+err);},
      ()=>{this.api.saveUser(sendUser);
        this.router.navigate(['/viewContact']);}
    );
  }
  ngOnInit() {
  }

}
