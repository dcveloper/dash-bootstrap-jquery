import { Component } from '@angular/core';



@Component({
 
  selector: 'styleguide',  // <home></home>
 
  providers: [
    
  ],
 
  directives: [
    
  ],
 
  pipes: [ ],

  styleUrls: [ './styleguide.style.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './styleguide.template.html'
})
export class Styleguide {
  // Set our default values
  localState = { value: '' };
  // TypeScript public modifiers
  constructor() {

  }

  ngOnInit() {
    console.log('hello `styleguide` component');
    
  }


}
