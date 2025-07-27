import { Component } from '@angular/core';
import { UserServicesService } from '../../services/user-services.service';
import { CommonModule } from '@angular/common';

interface User {
  id: number,
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
  selector: 'app-user-list',
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users:User[]|null = null;

  constructor(private userService: UserServicesService){}

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

}
