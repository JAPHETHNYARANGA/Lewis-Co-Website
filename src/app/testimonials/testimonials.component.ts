import { Component } from '@angular/core';
import { FooterComponent } from "../shared/footer/footer.component";
import { NavbarComponent } from "../shared/navbar/navbar.component";
import { Router } from '@angular/router';
import AOS from 'aos';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {

  constructor (private router:Router) {}

  ngOnInit(): void {
    AOS.init(); // Initialize AOS animations
  }

   // Scroll to top of the page and navigate to Contact
   navigateToContact() {
    this.router.navigate(['contact']);
    window.scrollTo(0, 0); // Scroll to the top of the page
  }

}
