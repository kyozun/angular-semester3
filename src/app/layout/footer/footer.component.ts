import { Component } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown'
import { FormsModule } from '@angular/forms'
import { FloatLabelModule } from 'primeng/floatlabel'
import { InputTextModule } from 'primeng/inputtext'
import { ButtonModule } from 'primeng/button'
import { InputGroupModule } from 'primeng/inputgroup'

interface City {
    name: string;
    code: string;
}

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [DropdownModule, FormsModule, FloatLabelModule, InputTextModule, ButtonModule, InputGroupModule],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css',
})
export class FooterComponent {
    cities: City[] | undefined

    selectedCity: City | undefined
    value: string | undefined

    ngOnInit() {
        this.cities = [
            { name: 'English', code: 'En' },
            { name: 'Tiếng Việt', code: 'Vi' },
        ]
    }
}
