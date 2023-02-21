import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Injectable} from "@angular/core";
import {RouterService} from "../service/router/router.service";
import {environment} from "../../environments/environment";

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {

  constructor(private routerService: RouterService) {}

  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const request = req.clone({
      headers: new HttpHeaders({
        'AccessKey': environment.accessKey
      })
    });
    return next.handle(request).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse) {
          switch (error.status) {
            case 401:
              this.routerService.routeToErrorPage(`401 Error. ${error?.error?.Message}`);
              break;
            case 403:
              this.routerService.routeToErrorPage(`403 Error. ${error?.error?.Message}`);
              break;
            case 500:
              this.routerService.routeToErrorPage(`500 Server Error. ${error?.error?.Message}`);
              break;
            default:
              this.routerService.routeToErrorPage('An error occurred.')
          }
        }
        return throwError(error.message);
      })
    )
  }

}
