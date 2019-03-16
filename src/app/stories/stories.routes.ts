import { storiesRoutesNames } from './stories.routes.names';
import { StoriesComponent } from './stories.component';
import { Routes } from '@angular/router';

export const STORIES_ROUTES: Routes = [
    { path: '', component: StoriesComponent },
    { path: ':id', component: StoriesComponent}
  ];
