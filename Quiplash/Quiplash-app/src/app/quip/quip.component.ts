import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quip',
  templateUrl: './quip.component.html',
  styleUrls: ['./quip.component.css']
})
export class QuipComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  new_answers = [];
  old_answers = ["evan", "dana"];
  submitmessage = "";
  user_answer = "";
  user_name = ""

  addAnswer() {
    this.submitmessage = "Your answer has been submitted";
    this.new_answers.push({user: this.user_name, answer: this.user_answer, user_votes: 0});
    console.log(this.new_answers)
  }

}
