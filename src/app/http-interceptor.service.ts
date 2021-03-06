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
    if (req.url.includes('./')) {
      // return next.handle(req.clone({
        // url: `https://dig2logic.com/${req.url.replace('./', '')}`
      // }));
    }
    return next.handle(req);
  }
}