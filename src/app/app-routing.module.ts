import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AboutComponent } from './components/about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { StoriesComponent } from './stories/stories.component';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: ':id', component: StoriesComponent, pathMatch: 'full'},
    // { path: 'about', component: AboutComponent },
    { path: '**', redirectTo: '/' },
];
@NgModule({
    declarations: [HomepageComponent, StoriesComponent],
    imports: [RouterModule.forRoot(routes), MarkdownModule.forChild()],
    exports: [RouterModule]
})
export class AppRoutingModule { }
