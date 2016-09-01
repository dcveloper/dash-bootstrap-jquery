import { Component, Input} from '@angular/core';
import { AppState } from '../app.service';

@Component({
  selector: 'introcard',  // <introcard></introcard> 
  providers: [
  ],
  directives: [
  ],
  pipes: [],
  styleUrls: ['./introcard.style.css'],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './introcard.template.html'
})
export class IntroCard {
  
  constructor() {

  }

  ngOnInit() {
    console.log('IntroCard::ngOnInit');
  }
}
