import { Component, ViewEncapsulation,  ViewContainerRef } from '@angular/core';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.style.css'   
  ],  
  templateUrl: './app.template.html'
})
export class App   {

  constructor(public viewContainerRef:ViewContainerRef) {
    //this is needed
    viewContainerRef = viewContainerRef;
  }

  ngOnInit() {  
    console.log('App::ngOnInit');
  }
}
