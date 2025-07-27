import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || 'null');

    if (user && user.role === 'admin') {
      return true;
    }

    alert('Access denied: Admins only');
    this.router.navigate(['/posts']);
    return false;
  }
}
