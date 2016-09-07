import { Component, Input, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tab } from './tab.component';

@Component({
    selector: 'tabs',
    styleUrls: ['./tabs.style.css'],
    templateUrl: './tabs.template.html',
})
export class Tabs {
    tabs: Tab[] = [];

    selectTab(tab: Tab) {
        this.tabs.forEach((tab) => {
            tab.isActive = false;             
        });

        tab.isActive = true; 
        console.log('Tabs::selectTab - ' + tab.tabTitle + ' is ' + tab.isActive);              
    }

    addTab(tab: Tab) {
        console.log('Tabs::addTab - ' + tab.tabTitle);
        
        if (this.tabs.length === 0) {
            tab.isActive = true;            
        }
        this.tabs.push(tab);
    }

    ngOnInit() {
        console.log('Tabs::ngOnInit');        
    }
}
