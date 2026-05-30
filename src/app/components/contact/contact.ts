import { Component, signal, AfterViewInit } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgIf],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements AfterViewInit {
  isSubmitted = signal(false);
  name = signal('');
  company = signal('');
  email = signal('');
  phone = signal('');
  message = signal('');

  onSubmit(event: Event) {
    event.preventDefault();
    
    // Simple verification
    if (this.email() && this.name() && this.message()) {
      this.isSubmitted.set(true);
      // Reset form
      this.name.set('');
      this.company.set('');
      this.email.set('');
      this.phone.set('');
      this.message.set('');
    }
  }

  onInput(field: 'name' | 'company' | 'email' | 'phone' | 'message', event: Event) {
    const input = event.target as HTMLInputElement | HTMLTextAreaElement;
    if (field === 'name') this.name.set(input.value);
    if (field === 'company') this.company.set(input.value);
    if (field === 'email') this.email.set(input.value);
    if (field === 'phone') this.phone.set(input.value);
    if (field === 'message') this.message.set(input.value);
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));
    window.scrollTo(0, 0);
  }
}
