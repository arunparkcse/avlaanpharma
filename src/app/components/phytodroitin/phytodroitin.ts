import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-phytodroitin',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './phytodroitin.html',
  styleUrl: './phytodroitin.css',
})
export class Phytodroitin implements AfterViewInit {
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
