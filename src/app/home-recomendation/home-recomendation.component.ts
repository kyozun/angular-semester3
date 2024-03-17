import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button'

@Component({
    selector: 'app-home-recomendation',
    standalone: true,
    imports: [ButtonModule],
    templateUrl: './home-recomendation.component.html',
    styleUrl: './home-recomendation.component.css',
})
export class HomeRecomendationComponent {}
