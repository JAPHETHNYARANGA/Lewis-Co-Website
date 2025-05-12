import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { projects } from '../data/projects';
import { Router } from '@angular/router';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = projects; 
    
    constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {}
  
    ngOnInit(): void {
      if (isPlatformBrowser(this.platformId)) {
        import('aos').then(AOS => {
          AOS.default.init(); 
        });
      }
    }
}
