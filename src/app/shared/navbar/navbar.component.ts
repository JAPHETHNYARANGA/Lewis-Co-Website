import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  sidebarOpen: boolean = false; // Controls the visibility of the mobile menu (sidebar)
  dropdownOpen: boolean = false; // Controls the dropdown menu visibility

  // Inject Router in the constructor
  constructor(private router: Router) {}

  // Function to toggle the sidebar (mobile menu)
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
    console.log('Sidebar state:', this.sidebarOpen); // Debugging
  }

  // Function to toggle the dropdown menu
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
    console.log('Dropdown state:', this.dropdownOpen); // Debugging
  }

  // Function to close the dropdown after a service item is clicked
  closeDropdown() {
    this.dropdownOpen = false;
  }

  navigateToHome() {
    this.router.navigate(['']);
  }

  navigateToContact() {
    this.router.navigate(['contact']);
  }

  navigateToTestimonials() {
    this.router.navigate(['testimonials']);
  }

  navigateToTech() {
    this.router.navigate(['tech']);
  }

  navigateToMarketing() {
    this.router.navigate(['marketing']);
  }

  navigateToAutomation() {
    this.router.navigate(['automation']);
  }
}
