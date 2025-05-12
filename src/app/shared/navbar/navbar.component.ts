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
  constructor(private router: Router, ) {}

  // Function to toggle the sidebar (mobile menu)
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  // Function to close the sidebar (after clicking a menu item)
  closeSidebar() {
    this.sidebarOpen = false;
  }

  // Function to toggle the dropdown menu
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  // Function to close the dropdown after a service item is clicked
  closeDropdown() {
    this.dropdownOpen = false;
  }

  // Scroll to top of the page and navigate to Home
  navigateToHome() {
    this.router.navigate(['']);
    this.closeSidebar();
    window.scrollTo(0, 0); // Scroll to the top of the page
  }

  // Scroll to top of the page and navigate to Contact
  navigateToContact() {
    this.router.navigate(['contact']);
    this.closeSidebar();
    window.scrollTo(0, 0); // Scroll to the top of the page
  }

  // Scroll to top of the page and navigate to Testimonials
  navigateToTestimonials() {
    this.router.navigate(['testimonials']);
    this.closeSidebar();
    window.scrollTo(0, 0); // Scroll to the top of the page
  }

  // Scroll to top of the page and navigate to Tech page
  navigateToTech() {
    this.router.navigate(['tech']);
    this.closeSidebar();
    window.scrollTo(0, 0); // Scroll to the top of the page
  }

  // Scroll to top of the page and navigate to Marketing page
  navigateToMarketing() {
    this.router.navigate(['marketing']);
    this.closeSidebar();
    window.scrollTo(0, 0); // Scroll to the top of the page
  }

  // Scroll to top of the page and navigate to Automation page
  navigateToAutomation() {
    this.router.navigate(['automation']);
    this.closeSidebar();
    window.scrollTo(0, 0); // Scroll to the top of the page
  }
  navigateToProjects() {
    this.router.navigate(['projects']);
    this.closeSidebar();
    window.scrollTo(0, 0); // Scroll to the top of the page
  }
}
