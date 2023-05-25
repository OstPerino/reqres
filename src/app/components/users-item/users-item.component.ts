import {Component, Input} from '@angular/core';
import {IUser} from "../../../types/user.type";

@Component({
  selector: 'app-users-item',
  templateUrl: './users-item.component.html',
  styleUrls: ['./users-item.component.scss']
})
export class UsersItemComponent {
  @Input() user: IUser;
}
