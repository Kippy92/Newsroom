import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-rechnology',
  templateUrl: './technology.component.html',
  styleUrls: ['../bootstrap.css']
})
export class TechnologyComponent implements OnInit {
  news = [];
  constructor(private _newsservice: NewsService) { }

  ngOnInit() {
    this.getTechnologyNews();
  }

  getTechnologyNews(){
    let observable = this._newsservice.getTechnologyNews();
    observable.subscribe( data => {
      this.news = data['articles'];
      console.log(data);
    });
  }

}