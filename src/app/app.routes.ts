import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { Quiz } from './quiz/quiz';
import { Result } from './result/result';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'homePage',
    pathMatch: 'full'
  },

  {
    path: 'homePage',
    component: HomePage
  },

  {
    path: 'quiz',
    component: Quiz
  },

  {
    path: 'result',
    component: Result
  }
];

