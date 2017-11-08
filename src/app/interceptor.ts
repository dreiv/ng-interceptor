import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class Interceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('intercepted request ... ');

    // Clone the request to add the new header.
    const authReq = req.clone({headers: req.headers.set('headerName', 'headerValue')});

    console.log('Sending request with new header now ...');

    // Send the newly created request
    return next.handle(authReq)
      .catch((error, caught) => {
        // Intercept the response error and show it to the console
        console.log('Error Occurred');
        console.log(error);

        // Return the error to the method that called it.
        return Observable.throw(error);
      });
  }
}
