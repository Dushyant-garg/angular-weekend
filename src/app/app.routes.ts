import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { LoginComponent } from './login/login.component';
import { AdminGuard } from './guards/admin.guard';
import { AddUserComponent } from './add-user/add-user.component';
import { AddPostComponent } from './add-post/add-post.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    { path: 'users', component: UserListComponent, canActivate: [AdminGuard] },
    { path: 'posts', component: PostListComponent },
    { path: 'posts/:id', component: PostDetailsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: AddUserComponent, canActivate: [AdminGuard] },
    { path: 'add-post', component: AddPostComponent },
    { path: 'profile', component: ProfileComponent }
];
