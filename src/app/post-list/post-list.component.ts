import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DateFormatPipe } from '../pipes/date-format.pipe';
import { Posts } from '../PostsDummy';
import { RouterLink } from '@angular/router';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-list',
  imports: [CommonModule, DateFormatPipe, RouterLink],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  posts: Post[] = Posts;
  filteredPosts: Post[] = Posts;
  showOnlyMyPosts: boolean = false;

  toggleFilter() {
    this.showOnlyMyPosts = !this.showOnlyMyPosts;
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    if (this.showOnlyMyPosts) {
      this.filteredPosts = this.posts.filter(post => post.authorld === user?.id);
      console.log(this.filteredPosts);
      
    } else {
      this.filteredPosts = [...this.posts];
    }
  }
}
