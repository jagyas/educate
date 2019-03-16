import { Routes } from '@angular/router';

import { HomepageComponent } from './homepage.component';
import { STORIES_ROUTES } from '../stories/stories.routes';
import { homepageRoutesNames } from './homepage.routes.names';

export const HOMEPAGE_ROUTES: Routes = [
    { path: '', component: HomepageComponent },
    { path: homepageRoutesNames.POSTS, children: STORIES_ROUTES },
  ];
