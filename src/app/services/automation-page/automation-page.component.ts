import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-automation-page',
  standalone: true,
  imports: [],
  templateUrl: './automation-page.component.html',
  styleUrl: './automation-page.component.scss'
})
export class AutomationPageComponent {


  constructor(private router:Router){}


  navigateToContact(){
    this.router.navigate(['contact'])
  }
}
