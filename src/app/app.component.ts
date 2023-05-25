import {Component, OnInit} from '@angular/core';
import {IUser} from "../types/user.type";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  users: IUser[] = [];

  ngOnInit(): void {
    this.userService.getAll().subscribe(users => {
      this.users = users.data;
    });
  }
}
