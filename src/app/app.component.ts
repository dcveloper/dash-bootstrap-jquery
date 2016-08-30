/*
 * Angular 2 decorators and services
 */
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
  now: "Hello World!";
  name = 'Home Page';
 
  constructor(public viewContainerRef:ViewContainerRef) {
    viewContainerRef = viewContainerRef;
  }

  ngOnInit() {  

  }
