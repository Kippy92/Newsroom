import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['../bootstrap.css']
})
export class SearchComponent implements OnInit {

  news = [];
  info = [];
  constructor(private _newsservice: NewsService) { }

  ngOnInit() {
    this.getAllNews();
  }

  getAllNews(){
    let observable = this._newsservice.getNews();
    observable.subscribe( data => {
      this.news = data['articles'];
      console.log(data);
    });
  }

  getNews(query, from, to, sort){
    if (query == undefined){
      query = "";
    }
    let observable = this._newsservice.getThisNews(query, from, to, sort);
    observable.subscribe( data => {
      this.info = data['articles'];
      console.log(this.info);
    })
  }
}
