import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { CATEGORIES_ROUTES } from './categories.routes';
import { CategoriesComponent } from './categories.component';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(CATEGORIES_ROUTES),
    MarkdownModule.forChild()
  ],
  exports: [RouterModule]
})
export class CategoriesModule { }
