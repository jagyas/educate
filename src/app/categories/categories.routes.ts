import { CategoriesComponent } from './categories.component';
import { Routes } from '@angular/router';

export const CATEGORIES_ROUTES: Routes = [
  { path: '', component: CategoriesComponent },
  { path: ':story', loadChildren: 'app/stories/stories.module#StoriesModule' }
];
