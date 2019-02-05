import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoriesRoutingModule } from './stories-routing.module';
import { StoriesComponent } from './stories.component';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

@NgModule({
  declarations: [StoriesComponent],
  imports: [
    CommonModule,
    StoriesRoutingModule,
    MarkdownModule.forChild()
  ],
  exports: [StoriesComponent],
  entryComponents: [StoriesComponent]
})
export class StoriesModule { }
