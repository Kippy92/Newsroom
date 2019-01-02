import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['../bootstrap.css']
})
export class EntertainmentComponent implements OnInit {
  news = [];
  constructor(private _newsservice: NewsService) { }

  ngOnInit() {
    this.getEntertainmentNews();
  }

  getEntertainmentNews(){
    let observable = this._newsservice.getEntertainmentNews();
    observable.subscribe( data => {
      this.news = data['articles'];
      console.log(data);
    });
  }

}
