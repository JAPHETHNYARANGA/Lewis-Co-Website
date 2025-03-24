import { Component } from '@angular/core';
import { NavbarComponent } from "../shared/navbar/navbar.component";
import { MainCardsComponent } from "../shared/main-cards/main-cards.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { Router } from '@angular/router';
import AOS from 'aos';
import { projects } from '../data/projects';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  projects = projects.slice(0, 3);
  videos: any[] = [
    { url: 'assets/videos/vid1.mp4' }, // Replace with actual video file names and paths
    { url: 'assets/videos/vid2.mp4' },
    { url: 'assets/videos/vid3.mp4' }
  ];
  
  constructor(private router: Router) {}

  ngOnInit(): void {
    AOS.init();
  }

  

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
  navigateToTestimonials(){
    this.router.navigate(['testimonials']);
    window.scrollTo(0, 0); // Scroll to the top of the page
  }
  navigateToProjects(){
    this.router.navigate(['projects']);
    window.scrollTo(0, 0);
  }

}
