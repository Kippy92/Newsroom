import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['../bootstrap.css']
})
export class HealthComponent implements OnInit {
  news = [];
  constructor(private _newsservice: NewsService) { }

  ngOnInit() {
    this.getHealthNews();
  }

  getHealthNews(){
    let observable = this._newsservice.getHealthNews();
    observable.subscribe( data => {
      this.news = data['articles'];
      console.log(data);
    });
  }

}