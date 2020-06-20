import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppInterceptorService  implements HttpInterceptor{

  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    request.params.set('appid', '808885554400103a97cf49c31301320a');
    request.params.set('units', 'metric') ;
    return next.handle(request);
  }
}
