import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { CATEGORIES_ROUTES } from './categories.routes';
import { CategoriesComponent } from './categories.component';

@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(CATEGORIES_ROUTES),
    MarkdownModule.forChild()
  ],
  exports: []
})
export class CategoriesModule { }
