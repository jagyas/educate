import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

import { StoriesComponent } from './stories.component';

@NgModule({
  declarations: [StoriesComponent],
  imports: [
    CommonModule,
    RouterModule,
    MarkdownModule.forChild()
  ],
  exports: [MarkdownModule]
})
export class StoriesModule { }
