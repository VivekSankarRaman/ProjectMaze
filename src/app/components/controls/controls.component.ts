import { Component, Output, EventEmitter } from '@angular/core';
import { Direction } from 'src/app/models/core_types';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent {

  readonly directions = Direction;

  @Output() movePlayer = new EventEmitter<Direction>();


  moveUser(direction: Direction){
    this.movePlayer.emit(direction);
  }
}
