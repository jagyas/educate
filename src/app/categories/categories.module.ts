import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { CATEGORIES_ROUTES } from './categories.routes';
import { CategoriesComponent } from './categories.component';

@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(CATEGORIES_ROUTES),
    MarkdownModule.forChild()
  ],
  exports: [MarkdownModule, RouterModule]
})
export class CategoriesModule { }
