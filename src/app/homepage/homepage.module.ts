import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MarkdownModule} from 'ngx-markdown';

import { HomepageComponent } from './homepage.component';
import { StoriesModule } from '../stories/stories.module';

@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    RouterModule,
    StoriesModule,
    MarkdownModule.forChild()
  ],
  exports: [MarkdownModule]
})
export class HomepageModule { }
