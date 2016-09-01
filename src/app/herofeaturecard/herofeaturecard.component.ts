import { Component, Input} from '@angular/core';
import { AppState } from '../app.service';

import { HeroFeature } from '../models/herofeature';

@Component({
  selector: 'herofeaturecard',  // <herofeaturecard></herofeaturecard> 
  providers: [
  ],
  directives: [
  ],
  pipes: [],
  styleUrls: ['./herofeaturecard.style.css'],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './herofeaturecard.template.html'
})
export class HeroFeatureCard {
  @Input()
  heroFeature:HeroFeature;

  public alignment = 'right'
  
  constructor() {
    

  }

  ngOnInit() {
    console.log('Herofeaturecard::ngOnInit');
    console.log('this.heroFeature.type:' + this.heroFeature.type);
    if (this.heroFeature.type == 'Topic') {
      this.alignment == 'left';
    }
  }
}
