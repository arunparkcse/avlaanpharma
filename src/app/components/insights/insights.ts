import { Component, computed, signal, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

interface BlogPostSummary {
  title: string;
  slug: string;
  category: string;
  date: string;
  summary: string;
  readTime: string;
  image: string;
}

@Component({
  selector: 'app-insights',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf],
  templateUrl: './insights.html',
  styleUrl: './insights.css',
})
export class Insights implements AfterViewInit {
  searchQuery = signal('');
  selectedCategory = signal('All');

  categories = ['All', 'Vitamin D3', 'Collagen', 'Magnesium', 'Nutraceuticals'];

  posts = signal<BlogPostSummary[]>([
    {
      title: 'Vegan Nutraceutical Ingredients on the Rise in India',
      slug: 'vegan-nutraceutical-ingredients',
      category: 'Nutraceuticals',
      date: 'March 26, 2026',
      summary: 'With consumer preference shifting towards clean-label and plant-based supplements, discover how Indian brands are adapting to animal-free ingredients.',
      readTime: '3 min read',
      image: 'images/insight_market_trends.png'
    },
    {
      title: 'Magtein®: The Science of Patented Magnesium L-Threonate',
      slug: 'magtein-supplier-india',
      category: 'Magnesium',
      date: 'February 12, 2026',
      summary: 'Delve into the clinical research behind Magtein® and its unique ability to cross the blood-brain barrier for enhanced memory and sleep quality.',
      readTime: '4 min read',
      image: 'images/insight_magtein_science.png'
    },
    {
      title: 'FSSAI Regulations and Vegan Vitamin D3 Sourcing',
      slug: 'vegan-vitamin-d3-supplier-india-3',
      category: 'Vitamin D3',
      date: 'January 28, 2026',
      summary: 'Understanding the regulatory guidelines, stability dossiers, and Green Dot certifications required for supplying vegan D3 in India.',
      readTime: '3 min read',
      image: 'images/insight_vitashine_regulations.png'
    },
    {
      title: 'Vollagen®: Redefining Beauty and Joint Nutrition',
      slug: 'vegan-collagen-ingredient-supplier-india',
      category: 'Collagen',
      date: 'December 15, 2025',
      summary: 'Explore Vollagen®, the fermentation-derived complex of 18 amino acids mirroring human type I collagen for direct bioavailability.',
      readTime: '3 min read',
      image: 'images/insight_vollagen_beauty.png'
    },
    {
      title: 'The Importance of Patented Ingredients for Brand Defensibility',
      slug: 'magtein-supplier-india-2',
      category: 'Magnesium',
      date: 'November 22, 2025',
      summary: 'Why generic formulations lose market share and how trademarked actives like Magtein® protect B2B brand claims and profit margins.',
      readTime: '4 min read',
      image: 'images/insight_brand_defensibility.png'
    },
    {
      title: 'Understanding Quality Standards in B2B Ingredient Distribution',
      slug: 'nutraceutical-ingredient-suppliers',
      category: 'Nutraceuticals',
      date: 'October 18, 2025',
      summary: 'A deep dive into regulatory documentation, NABL-accredited COAs, and stability analysis for safety-conscious manufacturers.',
      readTime: '5 min read',
      image: 'images/insight_quality_standards.png'
    },
    {
      title: 'Transitioning Formulations from Animal to Plant Chondroitin (Phytodroitin)',
      slug: 'vegan-nutraceutical-ingredients-2',
      category: 'Nutraceuticals',
      date: 'September 30, 2025',
      summary: 'How Phytodroitin™ seaweed extracts mimic animal-derived chondroitin to deliver a 100% vegan, ethical alternative for joint health formulations.',
      readTime: '3 min read',
      image: 'images/insight_phytodroitin_joint.png'
    },
    {
      title: 'Why Vollagen is Winning Innovation Awards in 2026',
      slug: 'vegan-collagen-ingredient-supplier-india-2026',
      category: 'Collagen',
      date: 'August 14, 2025',
      summary: 'Highlights of Vollagen\'s success at Vitafoods India and the commercial advantages of formulating with award-winning plant collagen.',
      readTime: '2 min read',
      image: 'images/insight_innovation_award.png'
    },
    {
      title: 'Avlaan Pharma: Meeting B2B Potency Compliance Standards',
      slug: 'nutraceutical-ingredient-suppliers2',
      category: 'Nutraceuticals',
      date: 'July 05, 2025',
      summary: 'How Avlaan Pharmaceutical Pvt. Ltd. verifies the active assay, micro-limits, and metal-limits of each ingredient batch.',
      readTime: '3 min read',
      image: 'images/insight_potency_compliance.png'
    }
  ]);

  filteredPosts = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const cat = this.selectedCategory();
    
    return this.posts().filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(query) || 
                            post.summary.toLowerCase().includes(query);
      const matchesCategory = cat === 'All' || post.category === cat;
      
      return matchesSearch && matchesCategory;
    });
  });

  onSearchChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchQuery.set(input.value);
  }

  setCategory(category: string) {
    this.selectedCategory.set(category);
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
