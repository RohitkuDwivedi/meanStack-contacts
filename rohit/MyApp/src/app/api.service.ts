import {Injectable} from '@angular/core';
import {Http,Headers} from "@angular/http"; //import headers
import { map } from 'rxjs/operators'; //import map


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: Http) {}
  registerUser(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.post("http://localhost:3000/registeration", user,{ headers: headers }).pipe(map(res => res.json())); 
  }
  authenticate(user) {
    const headers = new Headers(); 
    headers.append('Content-Type', 'application/json'); 
    this.http.post("http://localhost:3000/registeration/authenticate", user, { headers: headers }).pipe(map(res => res.json()));   // yet to find why???

  }

}
