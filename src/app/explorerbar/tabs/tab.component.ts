import { Component, Input, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Tabs } from './tabs.component';

@Component({
    selector: 'tab',
    styleUrls: ['./tabs.style.css'],
    templateUrl: './tab.template.html',
})
export class Tab {

    isActive: boolean = false;
    @Input() tabTitle: string;
    @Input() tabIcon: string;

    constructor(tabs: Tabs) {
        tabs.addTab(this);
    }

    ngOnInit() {
        console.log('Tab::ngOnInit (' + this.tabTitle + '): ' this.isActive);
    }

    getIsActive() {
        console.log("Tab::getIsActive(" + this.tabTitle + ") = " + this.isActive);
        return this.isActive;        
    }
}