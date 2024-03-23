import { Component } from '@angular/core';
import { NewsAsidePopularComponent } from './news-aside-popular/news-aside-popular.component';
import { NewsAsideHotlocationsComponent } from './news-aside-hotlocations/news-aside-hotlocations.component';
import { NewsAsideBiglocationsComponent } from './news-aside-biglocations/news-aside-biglocations.component';

@Component({
  selector: 'app-news-asides',
  standalone: true,
  imports: [NewsAsidePopularComponent, NewsAsideHotlocationsComponent, NewsAsideBiglocationsComponent],
  templateUrl: './news-asides.component.html',
  styleUrl: './news-asides.component.css'
})
export class NewsAsidesComponent {

}
