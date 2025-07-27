import { Component } from '@angular/core';
import { Posts } from '../PostsDummy';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DateFormatPipe } from '../pipes/date-format.pipe';

@Component({
  selector: 'app-post-details',
  imports: [CommonModule, DateFormatPipe],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})
export class PostDetailsComponent {
  post: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.post = Posts.find(post => post.id === id);
  }
}
