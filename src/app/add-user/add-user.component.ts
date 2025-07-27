import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from '../UserDummy';

@Component({
  selector: 'app-add-user',
  imports: [FormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  user: any = {
    id: 0,
    firstName: '',
    lastName: '',
    gender: '',
    age: null,
    dob: '',
    phone: '',
    email: '',
    role: 'USER',
    password: ''
  };

  constructor(private router: Router) { }

  addUser() {
    this.user.id = Users.length + 1;
    Users.push(this.user);
    alert('User added successfully!');
    this.router.navigate(['/posts']);
  }
}
