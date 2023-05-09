import { Component } from '@angular/core';
import { MAZE_GRID } from 'src/app/data/maze';
import { Direction } from 'src/app/models/core_types';
import { Position, TileConfig } from 'src/app/models/maze';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent {
  mazeConfig = MAZE_GRID;

  readonly startPostion: Position = [0, 0];
  readonly finishPosition: Position = [9, 9];

  currentPosition: Position = [...this.startPostion];
  currentTile: TileConfig =
    this.mazeConfig[this.currentPosition[0]][this.currentPosition[1]];
  showSuccess: boolean = false;

  /**
   * onQuizComplete
   * desc: handler for quiz completion event. marks isComplete field of the puzzle as true
   * @returns void
   */
  onQuizComplete() {
    const currentTile = { ...this.currentTile };
    if (!currentTile.puzzle) return;
    currentTile.puzzle.isComplete = true;
    this.currentTile = { ...currentTile };
    const [x,y]  =this.currentPosition;
    const mazeConfig = [...this.mazeConfig];
    mazeConfig[x][y] = currentTile;
    this.mazeConfig = [...mazeConfig];
  }

  /**
   * onMovePlayer
   * desc - handler for movePlayer event. Updates the current position of player
   * @param direction - direction to move
   * @returns void
   */
  onMovePlayer(direction: Direction) {
    const [x, y] = this.currentPosition;
    if(this.isGameComplete()) return;
    const newPosition = this.computeNextPosition(direction);
    this.currentPosition = [...newPosition];
    this.currentTile = this.mazeConfig[newPosition[0]][newPosition[1]];
    if(this.isGameComplete()) this.showSuccess = true;
  }

  /**
   * computeNextPosition
   * @param direction - direction to move
   * @returns next position
   */
  computeNextPosition(direction: Direction): Position{
    const [x,y] = this.currentPosition;
    if (this.currentTile.boundaries[direction]) return [x,y];
    let newPosition: Position;
    switch (direction) {
      case Direction.LEFT:
        newPosition = [x, y-1];
        break;

      case Direction.RIGHT:
        newPosition = [x, y+1];
        break;

      case Direction.UP:
        newPosition = [x-1, y];
        break;

      case Direction.DOWN:
        newPosition = [x+1, y];
        break;
    }
    return newPosition;
  }

  /**
   * isGameComplete
   * desc - returns if game is complete or not
   * @returns boolean
   */
  isGameComplete():  boolean{
    return (this.currentPosition[0] === this.finishPosition[0]) 
    && (this.currentPosition[1] === this.finishPosition[1]); 
  }

}

