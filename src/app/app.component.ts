import { Component, Inject, AfterViewInit  } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { homepageRoutesNames } from './homepage/homepage.routes.names';

@Component({
  selector: 'app-educator',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  postsLink = `./${homepageRoutesNames.POSTS}`;
  constructor(@Inject(DOCUMENT) private _document) { }
  async ngAfterViewInit() {
    await this.loadScript('assets/js/jquery.min.js');
    await this.loadScript('assets/js/browser.min.js');
    await this.loadScript('assets/js/breakpoints.min.js');
    await this.loadScript('assets/js/util.js');
    await this.loadScript('assets/js/main1.js');
  }

  private loadScript(scriptUrl: string) {
    return new Promise((resolve, reject) => {
      const scriptElement = this._document.createElement('script');
      scriptElement.src = scriptUrl;
      scriptElement.onload = resolve;
      this._document.body.appendChild(scriptElement);
    });
  }
}
