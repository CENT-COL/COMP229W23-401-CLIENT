import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

const AUTH_API  = environment.apiUrl + "/auth/"; // http://localhost:3000/api/auth
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {}

  login(username:string, password:string): Observable<any>{
    return this.httpClient.post(AUTH_API+"login", {
      username,
      password
    }, httpOptions)
  }

  register(username: string, 
    password:string, 
    displayName: string, 
    emailAddress:string): Observable<any> {
      return this.httpClient.post(AUTH_API+"register", {
        username,
        password,
        displayName,
        emailAddress
      }, httpOptions)
    }
}
