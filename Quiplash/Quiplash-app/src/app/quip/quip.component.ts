import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quip',
  templateUrl: './quip.component.html',
  styleUrls: ['./quip.component.css']
})
export class QuipComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  new_answers = [{user: "Alden", answer: "Alden answer", user_votes: 0}];
  old_answers = [{name: "evan", answer: "this is my answer"}, {name: "Leah", answer: "Another answer"}];
  submitmessage = "";
  user_answer = "";
  user_name = ""
  success_message = ""
  voting_results = [{name: "evan", count: 0}, {name: "Leah", count: 1}]

  addAnswer() {
    this.submitmessage = "Your answer has been submitted";
    this.new_answers.push({user: this.user_name, answer: this.user_answer, user_votes: 0});
    this.success_message = "Answer successfully inputted!"
    console.log(this.new_answers)
  }

  voteForAnswer(username) {
    for (var i = 0; i < this.voting_results.length; i++) {
      if (this.voting_results[i].name == username) {
        this.voting_results[i].count += 1
      }
    }
    console.log(this.voting_results)
  }

}
