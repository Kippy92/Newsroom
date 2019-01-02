import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['../bootstrap.css']
})
export class AllComponent implements OnInit {
  news = [];
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

}
