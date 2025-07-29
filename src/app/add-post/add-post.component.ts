import { Component } from '@angular/core';
import { Post } from '../models/post';
import { Router } from '@angular/router';
import { Posts } from '../PostsDummy';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  imports: [FormsModule],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent {
  post: Post = {
    id: 0,
    title: '',
    content: '',
    authorId: 1,
    createdAt: ''
  };

  constructor(private router: Router) { }

  addPost() {
    const user = JSON.parse(localStorage.getItem('user') || 'null'); 
    this.post.id = Posts.length + 1;
    this.post.authorId = user.id;
    this.post.createdAt = new Date().toISOString();
    Posts.push({ ...this.post });
    alert('Post added successfully!');
    this.router.navigate(['/posts']);
  }
}
