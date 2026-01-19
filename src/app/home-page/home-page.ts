import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home-page',
  imports: [RouterModule, CommonModule],
  standalone: true,
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  constructor(private router: Router) {}

  startQuiz() {
    this.router.navigate(['quiz']);
  }

goHome() {
  window.location.href = '';
}

}
