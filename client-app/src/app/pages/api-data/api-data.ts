import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService, Contact } from '../../services/api.service';

@Component({
  selector: 'app-api-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api-data.html',
  styleUrls: ['./api-data.css'],
})
export class ApiData implements OnInit {
  contacts: Contact[] = [];
  loading = true;
  error = '';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getContacts().subscribe({
      next: (data) => {
        this.contacts = data; // already sorted by backend
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load contacts';
        this.loading = false;
      }
    });
  }
}
