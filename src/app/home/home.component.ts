import { Component } from '@angular/core';
import { NavbarComponent } from "../shared/navbar/navbar.component";
import { MainCardsComponent } from "../shared/main-cards/main-cards.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router: Router) {}


  navigateToContact(){
    this.router.navigate(['contact']);
    window.scrollTo(0, 0); // Scroll to the top of the page
  }
  navigateToTech(){
    this.router.navigate(['tech'])
    window.scrollTo(0, 0); // Scroll to the top of the page
  }
  navigateToMarketing(){
    this.router.navigate(['marketing'])
    window.scrollTo(0, 0); // Scroll to the top of the page
  }
  navigateToAutomation(){
    this.router.navigate(['automation'])
    window.scrollTo(0, 0); // Scroll to the top of the page
  }

}
