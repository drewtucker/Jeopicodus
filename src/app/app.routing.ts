import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { QuestionScreenComponent } from './question-screen/question-screen.component';
import { DoubleJeopardyScreenComponent } from './double-jeopardy-screen/double-jeopardy-screen.component';
import { WinScreenComponent } from './win-screen/win-screen.component';

const appRoutes: Routes = [
{
  path: '',
  component: StartScreenComponent
},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
