import { Component, AfterViewInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-vitashine',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './vitashine.html',
  styleUrl: './vitashine.css',
})
export class Vitashine implements AfterViewInit {
  selectedFormat = signal<'oil' | 'powder'>('oil');

  setFormat(format: 'oil' | 'powder') {
    this.selectedFormat.set(format);
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
    window.scrollTo(0, 0); // Scroll to top on load
  }
}
