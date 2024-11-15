import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://fakestoreapi.com/auth/login';

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string) {
    return this.http.post<{ token: string }>(this.apiUrl, { username, password })
      .subscribe(response => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/dashboard']);
      });
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
