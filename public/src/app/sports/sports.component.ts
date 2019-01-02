import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['../bootstrap.css']
})
export class SportsComponent implements OnInit {
  news = [];
  constructor(private _newsservice: NewsService) { }

  ngOnInit() {
    this.getSportsNews();
  }

  getSportsNews(){
    let observable = this._newsservice.getSportsNews();
    observable.subscribe( data => {
      this.news = data['articles'];
      console.log(data);
    });
  }

}