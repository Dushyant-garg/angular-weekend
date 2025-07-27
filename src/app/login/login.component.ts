import { Component } from '@angular/core';
import { Users } from '../UserDummy';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';

  constructor(private router: Router) { }

  login() {
    const user = Users.find(u => u.email === this.email && u.password === this.password);
    if (user) {
      this.error = '';
      localStorage.setItem('user', JSON.stringify(user));
      alert('Login successful!');
      this.router.navigate(['/posts']);
    } else {
      this.error = 'Invalid email or password';
    }
  }
}
