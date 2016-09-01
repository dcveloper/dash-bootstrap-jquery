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
  
  //todo remove this
  public title: string = 'Workforce';
  public description: string = 'Learn about the insights gathered from this HR-cenetered topic area. Filter results further by organization and keywords to see how your organizations stacks up.';
  public buttonText: string = 'See the ';
  public dashboardType: string = ''; // either 'Dashboard' or 'Topic'

  constructor() {
    //set the button text to either 'See the Dashboard' or 'See the Topic' based on feature type
    this.buttonText += this.dashboardType;
    

  }

  ngOnInit() {
    console.log('Herofeaturecard::ngOnInit');
  }
}
