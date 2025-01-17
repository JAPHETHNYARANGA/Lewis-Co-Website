import { Component } from '@angular/core';
import { Router } from '@angular/router';
import AOS from 'aos';

@Component({
  selector: 'app-automation-page',
  standalone: true,
  imports: [],
  templateUrl: './automation-page.component.html',
  styleUrl: './automation-page.component.scss'
})
export class AutomationPageComponent {


  constructor(private router:Router){}

  ngOnInit() {
    AOS.init();
  }

  navigateToContact(){
    this.router.navigate(['contact']);
    window.scrollTo(0, 0); // Scroll to the top of the page
  }
}
