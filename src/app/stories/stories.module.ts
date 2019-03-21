import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { STORIES_ROUTES } from './stories.routes';
import { StoriesComponent } from './stories.component';

@NgModule({
  declarations: [StoriesComponent],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(STORIES_ROUTES),
    MarkdownModule.forChild()
  ],
  exports: [MarkdownModule]
})
export class StoriesModule { }
