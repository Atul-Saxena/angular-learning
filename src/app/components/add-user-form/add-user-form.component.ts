import { Component } from '@angular/core';
import { UserServicesService } from '../../services/user-services.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface User {
  firstName: string,
  lastName: string,
  gender: string,
  age: number,
  dob: string,
  phone: string,
  email: string,
  role: string,
  password: string
}

@Component({
  selector: 'app-add-user-form',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './add-user-form.component.html',
  styleUrl: './add-user-form.component.css'
})
export class AddUserFormComponent {
  createUserForm;

  newUser: User | null = null

  constructor(private userService: UserServicesService,private formBuilder: FormBuilder) {
    this.createUserForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      gender: ['', [Validators.required, Validators.minLength(2)]],
      age: ['', [Validators.required, Validators.minLength(2)]],
      dob: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.minLength(2)]],
      role: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(2)]],
    })
  }

  onSubmit() {
    if (this.createUserForm.valid) {
      this.newUser = {
      id: 0,
      ...this.createUserForm.value,
      age: Number(this.createUserForm.value.age),
    } as User;
    this.userService.addUser(this.newUser);
      console.log('User created:', this.createUserForm.value);
      
    } else {
      console.log('Form is invalid');
    }
  }
}