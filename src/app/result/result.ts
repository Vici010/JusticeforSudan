import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  standalone: true,
  templateUrl: './result.html',
  styleUrls: ['./result.css'],
})
export class Result {
  score = 0;
  total = 7;
  message = '';

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.score = nav?.extras.state?.['score'] ?? 0;

    this.setMessage();
  }

  setMessage() {
    if (this.score >= 1 && this.score <= 2) {
      this.message =
        'You’re just starting to learn about the crisis in Sudan. Take time to read more, stay informed, and consider donating to support those affected.';
    } else if (this.score >= 3 && this.score <= 4) {
      this.message =
        'You have a basic understanding of the crisis in Sudan. Deepening your knowledge and supporting humanitarian aid can make a real difference.';
    } else if (this.score >= 5 && this.score <= 6) {
      this.message =
        'You have a strong understanding of the crisis in Sudan. Use what you’ve learned to raise awareness and support relief efforts through donation.';
    } else if (this.score === 7) {
      this.message =
        'Excellent work! You understand the key facts about the crisis in Sudan. Use your knowledge to stay informed, speak up, and support those affected.';
    }
  }
}

