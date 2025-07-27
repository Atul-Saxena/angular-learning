import { Injectable } from '@angular/core';

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

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor() {}
  
  users = [
    {
      id: 1,
      firstName: 'Alice',
      lastName: 'Johnson',
      gender: 'female',
      age: 28,
      dob: '1996-02-14',
      phone: '555-1234',
      email: 'alice.johnson@example.com',
      role: 'admin',
      password: 'admin123',
    },
    {
      id: 2,
      firstName: 'Bob',
      lastName: 'Smith',
      gender: 'male',
      age: 30,
      dob: '1994-01-01',
      phone: '555-5678',
      email: 'bob.smith@example.com',
      role: 'user',
      password: 'user123',
    },
  ];

  getUsers() {
    return this.users;
  }

  getUserById(id: number) {
    return this.users.find(user => user.id === id);
  }

  loggedInUser: User | null = null;

  login(email: string, password: string) {
    const user = this.users.find(user => user.email === email && user.password === password);
    if (user) {
      this.loggedInUser = user;
      console.log(`User logged in: ${user.firstName} ${user.lastName}`);
      
      return { success: true, user };
    } else {
      console.log('Login failed: Invalid email or password');
      
      return { success: false, message: 'Invalid email or password' };
    }
  }

  isAdmin() {
    return this.loggedInUser && this.loggedInUser.role === 'admin';
  }

  isUser() {
    return this.loggedInUser && this.loggedInUser.role === 'user';
  }

}
