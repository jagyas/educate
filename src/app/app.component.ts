import { Component, OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs';

declare var browser:any;
declare var breakpoints:any;
declare var navigator:any;
import '../assets/js/breakpoints.min.js';
import '../assets/js/browser.min.js';
import '../assets/js/util.js';

declare var $:any;

@Component({
  selector: 'app-educator',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    
    ngOnInit() {

    }
}
