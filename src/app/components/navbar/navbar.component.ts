import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit{
  showNavbar: boolean = true;
  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      if (event.urlAfterRedirects) {
        const currentRoute = event.urlAfterRedirects;
        currentRoute === '/' ? this.showNavbar = true : this.showNavbar = false;
      }
    });
  }
}
