import { Component } from '@angular/core';
import { NewsCardsComponent } from './news-cards/news-cards.component';
import { NewsAsidesComponent } from './news-asides/news-asides.component';
import { NewsButtonComponent } from '../news-button/news-button.component';

@Component({
  selector: 'app-news-content',
  standalone: true,
  imports: [NewsCardsComponent, NewsAsidesComponent, NewsButtonComponent],
  templateUrl: './news-content.component.html',
  styleUrl: './news-content.component.css'
})
export class NewsContentComponent {

}
