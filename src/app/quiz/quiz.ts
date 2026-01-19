import { Component } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Question {
  text: string;
  options: string[];
  correctAnswer: number; 

}

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule,RouterModule], 
  templateUrl: './quiz.html',
  styleUrl: './quiz.css',

})

export class Quiz {
  questions: Question[] = [

    {
      text: "When was the Addis Ababa agreement signed?",
      options: ["1956", "1965", "1972", "1955"],
      correctAnswer: 2,
    },
    {
      text: "Which region of Sudan has a predominantly non-Arab African Christian population?",
      options: ["South", "North"],
      correctAnswer: 0,
      
    },
    {
      text: "Which action most clearly demonstrates genocidal intent by the Rapid Support Forces (RSF) in Darfur?",
      options: ["Indiscriminate shelling of contested towns", "Blocking humanitarian aid routes during fighting", "Destruction of military infrastructure linked to the SPLM-N","Targeting civilians based on ethnicity at checkpoints and using racial slurs during killings"],
      correctAnswer: 3,
     
    },
    {
      text: "In the 2011,referendum, what percentage of southern voters chose independence for South Sudan?",
      options: ["nearly 80%", "nearly 99%", "nearly 100%", "nearly 75%", ],
      correctAnswer: 1,
      
    },
    {
      text: "Which country was accused in 2025 of providing financial and logistical support to the Rapid Support Forces (RSF)?",
      options: ["Ethiopia", "Iran", "UAE", "Egypt"],
      correctAnswer: 2,
  
    },
    {
      text: "What major reason did the U.S. give in 2025 for declaring RSF atrocities in Darfur as genocide?",
      options: ["Economic collapse", "systematic,ethnically targeted killings and sexual violence", "damage to oil fields", "border disputes with south sudan"],
      correctAnswer: 1,
    },
    {
      text: "What did satellite imagery from El Fashar in 2025 reveal during RSF takeover",
      options:["empty streets with no sign of conflict", "Large gatherings of civilians celebrating", "Clusters of objects consistent with human bodies across multiple locations", "SAF troops gaining ground"],
      correctAnswer: 2,
    }
  ];

  currentQuestionIndex = 0;
  selectedAnswerIndex: number | null = null;
  playerAnswers: (number | null)[] = [];
  score = 0;
  showResults = false;
  showAnswer= false;

  constructor(private router: Router){}

  selectAnswer(index: number) {
    this.selectedAnswerIndex = index;
  }
submitAnswer() {
  if (this.selectedAnswerIndex === null) return;

  
  if (!this.showAnswer) {
    this.playerAnswers[this.currentQuestionIndex] = this.selectedAnswerIndex;

    if (
      this.selectedAnswerIndex ===
      this.questions[this.currentQuestionIndex].correctAnswer
    ) {
      this.score++;
    }

    this.showAnswer = true;
    return;
  }

  
  if (this.currentQuestionIndex < this.questions.length - 1) {
    this.currentQuestionIndex++;
    this.selectedAnswerIndex = null;
    this.showAnswer = false;
  } else {
   
    this.router.navigate(['/result'], {
      state: { score: this.score }
    });
  }
}

}

