import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoServiceService {

  // private apiUrl = 'https://api.elevatexpertise.com/api/videos';
  private apiUrl = 'http://127.0.0.1:8000/api/videos'

  constructor(private http: HttpClient) { }

   // Fetch videos with pagination
   getVideos(page: number = 1, perPage: number = 10): Observable<any> {
    const params = new HttpParams().set('page', page.toString()).set('perPage', perPage.toString());
    return this.http.get<any>(this.apiUrl, { params });
  }
}