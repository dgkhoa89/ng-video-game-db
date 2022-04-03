import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, forkJoin, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { APIResponse, Game } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getGameList(
    ordering: string,
    search?: string
  ): Observable<APIResponse<Game>> {
    let params = new HttpParams().set('ordering', ordering);
    if (search) {
      params = new HttpParams().set('ordering', ordering)
        .set('search', search);
    }
    return this.http.get<APIResponse<Game>>(environment.BASE_URL + '/games', { params: params });
  }

  getGameById(id: string): Observable<Game> {
    const baseUrl = environment.BASE_URL + '/games/' + id;
    const gameInfoRequest = this.http.get<Game>(environment.BASE_URL + '/games/' + id);
    // const gameTrailerRequest = this.http.get<Game>(environment.BASE_URL + '/games/' + id + '/movies');
    // const gameScreenshotRequest = this.http.get<Game>(environment.BASE_URL + '/games/' + id + '/screenshots');
    // return forkJoin({
    //   gameInfoRequest,
    //   gameTrailerRequest,
    //   gameScreenshotRequest
    // }).pipe(
    //   map((resp: any) => {
    //       return {
    //         ...
    //         resp['gameInforRequest'],
    //         screenShots: resp['gameScreenshotRequest']?.results,
    //         trailers: resp['gameTrailerRequest']?.results,
    //       }
    //   })
    // );
    console.log(gameInfoRequest);
    
    return gameInfoRequest
  }

}
