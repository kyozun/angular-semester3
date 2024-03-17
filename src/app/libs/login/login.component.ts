import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'
import { InputTextModule } from 'primeng/inputtext'
import { ButtonModule } from 'primeng/button'
import { CheckboxModule } from 'primeng/checkbox'
import { RippleModule } from 'primeng/ripple'

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [RouterLink, InputTextModule, ButtonModule, CheckboxModule, RippleModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
})
export class LoginComponent {}
