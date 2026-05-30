import { Component, OnInit, OnDestroy, AfterViewInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

interface HeroSlide {
  tagline: string;
  headline: string;
  subtext: string;
  bgType: 'image' | 'video';
  bgUrl: string;
}

interface Product {
  name: string;
  trademark: string;
  tagline: string;
  summary: string;
  route: string;
  image: string;
  source: string;
}

interface Service {
  num: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy, AfterViewInit {
  activeMottoIndex = signal(0);
  mottos = [
    'WE NURTURE VEGAN SUPPLEMENTATION',
    'WE FORMULATE SCIENCE-BACKED HEALTH',
    'WE SOURCE CLINICALLY-STUDIED INGREDIENTS',
    'WE SUPPLY THE FUTURE OF WELLNESS'
  ];

  activeHeroSlideIndex = signal(0);
  heroSlides: HeroSlide[] = [
    {
      tagline: 'B2B SPECIALTY HEALTH INGREDIENTS',
      headline: 'We protect and supply the future of health.',
      subtext: 'Avlaan Pharma is India\'s leading distributor of science-backed, patented, and 100% plant-based active ingredients for nutraceutical, supplement, and functional food manufacturers.',
      bgType: 'image',
      bgUrl: 'images/hero_slide_1.png'
    },
    {
      tagline: 'GLOBAL CLINICAL RESEARCH',
      headline: 'Clinically validated active molecules.',
      subtext: 'Direct partnerships with global innovators enable us to deliver traceable, patent-defensible ingredients that empower your brand labels.',
      bgType: 'video',
      bgUrl: 'images/hero_video.mp4'
    },
    {
      tagline: '100% VEGAN & CLEAN ORIGIN',
      headline: 'Clean-label alternatives that perform.',
      subtext: 'From lichen-derived Vitamin D3 to seaweed-derived chondroitin, we bridge the gap between vegetarian suitability and raw clinical efficacy.',
      bgType: 'image',
      bgUrl: 'images/hero_slide_2.png'
    },
    {
      tagline: 'AWARD-WINNING INNOVATION',
      headline: 'Science and quality recognized in India.',
      subtext: 'Our submission of Vollagen® won Runner-Up at Vitafoods India 2026 Innovation Zone, establishing trust with leading supplement brands.',
      bgType: 'image',
      bgUrl: 'images/hero_slide_3.png'
    }
  ];

  products: Product[] = [
    {
      name: 'Vitashine™ D3',
      trademark: 'Vitashine®',
      tagline: 'World\'s first 100% plant-based D3',
      summary: 'Lichen-derived active Vitamin D3 (Cholecalciferol) approved by FSSAI with the green dot. The ideal non-lanolin, sustainable source for tablets, capsules, and oils.',
      route: '/vegan-vitamin-d3-supplier-india',
      image: 'images/vitashine.png',
      source: 'Lichen source'
    },
    {
      name: 'Phytodroitin™',
      trademark: 'Phytodroitin™',
      tagline: 'Plant-origin chondroitin alternative',
      summary: 'A complex, mucopolysaccharide-rich seaweed and algal extract formulation designed to mimic chondroitin. Perfect for bone, joint, and osteoarthritis formulations.',
      route: '/phytodroitin',
      image: 'images/phytodroitin.png',
      source: 'Seaweed / Algae'
    },
    {
      name: 'Vollagen®',
      trademark: 'Vollagen®',
      tagline: 'Fermentation-derived collagen replacement',
      summary: 'A proprietary complex of 18 amino acids in the exact ratio of human collagen. Microencapsulated, highly bioavailable, and award-winning at Vitafoods India 2026.',
      route: '/vegan-collagen-ingredient-supplier-india',
      image: 'images/vollagen.png',
      source: 'Corn Fermentation'
    },
    {
      name: 'Magtein®',
      trademark: 'Magtein®',
      tagline: 'Cognitive Magnesium L-Threonate',
      summary: 'A patented form of magnesium scientifically proven to cross the blood-brain barrier. Enhances synapse density, memory, focus, and overall sleep quality.',
      route: '/magtein-supplier-india',
      image: 'images/magtein.png',
      source: 'Patented Molecule'
    }
  ];

  services: Service[] = [
    { num: '001', title: 'Product Development', desc: 'Custom formulations, potency adjustment, and ingredient compatibility design.' },
    { num: '002', title: 'Technical Support', desc: 'Providing full dossiers, NABL-accredited COAs, and stability analysis.' },
    { num: '003', title: 'Supply Chain', desc: 'Direct partnership with UK and global manufacturers for seamless, verified sourcing.' },
    { num: '004', title: 'Logistics & Safety', desc: 'Agile warehouse distribution under strict temperature controls.' },
    { num: '005', title: 'Traceability & Compliance', desc: 'FSSAI compliance, non-animal source documentation, and green dot verification.' }
  ];
  activeServiceIndex = signal(0);
  private heroIntervalId: any;

  nextService() {
    this.activeServiceIndex.update(idx => {
      const maxIdx = window.innerWidth < 768 ? 4 : 2;
      return idx < maxIdx ? idx + 1 : 0;
    });
  }

  prevService() {
    this.activeServiceIndex.update(idx => {
      const maxIdx = window.innerWidth < 768 ? 4 : 2;
      return idx > 0 ? idx - 1 : maxIdx;
    });
  }

  nextHeroSlide() {
    this.activeHeroSlideIndex.update(idx => (idx + 1) % this.heroSlides.length);
    this.resetHeroTimer();
  }

  prevHeroSlide() {
    this.activeHeroSlideIndex.update(idx => (idx - 1 + this.heroSlides.length) % this.heroSlides.length);
    this.resetHeroTimer();
  }

  setHeroSlide(idx: number) {
    this.activeHeroSlideIndex.set(idx);
    this.resetHeroTimer();
  }

  private resetHeroTimer() {
    if (this.heroIntervalId) {
      clearInterval(this.heroIntervalId);
    }
    this.heroIntervalId = setInterval(() => {
      this.nextHeroSlide();
    }, 6000);
  }

  ngOnInit() {
    // Cycle taglines
    setInterval(() => {
      this.activeMottoIndex.update(idx => (idx + 1) % this.mottos.length);
    }, 4000);

    // Cycle Hero slides
    this.heroIntervalId = setInterval(() => {
      this.nextHeroSlide();
    }, 6000);
  }

  ngOnDestroy() {
    if (this.heroIntervalId) {
      clearInterval(this.heroIntervalId);
    }
  }

  ngAfterViewInit() {
    // Scroll reveal observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));
  }

  scrollToTargetAdjusted(id: string) {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}
