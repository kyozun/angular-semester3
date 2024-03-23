import { Component } from '@angular/core';
import { NewsArticleThumbComponent } from './news-article-thumb/news-article-thumb.component';
import { NewsArticleAsideComponent } from './news-article-aside/news-article-aside.component';

@Component({
  selector: 'app-news-article',
  standalone: true,
  imports: [NewsArticleThumbComponent, NewsArticleAsideComponent],
  templateUrl: './news-article.component.html',
  styleUrl: './news-article.component.css'
})
export class NewsArticleComponent {

}
