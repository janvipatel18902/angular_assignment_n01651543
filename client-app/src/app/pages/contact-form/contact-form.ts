import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './contact-form.html',
  styleUrls: ['./contact-form.css'],
})
export class ContactForm {
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required])
  });

  constructor(private http: HttpClient) {}

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      // Send data to Node.js backend
      this.http.post('http://localhost:5000/api/contact', formData).subscribe({
        next: () => {
          alert('✅ Message saved to backend!');
          this.contactForm.reset();
        },
        error: () => {
          alert('❌ Failed to save message.');
        }
      });
    }
  }
}
