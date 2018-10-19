import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  Name:String;
  UserName:any ;
  Password:any;
  constructor(private apiService:ApiService, private router : Router) { }

  ngOnInit() {}
  onSubmit(){
    const sendUser = {
      Name :this.Name,
      UserName: this.UserName,
      Password:this.Password,
    }
    this.apiService.registerUser(sendUser).subscribe(res =>{ 
    
    })
    this.router.navigate(['/login']);

  }

}
