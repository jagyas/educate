import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { HomepageModule } from './homepage/homepage.module';
import { StoriesRoutingModule } from './stories/stories-routing.module';




import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserModule.withServerTransition({appId: 'educate'}),
    BrowserAnimationsModule,
    HttpClientModule,
    HomepageModule,
    StoriesRoutingModule,
    RouterModule.forRoot([
      { path: '', redirectTo:'home', pathMatch: 'full'}
    ]),
    MarkdownModule.forRoot({
  loader: HttpClient, // optional, only if you use [src] attribute
  markedOptions: {
    provide: MarkedOptions,
    useValue: {
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
    },
  },
}),
    TransferHttpCacheModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
