import { Routes } from '@angular/router';

import { HomepageComponent } from './homepage.component';
// import { CATEGORIES_ROUTES } from '../categories/categories.routes';
import { homepageRoutesNames } from './homepage.routes.names';
import { NotFoundComponent } from './page-not-found.component';
import { CategoriesComponent } from '../categories/categories.component';

export const HOMEPAGE_ROUTES: Routes = [
  { path: '', component: HomepageComponent },
  // { path: ':id', loadChildren: 'app/categories/categories.module#CategoriesModule' },
  { path: ':id', component: CategoriesComponent },
  { path: 'page-not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'page-not-found' }
];
