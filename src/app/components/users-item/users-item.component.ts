import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IUser} from "../../types/user.type";
import {Router} from "@angular/router";

@Component({
  selector: 'app-users-item',
  templateUrl: './users-item.component.html',
  styleUrls: ['./users-item.component.scss']
})
export class UsersItemComponent {
  constructor(private router: Router) {
  }

  @Input() user: IUser;
  @Output() clicked = new EventEmitter();

  async goToUserPage() {
    await this.router.navigate([`/user/${this.user.id}`]);
  }

  emitDeleting(userId: number | string) {
    this.clicked.emit(userId);
  }
}
