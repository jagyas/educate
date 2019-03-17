import { Routes } from '@angular/router';

import { HomepageComponent } from './homepage.component';
import { STORIES_ROUTES } from '../stories/stories.routes';
import { homepageRoutesNames } from './homepage.routes.names';
import { NotFoundComponent } from './page-not-found.component';

export const HOMEPAGE_ROUTES: Routes = [
    { path: '', component: HomepageComponent },
    { path: homepageRoutesNames.POSTS, children: STORIES_ROUTES },
    {path: 'page-not-found', component: NotFoundComponent},
    {path: '**', redirectTo: 'page-not-found'}
  ];
