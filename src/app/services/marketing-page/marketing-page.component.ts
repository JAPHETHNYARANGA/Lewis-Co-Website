import { Component } from '@angular/core';
import { Router } from '@angular/router';
import AOS from 'aos';

@Component({
  selector: 'app-marketing-page',
  standalone: true,
  imports: [],
  templateUrl: './marketing-page.component.html',
  styleUrl: './marketing-page.component.scss'
})
export class MarketingPageComponent {

  constructor(private router:Router){}


  ngOnInit() {
    AOS.init();
  }

  navigateToContact(){
    this.router.navigate(['contact']);
    window.scrollTo(0, 0); // Scroll to the top of the page
  }
}
