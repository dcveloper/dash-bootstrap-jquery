import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'subscribe',                    // <subscribe></subscribe>
  styleUrls: [ './subscribe.style.css' ],   // Styling for this component
  templateUrl:'./subscribe.template.html'   // Template file for this component
})
export class Subscribe {
  
  constructor() {

  }

  ngOnInit() {
    console.log("Entering Subscribe::ngOnInit");
  }

}
