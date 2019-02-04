import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { App3Component } from './app3.component';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    App3Component
  ],
  imports: [
    CommonModule,
   RouterModule.forChild([
      { path: 'check1', component: App3Component}
    ]),
    MarkdownModule.forChild(),
  ],
  exports: [RouterModule],
  providers: []
})
export class AppModule3 { }
