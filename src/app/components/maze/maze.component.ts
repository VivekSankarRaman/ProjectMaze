import { Component, Input } from '@angular/core';
import { Position, TileConfig } from 'src/app/models/maze';

@Component({
  selector: 'app-maze',
  templateUrl: './maze.component.html',
  styleUrls: ['./maze.component.css']
})
export class MazeComponent {
  

  @Input() mazeGrid?: TileConfig[][];

  @Input() userPosition?: Position;

  @Input() finish?: Position;

}
