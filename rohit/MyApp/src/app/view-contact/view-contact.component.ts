import {Component,OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {Router} from "@angular/router";
import { query } from '@angular/core/src/render3/query';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {
  USER :any;
  data:any

  constructor(private api: ApiService,private router: Router){
    if (this.api.isLoggedIn()){
      this.USER = this.api.loadUser("user").UserName;
      const query = {UserName:this.USER};
      const contacts = this.api.getAllContacts(query).subscribe(
        (next)=>{
          console.log(next)
          this.data=next

        }
        
      )  
    } else {
      alert("Please login !")
      this.router.navigate(['/login'])
    }
    

  }
  ngOnInit() {
    
  }

  addContact() {
    this.router.navigate(['/addNewContact']);
  }

  userLogout() {
    this.api.logOut()
    this.router.navigate(['/login'])
  }

  

}
