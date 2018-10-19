import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http"; //import headers
import {map} from 'rxjs/operators'; //import map


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}
  registerUser(user) {
    return this.http.post("http://localhost:3000/registeration", user)
    .pipe(map(res =>res )); 
  }

  authenticate(user) {
    return this.http.post("http://localhost:3000/registeration/authenticate", user)
    .pipe(map(res => console.log(res) ))   // yet to find why???
  }

  addToContact(data){
    return this.http.put("http://localhost:3000/registeration/add",data).subscribe(res => console.log(res))
    
  }

  // loading and storing data in variables of browser
  saveUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }
  
  loadUser() {
    
    let result = JSON.parse(localStorage.getItem('user'));
    return result;
    
  }
  
  isLoggedIn() {
    return (this.loadUser()) ? true : false;
  }
  
  logOut() {
    localStorage.clear();
  }

}
