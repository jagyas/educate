import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { StoriesComponent } from './stories.component';

import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

const routes: Routes = [
    { path: 'posts', component: StoriesComponent},
    { path: ':id', component: StoriesComponent, pathMatch: 'full'}
];

@NgModule({
    declarations: [StoriesComponent],
    imports: [RouterModule.forChild(routes), MarkdownModule.forChild()],
    exports: [RouterModule]
})
export class StoriesRoutingModule { }
