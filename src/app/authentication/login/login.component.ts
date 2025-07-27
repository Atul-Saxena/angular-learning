import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule,Validators } from '@angular/forms';
import { UserServicesService } from '../../services/user-services.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm;

  constructor(private formbbuilder: FormBuilder,private userService: UserServicesService, private router: Router) { 
    this.loginForm = this.formbbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.value.email??'', this.loginForm.value.password??'');
      this.router.navigate(['/home']);
    } else {
      console.log('Form is invalid');
    }
  }

}
