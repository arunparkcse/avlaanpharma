import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isMobileMenuOpen = signal(false);
  isProductsDropdownOpen = signal(false);

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(v => !v);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
    this.isProductsDropdownOpen.set(false);
  }

  toggleProductsDropdown(event: Event) {
    event.stopPropagation();
    this.isProductsDropdownOpen.update(v => !v);
  }

  closeProductsDropdown() {
    this.isProductsDropdownOpen.set(false);
  }
}
