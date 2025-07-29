import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<any>('https://dummyjson.com/auth/login',{username,password})
  }

  getUserProfile(){
    const token = JSON.parse(localStorage.getItem('access_token') || 'null')

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get('https://dummyjson.com/auth/me',{
      headers
    })
  }
}
