import { Component, OnInit } from '@angular/core';
import  { ApiService } from "../api.service";
import { Router} from "@angular/router";

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {
  USER="";
  
  constructor(private api : ApiService,
              private router: Router) { 
  
  if( this.api.isLoggedIn() ){
      this.USER = this.api.loadUser().UserName;
    }

  }
  addContact(){
    this.router.navigate(['/addNewContact']);
  }

  ngOnInit() {

  }
  
}
