import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  news:Array<any>=[];
  url:string ="https://newsapi.org/v2/everything?q=apple&from=2023-01-12&to=2022-01-12&sortBy=popularity&apiKey=dc4b52abbbea4707858531c73b936b43"
  constructor(private httpClient: HttpClient){

  }

  ngOnInit() {
    this.getUsers().subscribe(data => {
      this.news = data.articles
      console.log(data);
    })
  }

  public getUsers(): Observable<any> { 
    return this.httpClient.get(this.url); 
   }
}
