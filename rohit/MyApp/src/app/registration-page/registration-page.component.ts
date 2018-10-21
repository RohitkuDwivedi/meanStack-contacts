import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  Name:String;
  UserName:any;
  Password:any;
  constructor(
    private apiService:ApiService,
    private router : Router
    ){}

  ngOnInit() {}
  onSubmit(){
    if(this.Name==""||this.Name==undefined||this.UserName==""||this.UserName==undefined){
      alert("Khali")
      return;
    }
    const sendUser = {
      Name :this.Name,
      UserName: this.UserName,
      Password:this.Password,
    }
    this.apiService.registerUser(sendUser).subscribe(res =>{
      if(res){
      alert("added"+this.Name+":"+this.UserName);
      this.router.navigate(['/login']);
      }else{
        this.Name="";
        this.UserName="";
        this.Password="";
        alert(res)
      }
      },
      (err) =>{
        console.log("error:"+err);
      })
    }
}
