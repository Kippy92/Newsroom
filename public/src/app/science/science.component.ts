import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['../bootstrap.css']
})
export class ScienceComponent implements OnInit {
  news = [];
  constructor(private _newsservice: NewsService) { }

  ngOnInit() {
    this.getScienceNews();
  }

  getScienceNews(){
    let observable = this._newsservice.getScienceNews();
    observable.subscribe( data => {
      this.news = data['articles'];
      console.log(data);
    });
  }

}