import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IResource} from "../../types/resource.type";

@Component({
  selector: 'app-resources-item',
  templateUrl: './resources-item.component.html',
  styleUrls: ['./resources-item.component.scss']
})
export class ResourcesItemComponent {
  @Input() resource: IResource;
}
