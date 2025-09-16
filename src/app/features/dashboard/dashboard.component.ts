import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { LeftMenuComponent } from '../../shared/components/left-menu/left-menu.component';
import { HeaderComponent } from '../../shared/components/header/header.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SharedModule,LeftMenuComponent,HeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
userEmail: string | null = '';

  constructor(private router: Router) {
    // Get email from localStorage (saved during login)
    // this.userEmail = localStorage.getItem('email');
  }

  logout() {
    // localStorage.removeItem('token');
    // localStorage.removeItem('email');
    this.router.navigate(['/']);
  }
}