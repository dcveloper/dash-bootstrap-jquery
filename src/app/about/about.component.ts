import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'about',
  styleUrls: [ './about.style.css' ],
  templateUrl:'./about.template.html'
})

export class About {
  localState;
  constructor(public route: ActivatedRoute) {

  }

  ngOnInit() {

    console.log('hello `About` component');

  }

}
