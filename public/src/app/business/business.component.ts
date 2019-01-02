import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['../bootstrap.css']
})
export class BusinessComponent implements OnInit {
  news = [];
  constructor(private _newsservice: NewsService) { }

  ngOnInit() {
    this.getBusinessNews();
  }

  getBusinessNews(){
    let observable = this._newsservice.getBusinessNews();
    observable.subscribe( data => {
      this.news = data['articles'];
      console.log(data);
    });
  }

}