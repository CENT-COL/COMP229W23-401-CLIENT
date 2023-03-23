import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {
    username: null,
    emailAddress: null,
    password: null,
    confirmPassword: null,
    firstName: null,
    lastName: null
  }

  isSucessfull = false;
  isSignUpFailed = false;
  errorMessage = ""

  constructor(private authService: AuthService, private router: Router){}

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    const {username, password, firstName, lastName, emailAddress } = this.form;

    this.authService.register(username, password, firstName + " " + lastName, emailAddress)
      .subscribe({
        next: data => {
          this.isSucessfull = true;
          this.isSignUpFailed = false;
          this.goToHome();
        },
        error: err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      })
  }

  goToHome():  void {
    this.router.navigate(['/login']);
  }

}
