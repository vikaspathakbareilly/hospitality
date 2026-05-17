import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputtextComponent } from '../../controller/inputtext/inputtext.component';
import { EmailComponent } from '../../controller/email/email.component';
import { PasswordComponent } from '../../controller/password/password.component';
@Component({
  selector: 'app-signin',
  standalone: true,
    imports: [CommonModule, ReactiveFormsModule, InputtextComponent, EmailComponent, PasswordComponent],

  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {



 loginForm = new FormGroup({
email: new FormControl('', [

      Validators.required,

      Validators.email,

      Validators.minLength(5),

      Validators.maxLength(50),

      Validators.pattern(
        '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
      )

    ]),

    password: new FormControl('', [
      Validators.required
    ])
  });


   onSubmit() {

    console.log(this.loginForm.value);

   

  }


}
