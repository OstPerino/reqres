import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user.service";
import {Undefinable} from "../../types/types.type";
import {IUser} from "../../types/user.type";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  constructor(private route: ActivatedRoute,
              private userService: UserService) {
  }

  userInfo: Undefinable<IUser> = undefined;
  showInputs: boolean = false;
  editFirstNameValue: string = "";
  editLastNameValue: string = "";
  editEmailValue: string = "";

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      this.userService.getUserInfo(id).subscribe(userInfo => {
        this.userInfo = userInfo.data;
        this.editEmailValue = userInfo.data.email;
        this.editFirstNameValue = userInfo.data.first_name;
        this.editLastNameValue = userInfo.data.last_name;
      });
    });
  }

  onEditHandler() {
    this.showInputs = !this.showInputs;
  }

  submitEdit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      this.userService.editUser(id, {
        first_name: this.editFirstNameValue,
        last_name: this.editLastNameValue,
        email: this.editEmailValue
      }).subscribe(user => {
          if (this.userInfo) {
            this.userInfo.email = user.email;
            this.userInfo.first_name = user.first_name;
            this.userInfo.last_name = user.last_name;
          }
          this.editEmailValue = user.email;
          this.editFirstNameValue = user.first_name;
          this.editLastNameValue = user.last_name;
      });
    })

    this.showInputs = false;
  }
}
