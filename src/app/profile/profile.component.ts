import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Users } from '../UserDummy';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  constructor(private route: ActivatedRoute) { }
  // user = JSON.parse(localStorage.getItem('user') || 'null');

  user: any;
  ngOnInit(): void {
    const id = Number(JSON.parse(localStorage.getItem('user') || 'null').id);
    this.user = Users.find(user=> user.id === id);
  }

  users = Users;

  onUpdateProfile(index: number) {
    this.users[index] = this.user;
    alert('Profile updated successfully!');
  }
}
