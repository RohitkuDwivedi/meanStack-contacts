import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
@Component({
  selector: 'app-add-new-contact',
  templateUrl: './add-new-contact.component.html',
  styleUrls: ['./add-new-contact.component.css']
})
export class AddNewContactComponent implements OnInit {

  constructor(private api: ApiService) { }
  fname: String;
  lname: String;
  number: number;
  email: any;

  ngOnInit() {
  }
  addnewContact() {
    const addContact = {
      fname: this.fname,
      lname: this.lname,
      number: this.number,
      email: this.email
    }
    const data = {
      UserName: this.api.loadUser().UserName,
      newContact: addContact
    }
    console.log(data);
    this.api.addToContact(data);
    alert(addContact.fname);


  }

}
