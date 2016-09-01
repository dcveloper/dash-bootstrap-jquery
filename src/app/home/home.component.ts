import { Component } from '@angular/core';
import { AppState } from '../app.service';

import { HeroFeatureCard } from '../herofeaturecard'
import { HeroFeature } from '../models/herofeature';

@Component({
 
  selector: 'home',  // <home></home> 
  providers: [    
  ], 
  directives: [
    HeroFeatureCard
  ],  
  pipes: [ ],  
  styleUrls: [ './home.style.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './home.template.html'
})
export class Home {
  public dashboardHeroFeature : HeroFeature = new HeroFeature();
  public topicHeroFeature : HeroFeature = new HeroFeature();

  constructor() 
  {
    //todo get this from a service
    this.dashboardHeroFeature.title= 'Dashboard Feature Title';
    this.dashboardHeroFeature.description = ' Dashboard Feature Description';
    this.dashboardHeroFeature.type = 'Dashboard';

    this.topicHeroFeature.title= 'Topic Feature Title';
    this.topicHeroFeature.description = ' Topic Feature Description';
    this.topicHeroFeature.type = 'Topic';
  }

  ngOnInit() {
    console.log('Home::ngOnInit');
    
  }
}
