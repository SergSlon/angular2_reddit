import { Component, OnInit } from '@angular/core';

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
  // votes - a number representing the sum of all upvotes, minus the downvotes
  votes: number;

  // link - a string holding the URL of the article
  title: string;

  // title - a string holding the title of the article
  link: string;

  constructor() {
    this.title = 'Angular 2';
    this.link = 'http://angular.io';
    this.votes = 10;
  }

  voteUp() {
    this.votes += 1;

    return false;
  }

  voteDown() {
    this.votes -= 1;

    return false;
  }

  ngOnInit() {}
}
