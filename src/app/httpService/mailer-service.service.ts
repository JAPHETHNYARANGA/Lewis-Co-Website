import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailerService {

  private apiUrl = 'http://127.0.0.1:8000/api/mail';  // API endpoint for the Laravel backend

  constructor(private http: HttpClient) { }

  // Send the contact form data to the backend
  sendMessage(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData);
  }
}
