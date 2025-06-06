import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common'; // Import isPlatformBrowser
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent implements OnInit {

  // Hardcoded videos array pointing to your assets folder
  videos: any[] = [
    { url: 'assets/videos/vid1.mp4' }, // Replace with actual video file names and paths
    { url: 'assets/videos/vid2.mp4' },
    { url: 'assets/videos/vid3.mp4' },
    { url: 'assets/videos/cityRealty.mp4'}
  ];

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      import('aos').then(AOS => {
        AOS.default.init(); 
      });
    }
  }

  // Commented out the fetchVideos method as we're not using the API now
  /*
  fetchVideos(): void {
    this.videoService.getVideos().subscribe({
      next: (response) => {
        this.videos = response.videos; // Store the fetched videos
      },
      error: (error) => {
        console.error('Error fetching videos:', error);
      }
    });
  }
  */

  // Scroll to top of the page and navigate to Contact
  navigateToContact() {
    this.router.navigate(['contact']);
    if (isPlatformBrowser(this.platformId)) { // Ensure window is available
      window.scrollTo(0, 0); // Scroll to the top of the page
    }
  }

  navigateToTestimonials(){
    this.router.navigate(['testimonials']);
    window.scrollTo(0, 0); // Scroll to the top of the page
  }
}
