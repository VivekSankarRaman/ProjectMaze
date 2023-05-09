import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { MazeComponent } from './components/maze/maze.component';
import { GameComponent } from './components/game/game.component';
import { ControlsComponent } from './components/controls/controls.component';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuccessComponent } from './components/success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    MazeComponent,
    GameComponent,
    ControlsComponent,
    SvgIconComponent,
    QuizComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
