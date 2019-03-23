import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MarkdownModule} from 'ngx-markdown';

import { HomepageComponent } from './homepage.component';
import { NotFoundComponent } from './page-not-found.component';
import { CategoriesModule } from '../categories/categories.module';

@NgModule({
  declarations: [HomepageComponent, NotFoundComponent],
  imports: [
    CommonModule,
    RouterModule,
    CategoriesModule,
    MarkdownModule.forChild()
  ],
  exports: [MarkdownModule]
})
export class HomepageModule { }
