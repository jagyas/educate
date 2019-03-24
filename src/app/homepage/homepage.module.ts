import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MarkdownModule} from 'ngx-markdown';

import { HomepageComponent } from './homepage.component';
import { NotFoundComponent } from './page-not-found.component';

@NgModule({
  declarations: [HomepageComponent, NotFoundComponent],
  imports: [
    CommonModule,
    RouterModule,
    MarkdownModule.forChild()
  ],
  exports: []
})
export class HomepageModule { }
