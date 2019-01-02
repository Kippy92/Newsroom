import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./bootstrap.css']
})
export class AppComponent implements OnInit {
  title = 'The News Room';
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