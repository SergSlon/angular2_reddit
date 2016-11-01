export class Article {
  // votes - a number representing the sum of all upvotes, minus the downvotes
  votes: number;

  // link - a string holding the URL of the article
  title: string;

  // title - a string holding the title of the article
  link: string;

  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }

  voteUp(): void {
    this.votes += 1;
  }

  voteDown(): void {
    this.votes -= 1;
  }

  domain(): string {
    try {
      const link: string = this.link.split('//')[1];

      return link.split('/')[0];
    } catch (err) {
      return null;
    }
  }
}
