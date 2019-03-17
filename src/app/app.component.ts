import { Component, OnDestroy } from '@angular/core';
import { homepageRoutesNames } from './homepage/homepage.routes.names';

@Component({
  selector: 'app-educator',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  postsLink = `./${homepageRoutesNames.POSTS}`;
}
