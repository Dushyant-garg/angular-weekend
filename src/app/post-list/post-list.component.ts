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
  // posts: Post[] = Posts;
  // filteredPosts: Post[] = Posts;
  // showOnlyMyPosts: boolean = false;

  // toggleFilter() {
  //   this.showOnlyMyPosts = !this.showOnlyMyPosts;
  //   const user = JSON.parse(localStorage.getItem('user') || 'null');
  //   if (this.showOnlyMyPosts) {
  //     this.filteredPosts = this.posts.filter(post => post.authorId === user?.id);
  //     console.log(this.filteredPosts);

  //   } else {
  //     this.filteredPosts = [...this.posts];
  //   }
  // }

  durationOptions = [
    { label: 'All', value: 'all' },
    { label: '< 1 week', value: '<1' },
    { label: '1–4 weeks', value: '1-4' },
    { label: '1–3 Months', value: '1-3m' },
    { label: '3–6 Months', value: '3-6m' },
    { label: '6–12 Months', value: '6-12m' },
  ];

  ratingOptions = [
    { value: 0, label: 'All', stars: [] },
    { value: 4.5, label: '4.5 & up', stars: [1, 1, 1, 1, 0.5] },
    { value: 4, label: '4 & up', stars: [1, 1, 1, 1, 0] },
    { value: 3.5, label: '3.5 & up', stars: [1, 1, 1, 0.5, 0] },
    { value: 3, label: '3 & up', stars: [1, 1, 1, 0, 0] }
  ];

  publishedDateOptions = [
    { label: 'All', value: 'all' },
    { label: 'This week', value: 'thisWeek' },
    { label: 'This Month', value: 'thisMonth' },
    { label: 'Last 6 Months', value: 'last6Months' },
    { label: 'This year', value: 'thisYear' },
  ];

  levelOptions = [
    { label: 'All', value: '' },
    { label: 'Beginner', value: 'Beginner' },
    { label: 'Intermediate', value: 'Intermediate' },
    { label: 'Advanced', value: 'Advanced' }
  ];

<div class="course-details-container" *ngIf="course">
  <app-breadcrumb [breadcrumbs]="[
    { label: 'Home', link: '/' },
    { label: course?.category, link: '/category/' + course?.category },
    { label: course?.title }
  ]"></app-breadcrumb>

  <div class="course-header">
    <h1 class="title">{{ course.title }}</h1>
    <p class="tagline">{{ course.tagline }}</p>
    <p class="creator">Created by <strong>{{ course.createdBy }}</strong></p>

    <div class="actions">
      <button class="enroll-btn" (click)="enroll()">Enroll Now</button>
      <p class="students">{{ course.enrolledStudents }} students enrolled</p>
    </div>
  </div>
</div>
.course-details-container {
  padding: 2rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
}

.course-header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
}

.tagline {
  font-size: 1.2rem;
  color: #666;
}

.creator {
  font-size: 0.95rem;
  color: #444;
}

.actions {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 1rem;
}

.enroll-btn {
  padding: 0.7rem 1.5rem;
  background-color: #007bff;
  border: none;
  color: white;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.enroll-btn:hover {
  background-color: #0056b3;
}

.students {
  font-size: 0.95rem;
  color: #444;
}
course: any;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    const courseId = this.route.snapshot.paramMap.get('id');
    this.courseService.getCourseById(courseId).subscribe((data) => {
      this.course = data;
    });
  }

  enroll(): void {
    // Handle enroll logic here
    alert('Enrollment successful!');
  }
}
