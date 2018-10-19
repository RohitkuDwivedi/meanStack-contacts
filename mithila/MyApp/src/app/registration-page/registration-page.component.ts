import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  Name:  String;
  UserName: any ;
  Password: any;
  constructor(private apiService: ApiService) { }

  ngOnInit() {}
  onSubmit() {
    const sendUser = {
      Name : this.Name,
      UserName: this.UserName,
      Password: this.Password
     };
    this.apiService.registerUser(sendUser);
  }

}
