import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { NotFoundComponent } from './homepage/page-not-found.component';

export const MAIN_ROUTES: Routes = [
  { path: '', component: HomepageComponent },
  { path: ':category', loadChildren: 'app/categories/categories.module#CategoriesModule' },
  { path: 'page-not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'page-not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(MAIN_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
