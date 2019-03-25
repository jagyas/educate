import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule} from 'ngx-markdown';

import { HomepageComponent } from './homepage.component';
import { NotFoundComponent } from './page-not-found.component';

@NgModule({
  declarations: [HomepageComponent, NotFoundComponent],
  imports: [
    CommonModule,
    MarkdownModule.forChild()
  ],
  exports: []
})
export class HomepageModule { }
