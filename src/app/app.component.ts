import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router: Router, private userService: UserService) {}
  
  title = 'angular-assignment';

  // ngOnInit(){
  //   this.userService.getUserProfile().subscribe((data)=>{
  //     console.log(data);
      
  //   })
  // }

  isAdmin(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    return user?.role === 'admin';
  }

  //this is when dummy data was being used
  // logout(): void {
  //   localStorage.removeItem('user');
  //   this.router.navigate(['/login']);
  // }

  logout(): void {
    localStorage.removeItem('access_token');
    this.router.navigate(['/login']);
  }
}
