import { Component } from '@angular/core';
import { UserServicesService } from '../../services/user-services.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

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
  selector: 'app-user-profile',
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  user:User | null = null;
  userId: string | null = null;
  
  constructor(private userService: UserServicesService,private route:ActivatedRoute){
    this.userId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    const foundUser = this.userService.getUserById(Number(this.userId));
    this.user = foundUser !== undefined ? foundUser : null;
  }
}
