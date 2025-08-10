import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

export interface Contact {
  _id?: string;
  name: string;
  email: string;
  message: string;
  createdAt?: string;
  updatedAt?: string;
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  private backendUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  // If you still want the demo posts, keep this:
  getPosts(): Observable<any[]> {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(catchError(err => throwError(() => new Error(err.message))));
  }

  // ✅ Fetch your MongoDB contacts
  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.backendUrl}/api/contact`)
      .pipe(catchError(err => throwError(() => new Error(err.message))));
  }
}
