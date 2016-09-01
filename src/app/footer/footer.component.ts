import { Component } from '@angular/core';

@Component({ 
  selector: 'app-footer',  // <app-footer></app-footer>  
  styleUrls: [ './footer.style.css' ],
  templateUrl: './footer.template.html'
})
export class AppFooter {

  constructor() {

  }

  ngOnInit() {
    console.log('Footer::ngOnInit');
    
  }

}
