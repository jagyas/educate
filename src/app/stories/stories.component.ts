import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styles: []
})
export class StoriesComponent implements OnInit, OnDestroy {

 private sub: Subscription;
 post: string;
 constructor(private route: ActivatedRoute) { }

 ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.post = './assets/blog/posts/' +  params['id'] + '.md';
    });
 }

 ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
 }

}
