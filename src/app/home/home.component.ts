import { Component } from '@angular/core';
import { AppState } from '../app.service';

@Component({
 
  selector: 'home',  // <home></home> 
  providers: [    
  ], 
  directives: [
  ],  
  pipes: [ ],  
  styleUrls: [ './home.style.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './home.template.html'
})
export class Home {
  
  constructor() 
  {

  }

  ngOnInit() {
    console.log('Home::ngOnInit');
    
  }
}
