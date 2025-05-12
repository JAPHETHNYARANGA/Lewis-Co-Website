import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MailerService } from '../httpService/mailer-service.service';

@Component({
  selector: 'app-contactpage',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.scss']
})
export class ContactpageComponent {
  contactForm = {
    fullName: '',
    email: '',
    service: '',
    message: ''
  };

  isSubmitting = false;
  snackbarMessage = '';
  snackbarType = ''; // 'success' or 'error'

  constructor(private http: HttpClient, private mailerService: MailerService,  @Inject(PLATFORM_ID) private platformId: Object) {}

 
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      import('aos').then(AOS => {
        AOS.default.init(); 
      });
    }
  }

  onSubmit(): void {
    // Form validation
    if (!this.contactForm.fullName || !this.contactForm.email || !this.contactForm.message) {
      this.showSnackbar('Please fill in all required fields.', 'error');
      return;
    }

    this.isSubmitting = true;

    this.mailerService.sendMessage(this.contactForm).subscribe({
      next: (response) => {
        this.showSnackbar('Message sent successfully!', 'success');
        this.clearForm();
      },
      error: (error) => {
        this.showSnackbar('Error sending message. Please try again later.', 'error');
        this.isSubmitting = false;
      }
    });
  }

  // Show snackbar with a message
  showSnackbar(message: string, type: string): void {
    this.snackbarMessage = message;
    this.snackbarType = type;
    setTimeout(() => {
      this.snackbarMessage = ''; // Clear snackbar after 3 seconds
    }, 3000);
  }

  // Clear the form
  clearForm(): void {
    this.contactForm = { fullName: '', email: '', service: '', message: '' };
    this.isSubmitting = false;
  }
}
