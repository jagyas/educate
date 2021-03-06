import { Routes } from '@angular/router';

import { HomepageComponent } from './homepage.component';
import { NotFoundComponent } from './page-not-found.component';

export const HOMEPAGE_ROUTES: Routes = [
  { path: '', component: HomepageComponent },
  { path: ':id', loadChildren: 'app/categories/categories.module#CategoriesModule' },
  { path: 'page-not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'page-not-found' }
];
