import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api'
import { TabMenuModule } from 'primeng/tabmenu'
import { TabViewModule } from 'primeng/tabview'
import { FormsModule } from '@angular/forms'
import { InputTextModule } from 'primeng/inputtext'
import { MultiSelectModule } from 'primeng/multiselect'
import { ButtonModule } from 'primeng/button'
import { ToastModule } from 'primeng/toast'
import { MenuModule } from 'primeng/menu'

interface City {
    name: string,
    code: string
}

@Component({
    selector: 'app-home-search',
    standalone: true,
    imports: [
        TabViewModule,
        FormsModule,
        InputTextModule,
        MultiSelectModule,
        ButtonModule,
        ToastModule,
        MenuModule,
    ],
    templateUrl: './home-search.component.html',
    styleUrl: './home-search.component.css',
})
export class HomeSearchComponent {
    tabs: { title: string; content: string }[] = []
    value: string | undefined
    cities!: City[]

    selectedCities!: City[]
    ngOnInit() {
        this.tabs = [
            { title: 'Nhà đất bán', content: 'Hello tab1' },
            { title: 'Nhà đất cho thuê', content: 'Tab 2 Content' },
            { title: 'Dự án', content: 'Tab 3 Content' },
        ]

        this.cities = [
            { name: 'Tất cả nhà đất', code: 'NY' },
            { name: 'Căn hộ chung cư', code: 'RM' },
            { name: 'Các loại nhà bán', code: 'LDN' },
            { name: 'Nhà riêng', code: 'IST' },
            { name: 'Nhà biệt thự, liền kề', code: 'PRS' },
        ]
    }
}
