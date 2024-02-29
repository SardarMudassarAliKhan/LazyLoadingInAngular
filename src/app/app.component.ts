import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LazyLoadingInAngular';

  constructor(private router: Router) {
    console.log('app component');
  }

  navigateTodashboard() {
    debugger;
    this.router.navigate(['dashboard', 'manager']);
  }
}
