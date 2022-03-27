import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor{
    constructor(){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders:{
                // 'x-rapidapi-key':'',
                // 'x-rapidapi-host': ''
            },
            setParams:{
                key:'35f0b6f8d15f45f19063e13496e75d8b'
            }
        })
        return next.handle(req);
    }

}