import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styles: []
})
export class StoriesComponent implements OnInit, OnDestroy {

 private sub: Subscription;
 post: string;
 constructor(private route: ActivatedRoute, private markdownService: MarkdownService) { }

 ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.post = './assets/blog/posts/' +  params['id'] + '.md';
    });
    this.markdownService.renderer.heading = (text: string, level: number) => {
      const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
      return '<header class="main">' + '<h' + level + '>' + text + '</h' + level + '>' + '</header>';
    };
    this.markdownService.renderer.image = (href: string, title: string, text: string) => {
      const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
      return '<span class="image main"> <img src="' + href + '" title="' + title + '" alt="' + text + '" /> </span>';
    };
 }

 ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
 }

}
