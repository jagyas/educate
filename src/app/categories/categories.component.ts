import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-stories',
  templateUrl: './categories.component.html',
  styles: []
})
export class CategoriesComponent implements OnInit, OnDestroy {

 private sub: Subscription;
 private post: string;
 constructor(private route: ActivatedRoute, private markdownService: MarkdownService) { }

 ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.markdownService.getSource('assets/blog/categories/' + params['category'] + '.md').subscribe(function (data: string) {
        const x = data.split('---').slice(2, 3);
        this.post = x[0];
      }.bind(this), function (errors) {
        console.log('DEBUG:E: RouteEvent Log area eight', errors);
        this.postdata = 'Error';
      }.bind(this));
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
