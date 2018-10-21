import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http"; //import headers


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient){}
  registerUser(user) {
    return this.http.post("http://localhost:3000/registeration", user)
  }

  authenticate(user) {
    return this.http.post("http://localhost:3000/registeration/authenticate", user)
  }
  getAllContacts(query){
    return this.http.post("http://localhost:3000/registeration/contacts",query)
  }

  addToContact(data){
    return this.http.put("http://localhost:3000/registeration/add",data)
  }

  saveUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }
  
  loadUser(str:string) {
    
    let result = JSON.parse(localStorage.getItem(str));
    return result;
    
  }
  
  isLoggedIn() {
    return (this.loadUser('user')) ? true : false;
  }
  
  logOut() {
    localStorage.clear();
  }

}
