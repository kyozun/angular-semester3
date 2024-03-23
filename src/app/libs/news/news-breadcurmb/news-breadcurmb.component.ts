import { Component } from '@angular/core'
import { MenuItem } from 'primeng/api'
import { BreadcrumbModule } from 'primeng/breadcrumb'

@Component({
    selector: 'app-news-breadcurmb',
    standalone: true,
    imports: [BreadcrumbModule],
    templateUrl: './news-breadcurmb.component.html',
    styleUrl: './news-breadcurmb.component.css',
})
export class NewsBreadcurmbComponent {
    items: MenuItem[] | undefined

    home: MenuItem | undefined

    ngOnInit() {
        this.items = [{ label: 'Tin tức' }]

        this.home = { icon: 'pi pi-home', routerLink: '/' }
    }
}
