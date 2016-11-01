import { Component, OnInit, Input } from '@angular/core';
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
  @Input() article: Article;

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

  ngOnInit() {}
}
