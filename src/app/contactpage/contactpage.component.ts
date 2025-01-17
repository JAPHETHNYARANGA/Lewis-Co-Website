import { Component } from '@angular/core';
import { NavbarComponent } from "../shared/navbar/navbar.component";
import { FooterComponent } from "../shared/footer/footer.component";
import AOS from 'aos';

@Component({
  selector: 'app-contactpage',
  standalone: true,
  imports: [],
  templateUrl: './contactpage.component.html',
  styleUrl: './contactpage.component.scss'
})
export class ContactpageComponent {

  ngOnInit(): void {
    AOS.init(); // Initialize AOS animations
  }
}
