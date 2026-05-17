import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputtextComponent } from '../../controller/inputtext/inputtext.component';
import { EmailComponent } from '../../controller/email/email.component';
import { PasswordComponent } from '../../controller/password/password.component';
import { DropdownComponent } from '../../controller/dropdown/dropdown.component';
@Component({
  selector: 'app-signup',
  standalone: true,
   imports: [ReactiveFormsModule, CommonModule, ReactiveFormsModule,DropdownComponent, InputtextComponent, EmailComponent, PasswordComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
dropDownData:any=[{id:0, name:"Male"}, {id:0, name:"Female"}]
 signupForm = new FormGroup({
   name: new FormControl('', [
      Validators.required
    ]),
    gender: new FormControl('', [Validators.required]),
   mobile: new FormControl('', [
      Validators.required
    ]),


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

    console.log(this.signupForm.value);

   

  }


}
