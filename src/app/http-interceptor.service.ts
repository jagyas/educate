import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';


import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      console.log('Platform ID: ' + this.platformId);
      console.log('Request URL: ' + req.url);
    if (req.url.includes('./')) {
      return next.handle(req.clone({
        url: `https://dig2logic.com/${req.url.replace('./', '')}`
      }));
      console.log('Corrected URL: ' + req.url);
    }

    return next.handle(req);
  }
}