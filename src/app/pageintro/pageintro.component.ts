import { Component, Input} from '@angular/core';
import { AppState } from '../app.service';

@Component({
  selector: 'pageintro',  // <pageintro></pageintro>
  providers: [
  ],
  directives: [
  ],
  pipes: [],
  styleUrls: ['./pageintro.style.css'],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './pageintro.template.html'
})
export class PageIntro {

  constructor() {

  }

  ngOnInit() {
    console.log('PageIntro::ngOnInit');
  }
}
