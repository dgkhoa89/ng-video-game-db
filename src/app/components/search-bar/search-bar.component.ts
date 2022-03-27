import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor(
    private router: Router,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.httpService.getGameList('sss','aaa');
  }
  onSubmit(form: NgForm) {
    this.router.navigate(['/search', form.value.search])
  }
}
