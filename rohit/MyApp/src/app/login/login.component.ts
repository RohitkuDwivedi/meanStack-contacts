import { Component, OnInit } from '@angular/core';
import {ApiService } from '../api.service';
import {Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Password:any;
  UserName:any;
  constructor(private api : ApiService , private router:Router) { }

  ngOnInit() {}

  login(){
    const sendUser = {
      UserName: this.UserName,
      Password:this.Password,
    }
    if(sendUser.UserName===undefined || sendUser.Password===undefined){
      alert("blank")
    }
    else{
    
    this.api.authenticate(sendUser)
    .subscribe(
      res => {
        if(res){
        this.api.saveUser(sendUser);
        this.router.navigate(['/viewContact']);
      }else{
        alert(res)
        this.UserName=""
        this.Password=""
      }
        console.log(res)
      },
      err => alert("ERR:"+err),
    );
  }
}
  
}
