import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { QuestionScreenComponent } from './question-screen/question-screen.component';
import { DoubleJeopardyScreenComponent } from './double-jeopardy-screen/double-jeopardy-screen.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { WinScreenComponent } from './win-screen/win-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    QuestionScreenComponent,
    DoubleJeopardyScreenComponent,
    StartScreenComponent,
    WinScreenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
