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

}
