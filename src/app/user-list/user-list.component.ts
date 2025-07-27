import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Users } from '../UserDummy';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users = Users;

  deleteUser(index: number) {
    if (confirm("Are you sure you want to delete this user?")) {
      this.users.splice(index, 1);
      alert("User deleted successfully!");
    }
  }
  
}
