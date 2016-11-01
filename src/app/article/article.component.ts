import { Component, OnInit } from '@angular/core';
import { Article } from './article.model.ts';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host: {
    // This tells Angular that on the host element (the app-article tag)
    // we want to set the class attribute to have "row"
    class: 'row'
  }
})

export class ArticleComponent implements OnInit {
  article: Article;

  constructor() {
    this.article = new Article(
      'Angular 2',
      'http://angular.io',
      10);
  }

  voteUp(): boolean {
    this.article.votes += 1;
    return false;
  }

  voteDown(): boolean {
    this.article.votes -= 1;
    return false;
  }

  ngOnInit() {}
}
