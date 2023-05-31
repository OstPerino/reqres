import {Component} from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent {
  constructor(private authService: AuthService) {
  }

  username: string = "";
  email: string = "";
  password: string = "";

  authorize() {
    this.authService.authorize({
      username: this.username,
      email: this.email,
      password: this.password
    }).subscribe(authorized => {
      console.log(authorized);
    });
  }
}
