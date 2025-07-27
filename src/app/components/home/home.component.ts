import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
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

  constructor(private userService: UserServicesService) {
    this.role = this.userService.loggedInUser?.role || '';
  }
  ngOnInit() {
    this.userId = this.userService.loggedInUser?.id || null;
  }

}
