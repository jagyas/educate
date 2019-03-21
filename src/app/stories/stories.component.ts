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
 postdata: any;
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
    this.markdownService.getSource('./assets/blog/posts/test3.md').subscribe(function (data: string) {
      
      let x = data.split('---').slice(2, 3);
      this.postdata = x[0];
      console.log('DEBUG: RouteEvent Log area seven' + x[0]);
    }.bind(this), function (errors) {

      console.log('DEBUG:E: RouteEvent Log area eight', errors);
      this.postdata = 'Error';

    }.bind(this));
 }

 ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
 }

}
