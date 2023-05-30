import {Component, OnInit} from '@angular/core';
import {IUser} from "./types/user.type";
import {UserService} from "./services/user.service";
import {IResource} from "./types/resource.type";
import {ResourceService} from "./services/resource.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

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
