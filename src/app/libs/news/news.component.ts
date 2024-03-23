import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { NewsArticleComponent } from './news-article/news-article.component'
import { NewsContentComponent } from './news-content/news-content.component'
import { NewsBreadcurmbComponent } from './news-breadcurmb/news-breadcurmb.component'
import { NewsHeadingComponent } from './news-heading/news-heading.component'

@Component({
    selector: 'app-news',
    standalone: true,
    imports: [NewsBreadcurmbComponent, RouterLink, NewsArticleComponent, NewsContentComponent, NewsHeadingComponent],
    templateUrl: './news.component.html',
    styleUrl: './news.component.css',
})
export class NewsComponent {}
