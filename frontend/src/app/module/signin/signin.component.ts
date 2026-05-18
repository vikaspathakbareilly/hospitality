import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputtextComponent } from '../../controller/inputtext/inputtext.component';
import { EmailComponent } from '../../controller/email/email.component';
import { PasswordComponent } from '../../controller/password/password.component';
import { SharedService } from '../../services/shared.service';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-signin',
  standalone: true,
    imports: [CommonModule, ReactiveFormsModule, InputtextComponent, EmailComponent, PasswordComponent],

  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
private share=inject(SharedService)
private route=inject(Router)
private api=inject(ApiService)
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

let obj={
  "emailOrMobile": this.loginForm.value.email,
 
  "password": this.loginForm.value.password
}
    this.api.login(obj).subscribe((res:any)=>{

this.share.setToken(res.data.token)
this.route.navigate(["/dashboard"])

    })

   

  }


}
