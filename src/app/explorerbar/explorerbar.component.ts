import { Component, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tab, Tabs } from './tabs'

@Component({
  selector: 'explorerbar',
  directives: [Tab, Tabs],
  styleUrls: ['./explorerbar.style.css'],
  templateUrl: './explorerbar.template.html',
  host: {
    '(document:click)': 'handleClick($event)',
  },
})

export class Explorerbar {

  public filterQuery = '';
  public filteredList = [];

  //todo: move this to a Ng2 service that calls Drupal API
  public organizations = ['OCIO', 'DO', 'Test', 'ABC Organization'];



  constructor(public myElement: ElementRef) {

  }

  ngOnInit() {

    console.log('Explorerbar::ngOnInit');
  }

  filterAfterKeyUp() {
    if (this.filterQuery !== "") {
      this.filteredList = this.organizations.filter(function (el) {
       return (el.toLowerCase().substr(0,this.filterQuery.length) === this.filterQuery.toLowerCase()) == true;
      }.bind(this));
    } else {
      this.filteredList = [];
    }
  }

  select(item) {
    this.filterQuery = item;
    this.filteredList = [];
  }

  handleClick(event) {
    var clickedComponent = event.target;
    var inside = false;
    do {
      if (clickedComponent === this.myElement.nativeElement) {
        inside = true;
      }
      clickedComponent = clickedComponent.parentNode;
    } while (clickedComponent);
    if (!inside) {
      this.filteredList = [];
    }
  }

}
