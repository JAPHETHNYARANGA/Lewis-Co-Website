import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marketing-page',
  standalone: true,
  imports: [],
  templateUrl: './marketing-page.component.html',
  styleUrl: './marketing-page.component.scss'
})
export class MarketingPageComponent {

  constructor(private router:Router){}


  navigateToContact(){
    this.router.navigate(['contact'])
  }
}
