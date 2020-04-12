import { Component, OnInit, Input } from '@angular/core';
import { QuipComponent } from '../quip/quip.component';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  old_answers = [];

  voteForAnswer() {
    
  }

}
