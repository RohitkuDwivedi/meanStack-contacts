import {Component,OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {
  USER :any;

  constructor(private api: ApiService,private router: Router){
    if (this.api.isLoggedIn()){
      this.USER = this.api.loadUser("user").UserName;
      alert("loggedin :)"+this.USER)
      
    } else {
      alert("Please login !")
      this.router.navigate(['/login'])
    }
  }
  addContact() {
    this.router.navigate(['/addNewContact']);
  }
  userLogout() {
    this.api.logOut()
    this.router.navigate(['/login'])
  }

  ngOnInit() {

  }

}
