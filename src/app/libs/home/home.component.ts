import { Component } from '@angular/core';
import { HomeSearchComponent } from '../../home-search/home-search.component'
import { HomeNewsComponent } from '../../home-news/home-news.component'
import { HomeRecomendationComponent } from '../../home-recomendation/home-recomendation.component'
import { BestRealEstateComponent } from '../../best-real-estate/best-real-estate.component'
import { RealEstateByLocationComponent } from '../../real-estate-by-location/real-estate-by-location.component'
import { RecommendationNewsComponent } from '../../recommendation-news/recommendation-news.component'
import { RelationCompanyComponent } from '../../relation-company/relation-company.component'
import { IntroComponent } from '../../intro/intro.component'

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        HomeSearchComponent,
        HomeNewsComponent,
        HomeRecomendationComponent,
        BestRealEstateComponent,
        RealEstateByLocationComponent,
        RecommendationNewsComponent,
        RelationCompanyComponent,
        IntroComponent,
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
})
export class HomeComponent {}
