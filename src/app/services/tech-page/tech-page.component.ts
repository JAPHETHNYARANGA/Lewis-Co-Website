import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tech-page',
  standalone: true,
  imports: [],
  templateUrl: './tech-page.component.html',
  styleUrl: './tech-page.component.scss'
})
export class TechPageComponent {

  constructor(private router:Router){}


  navigateToContact(){
    this.router.navigate(['contact']);
    window.scrollTo(0, 0); 
  }
}
