import { Component, Renderer2, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styles: []
})
export class HomepageComponent implements AfterViewInit {
    constructor(private _renderer2: Renderer2, @Inject(DOCUMENT) private _document) { }
    // @ViewChild('content') content;
    ngAfterViewInit() {
        console.log('AfterViewInit');
        let s = this._renderer2.createElement('script');
            s.src = `assets/js/jquery.min.js`;
            this._renderer2.appendChild(this._document.head, s);
        let s1 = this._renderer2.createElement('script');
            s1.src = `assets/js/browser.min.js`;
            this._renderer2.appendChild(this._document.head, s1);
        let s2 = this._renderer2.createElement('script');
            s2.src = `assets/js/breakpoints.min.js`;
            this._renderer2.appendChild(this._document.head, s2);
        let s3 = this._renderer2.createElement('script');
            s3.src = `assets/js/util.js`;
            this._renderer2.appendChild(this._document.head, s3);
        let s4 = this._renderer2.createElement('script');
            s4.src = `assets/js/main1.js`;
            this._renderer2.appendChild(this._document.head, s4);
    }
}
