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

<div class="course-summary">
  <div class="summary-item">
    <div class="label">Level</div>
    <div class="value">{{ level }}</div>
  </div>
  <div class="summary-item">
    <div class="label">Rating</div>
    <div class="value">
      {{ rating }} <span class="star">★</span>
      <span class="reviews">({{ reviewCount }} reviews)</span>
    </div>
  </div>
  <div class="summary-item">
    <div class="label">Duration</div>
    <div class="value">{{ duration }}</div>
  </div>
  <div class="summary-item">
    <div class="label">Flexible Schedule</div>
    <div class="value">{{ schedule }}</div>
  </div>
</div>
  .course-summary {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  padding: 16px;
  margin-top: 20px;
  gap: 16px;
  font-family: sans-serif;
}

.summary-item .label {
  color: #777;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 4px;
}

.summary-item .value {
  font-size: 15px;
  color: #222;
}

.star {
  color: #f5b50a;
  margin-left: 4px;
}

.reviews {
  color: #888;
  font-size: 13px;
  margin-left: 4px;
}

<!-- Tab Navigation -->
<div class="tab-container">
  <div class="tabs">
    <div 
      class="tab" 
      [class.active]="activeTab === 'overview'" 
      (click)="selectTab('overview')">
      Overview
    </div>
    <div 
      class="tab" 
      [class.active]="activeTab === 'content'" 
      (click)="selectTab('content')">
      Course Content
    </div>
    <div 
      class="tab" 
      [class.active]="activeTab === 'author'" 
      (click)="selectTab('author')">
      Author Details
    </div>
    <div 
      class="tab" 
      [class.active]="activeTab === 'testimonials'" 
      (click)="selectTab('testimonials')">
      Testimonials
    </div>
  </div>

  <div class="tab-content">
    <ng-container *ngIf="activeTab === 'overview'">
      <p>This is the course overview section.</p>
    </ng-container>
    <ng-container *ngIf="activeTab === 'content'">
      <p>This is the course content section.</p>
    </ng-container>
    <ng-container *ngIf="activeTab === 'author'">
      <p>Author details go here.</p>
    </ng-container>
    <ng-container *ngIf="activeTab === 'testimonials'">
      <p>Student testimonials will appear here.</p>
    </ng-container>
  </div>
</div>
export class CourseDetailsComponent {
  activeTab: string = 'overview';

  selectTab(tab: string) {
    this.activeTab = tab;
  }
}
.tab-container {
  margin-top: 24px;
  background-color: #fff;
  border-radius: 8px;
  padding: 16px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

.tabs {
  display: flex;
  border-bottom: 1px solid #ccc;
}

.tab {
  padding: 10px 20px;
  cursor: pointer;
  font-weight: 500;
  color: #555;
  transition: 0.2s ease;
}

.tab:hover {
  color: #000;
}

.tab.active {
  border-bottom: 2px solid #007bff;
  color: #007bff;
}

.tab-content {
  padding: 16px 0;
  font-size: 15px;
  color: #333;
}

<div class="accordion" *ngFor="let section of sections; let i = index">
    <div class="accordion-header" (click)="activeSection = activeSection === i ? null : i">
      <h4>{{ section.title }}</h4>
      <span>{{ section.lectures.length }} Lectures • {{ getSectionDuration(section) }} min</span>
    </div>

    <div class="accordion-body" *ngIf="activeSection === i">
      <div class="lecture" *ngFor="let lecture of section.lectures">
        <span class="lecture-title">{{ lecture.title }}</span>
        <span class="lecture-duration">{{ lecture.durationMinutes }} min</span>
      </div>
    </div>
  </div>

  .accordion {
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-bottom: 10px;
  overflow: hidden;
}

.accordion-header {
  background-color: #f7f7f7;
  padding: 12px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.accordion-header:hover {
  background-color: #eaeaea;
}

.accordion-body {
  padding: 10px 16px;
  background-color: #fff;
}

.lecture {
  display: flex;
  justify-content: space-between;
  padding: 6px 0;
  border-bottom: 1px solid #eee;
}

.lecture:last-child {
  border-bottom: none;
}

.lecture-title {
  color: #333;
}

.lecture-duration {
  color: #777;
  font-size: 14px;
}
activeSection: number | null = null;

getSectionDuration(section: any): number {
  return section.lectures.reduce((sum, lec) => sum + lec.durationMinutes, 0);
}

<ng-container *ngIf="activeTab === 'testimonials'">
  <div class="testimonials-container">
    <div class="testimonial-card" *ngFor="let review of reviews">
      
      <!-- Rating at top left -->
      <div class="card-top">
        <div class="rating">
          {{ review.rating }} <span class="star">★</span>
        </div>
        <!-- Image at top right -->
        <img class="top-image" src="https://i.imgur.com/example-testimonial.png" alt="testimonial-img" />
      </div>

      <!-- User Review Paragraph -->
      <p class="comment">{{ review.comment }}</p>

      <!-- Bottom Area with background color -->
      <div class="user-info">
        <img class="avatar" [src]="review.user.avatarUrl" alt="User Avatar" />
        <div class="user-details">
          <div class="user-name">{{ review.user.name }}</div>
          <div class="user-track">{{ review.user.track }}</div>
        </div>
      </div>

    </div>
  </div>
</ng-container>
.testimonials-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  margin-top: 16px;
}

.testimonial-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.rating {
  font-weight: bold;
  color: #333;
}

.star {
  color: #f5b50a;
}

.top-image {
  width: 40px;
  height: 40px;
  object-fit: cover;
}

.comment {
  margin: 12px 0;
  font-size: 14px;
  color: #444;
  line-height: 1.4;
}

.user-info {
  display: flex;
  align-items: center;
  background: #f5f5f5;  /* Bottom background color */
  padding: 8px;
  border-radius: 6px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  object-fit: cover;
}

.user-details {
  display: flex;
  flex-direction: column;
}

.user-name {
  font-weight: bold;
  font-size: 14px;
}

.user-track {
  font-size: 12px;
  color: #666;
}

