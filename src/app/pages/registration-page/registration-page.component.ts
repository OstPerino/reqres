import {Component} from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent {
  constructor(private authService: AuthService) {
  }

  username: string = "";
  email: string = "";
  password: string = "";

  registration() {
    this.authService.registration({
      username: this.username,
      email: this.email,
      password: this.password
    }).subscribe(authorized => {
      console.log(authorized);
    });
  }
}
