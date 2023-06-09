import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent {
  @Input() content: string;
  @Output() clicked = new EventEmitter();

  onClick() {
    this.clicked.emit();
  }
}
