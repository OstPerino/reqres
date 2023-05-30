import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {ResourceService} from "../../services/resource.service";
import {IUser} from "../../types/user.type";
import {IResource} from "../../types/resource.type";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  constructor(private userService: UserService,
              private resourceService: ResourceService) {
  }

  users: IUser[] = [];
  resources: IResource[] = [];

  ngOnInit(): void {
    this.userService.getAll().subscribe(users => {
      this.users = users.data;
    });
    this.resourceService.getAll().subscribe(resources => {
      this.resources = resources.data;
    })
  }
}
