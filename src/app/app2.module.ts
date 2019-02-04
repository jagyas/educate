import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { App2Component } from './app2.component';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    App2Component
  ],
  imports: [
    CommonModule,
   RouterModule.forChild([
      { path: 'check2', component: App2Component}
    ]),
    MarkdownModule.forChild(),
  ],
  exports: [RouterModule],
  providers: []
})
export class AppModule2 { }
