import { CommonModule } from '@angular/common';
import {Component, Input} from '@angular/core';
import {IUser} from "../../../types/user.type";
import {IResource} from "../../../types/resource.type";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() items: IUser[];
}
