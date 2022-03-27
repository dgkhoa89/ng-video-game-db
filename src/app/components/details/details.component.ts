import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Game } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(
    //to call api
    private httpService: HttpService,
    //provide api of route
    private activatedRoute: ActivatedRoute,
    router: Router
  ) { }
  public game: Game={
    id: '',
    background_image: '',
    name: '',
    release: '',
    metacritic_url: '',
    website: '',
    description: '',
    metacritic: 0,
    genres: [],
    parent_platforms: [],
    publishers: [],
    ratings: [],
    screenshots: [],
    trailers: []
  };
  public gameRating: number = 50;
  public gameId!: string;
   routeSub! : Subscription;
   gameSub! : Subscription;

  ngOnInit(): void {
    this.routeSub=this.activatedRoute.params.subscribe((params:Params)=>{
      this.gameId = params['game-id']
      this.getGameById(this.gameId);
    });
  }

  getGameById(id: string){
    this.gameSub = this.httpService
    .getGameById(id)
    .subscribe((gameResp:Game)=>{
      
      this.game = gameResp;
      console.log(gameResp);
      setTimeout(() => {
        this.gameRating = this.game.metacritic;
      }, 500);
    });
  }

  getColor(value: number):string{
    let color= '';
    if(value>75){
      color = '#5ee432';
    }else if (value > 50){
      color = '#fffa50'
    }else if (value > 30){
      color= '#f7aa38';
    }else{
      color= '#ef4655';
    }
    return color;
  }

}
