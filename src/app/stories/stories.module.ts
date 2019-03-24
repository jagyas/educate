import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { STORIES_ROUTES } from './stories.routes';
import { StoriesComponent } from './stories.component';

@NgModule({
  declarations: [StoriesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(STORIES_ROUTES),
    MarkdownModule.forChild()
  ],
  exports: []
})
export class StoriesModule { }
