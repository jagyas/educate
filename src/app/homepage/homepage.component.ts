import { Component, Renderer2, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styles: []
})
export class HomepageComponent implements AfterViewInit {
  constructor(private _renderer2: Renderer2, @Inject(DOCUMENT) private _document) { }
  async ngAfterViewInit() {
    await this.loadScript("assets/js/jquery.min.js");
    await this.loadScript("assets/js/browser.min.js");
    await this.loadScript("assets/js/breakpoints.min.js");
    await this.loadScript("assets/js/util.js");
    await this.loadScript("assets/js/main1.js");
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
