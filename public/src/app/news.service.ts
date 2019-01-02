import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private _http: HttpClient) { }


  getNews(){
    return this._http.get( 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=f25945f4148e45d887e475c2a37c7812');
  }

  getBusinessNews(){
    return this._http.get( 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' + 'category=business&' +
    'apiKey=f25945f4148e45d887e475c2a37c7812');
  }

  getEntertainmentNews(){
    return this._http.get( 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' + 'category=entertainment&' +
    'apiKey=f25945f4148e45d887e475c2a37c7812');
  }

  getHealthNews(){
    return this._http.get( 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' + 'category=health&' +
    'apiKey=f25945f4148e45d887e475c2a37c7812');
  }

  getScienceNews(){
    return this._http.get( 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' + 'category=science&' +
    'apiKey=f25945f4148e45d887e475c2a37c7812');
  }

  getSportsNews(){
    return this._http.get( 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' + 'category=sports&' +
    'apiKey=f25945f4148e45d887e475c2a37c7812');
  }

  getTechnologyNews(){
    return this._http.get( 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' + 'category=technology&' +
    'apiKey=f25945f4148e45d887e475c2a37c7812');
  }

  getThisNews(query, from, to, sort){
    return this._http.get( `https://newsapi.org/v2/everything?q=${query}&from=${from}&to=${to}&sortBy=${sort}&apiKey=f25945f4148e45d887e475c2a37c7812`)
  }
}
