import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce-dashboard';
  currentView: string = 'login'; // Default view

  constructor(private authService: AuthService) {}

  showView(view: string) {
    this.currentView = view;
  }

  logout() {
    this.authService.logout();
    this.showView('login');
  }
}
