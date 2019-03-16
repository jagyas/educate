import { Component, Inject, AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styles: []
})
export class HomepageComponent implements AfterViewInit {
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
