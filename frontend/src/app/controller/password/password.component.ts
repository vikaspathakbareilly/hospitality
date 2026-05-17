import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [CommonModule,  ReactiveFormsModule],
  templateUrl: './password.component.html',
  styleUrl: './password.component.css'
})
export class PasswordComponent {
@Input() label: string = '';
@Input() type:string=""
@Input() placeholder:string=""
  @Input() control!: FormControl;
  showPassword: boolean = false;
   togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
