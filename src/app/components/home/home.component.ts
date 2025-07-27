import { Component } from '@angular/core';
import { RouterLink,Router } from '@angular/router';
import { UserServicesService } from '../../services/user-services.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterLink,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  role: string | null = null;
  userId: number | null = null;

  constructor(private userService: UserServicesService, private router: Router) {
    this.role = this.userService.loggedInUser?.role || '';
  }
  ngOnInit() {
    this.userId = this.userService.loggedInUser?.id || null;
  }

  logOutUser(){
    this.userService.logout();
    this.router.navigate(['/']);
    console.log('User logged out');
  }

  addUser(){
    
  }

}
