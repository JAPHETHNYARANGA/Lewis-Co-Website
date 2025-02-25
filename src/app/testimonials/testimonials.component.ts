import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common'; // Import isPlatformBrowser
import AOS from 'aos';
import { VideoServiceService } from '../httpService/video-service.service';
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

  videos: any[] = []; // Array to store fetched videos

  constructor(
    private router: Router,
    private videoService: VideoServiceService,
    @Inject(PLATFORM_ID) private platformId: Object // Inject PLATFORM_ID
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) { // Check if running in the browser
      AOS.init(); // Initialize AOS only in the browser
    }
    this.fetchVideos(); // Fetch videos when the component initializes
  }

  // Fetch videos from the backend
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

  // Scroll to top of the page and navigate to Contact
  navigateToContact() {
    this.router.navigate(['contact']);
    if (isPlatformBrowser(this.platformId)) { // Ensure window is available
      window.scrollTo(0, 0); // Scroll to the top of the page
    }
  }
}