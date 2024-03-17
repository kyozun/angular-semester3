import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ButtonModule } from 'primeng/button'
import { RouterLink } from '@angular/router'

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [NgOptimizedImage, ButtonModule, RouterLink],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
})
export class NavbarComponent {}
