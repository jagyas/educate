import { categoriesRoutesNames } from './categories.routes.names';
import { CategoriesComponent } from './categories.component';
import { STORIES_ROUTES } from '../stories/stories.routes';
import { Routes } from '@angular/router';

export const CATEGORIES_ROUTES: Routes = [
  { path: '', component: CategoriesComponent },
  //{ path: ':id1', loadChildren: 'app/stories/stories.module#StoriesModule' }
];
