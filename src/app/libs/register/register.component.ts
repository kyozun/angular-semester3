import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button'
import { CheckboxModule } from 'primeng/checkbox'
import { InputTextModule } from 'primeng/inputtext'
import { RippleModule } from 'primeng/ripple'

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [ButtonModule, CheckboxModule, InputTextModule, RippleModule],
    templateUrl: './register.component.html',
    styleUrl: './register.component.css',
})
export class RegisterComponent {}
