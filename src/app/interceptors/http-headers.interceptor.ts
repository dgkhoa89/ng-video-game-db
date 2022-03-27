import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor{
    constructor(){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders:{
                'x-rapidapi-key':'eedc209bb8msh0257890f073ad40p1855a7jsn5ae9b9527270',
                'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com'
            },
            setParams:{
                key: ''
            }
        })
        return next.handle(req);
    }

}