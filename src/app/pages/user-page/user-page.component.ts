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
              private userService: UserService) {}

  userInfo: Undefinable<IUser> = undefined;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      const userInfo = this.userService.getUserInfo(id).subscribe(userInfo => {
        this.userInfo = userInfo.data;
      });
    });
  }

  // TODO: User put method to change data

}
