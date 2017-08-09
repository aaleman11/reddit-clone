import { Component, OnInit, HostBinding } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
    @HostBinding('attr.class') cssClass = 'row';
    
    article: Article;
    
//    votes: number;
//    title: string;
//    link: string;

    constructor() {
        
        this.article = new Article('Ang 2', 'http://angular.io', 10)
        
//      this.title = 'Ang 2';
//      this.link = 'http://angular.io';
//      this.votes = 10;
  
    }
    
    voteUp(): boolean {
//        this.votes += 1;
        this.article.votes += 1;
        return false;
    }
    
    voteDown(): boolean {
//        this.votes -= 1;
        this.article.votes -= 1;
        return false;
    }

    ngOnInit() {
    }

}
