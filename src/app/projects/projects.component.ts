import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { projects } from '../data/projects';
import { Router } from '@angular/router';
import AOS from 'aos';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = projects; 
    
    constructor(private router: Router) {}
  
    ngOnInit(): void {
      AOS.init();
    }
}
