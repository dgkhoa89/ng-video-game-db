import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Game } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }
  public game!: Game;
  public gameRating: number = 50;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:Params)=>{
      this.getGameById(params['game-id']);
    });
  }

  getGameById(id: string){
    this.httpService
    .getGameById(id)
    .subscribe((game:Game)=>{
      this.game = game;
      console.log(game);
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
