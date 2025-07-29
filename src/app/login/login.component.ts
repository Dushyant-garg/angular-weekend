import { Component } from '@angular/core';
import { Users } from '../UserDummy';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  error = '';
  user: any;

  constructor(private router: Router, private userService: UserService) { }

  login() {
    console.log(this.email, this.password);

    this.userService.login(this.email, this.password).subscribe((data) => {
      console.log(data);
      if (data) {
        localStorage.setItem('access_token', JSON.stringify(data.accessToken));
        alert('Login successful!');
        this.userService.getUserProfile().subscribe((data) => {
          console.log(data);
          localStorage.setItem('user', JSON.stringify(data))
        })
        this.router.navigate(['/posts']);
      }
      else {
        this.error = 'Invalid email or password';
      }

    })

    // const user = Users.find(u => u.email === this.email && u.password === this.password);
    // if (user) {
    //   this.error = '';
    //   localStorage.setItem('user', JSON.stringify(user));
    //   alert('Login successful!');
    //   this.router.navigate(['/posts']);
    // } else {
    //   this.error = 'Invalid email or password';
    // }
  }
}
