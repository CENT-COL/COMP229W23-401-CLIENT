import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY= 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  //save Token inside Session Storage in the Browser
  public saveToken(token:string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }
  //retrieve Token from Session Storage
  public getToken(): String | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }
  //clear Token
  public signOut(): void {
    window.sessionStorage.clear();
  }

  public saveUser(user:any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }
 
  public getUser(): any {
    const user =  window.sessionStorage.getItem(USER_KEY);
    if(user){
      return JSON.parse(user);
    }
    return {}
  }


}
