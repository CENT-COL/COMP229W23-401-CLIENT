import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  }

  isLoggedIn = false;
  isLoginFailded = false;
  errorMessage = "";

  constructor(private authService: AuthService, 
    private tokenStorage: TokenStorageService,
    private router: Router
    ){}

  ngOnInit(): void {
    if(this.tokenStorage.getToken()){
      this.isLoggedIn = true;
    }
  }

  onSubmit(): void {
    const {username, password} = this.form;

    this.authService.login(username,password).subscribe({
      next: data => {
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data.user);

        this.isLoginFailded = false;
        this.isLoggedIn = true;
        this.goToHome();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailded = true;
      }
    })
  }

  goToHome(): void {
    this.router.navigate(['/'])
      .then(() => window.location.reload());
  }

}
