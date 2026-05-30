import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Vitashine } from './components/vitashine/vitashine';
import { Phytodroitin } from './components/phytodroitin/phytodroitin';
import { Vollagen } from './components/vollagen/vollagen';
import { Magtein } from './components/magtein/magtein';
import { Insights } from './components/insights/insights';
import { BlogPost } from './components/blog-post/blog-post';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
  { path: '', component: Home, title: 'Nutraceutical Ingredient Suppliers India | Avlaan Pharma' },
  { path: 'about-us', component: About, title: 'About Us | Avlaan Pharma' },
  { path: 'vegan-vitamin-d3-supplier-india', component: Vitashine, title: 'Vegan Vitamin D3 Supplier India | Plant-Based Vitashine® D3' },
  { path: 'phytodroitin', component: Phytodroitin, title: 'Phytodroitin™ Vegan Chondroitin Alternative | Avlaan Pharma' },
  { path: 'vegan-collagen-ingredient-supplier-india', component: Vollagen, title: 'Vegan Collagen Ingredient Supplier India | Plant-Based Vollagen®' },
  { path: 'magtein-supplier-india', component: Magtein, title: 'Magtein® Supplier India | Patented Magnesium L-Threonate' },
  { path: 'insights', component: Insights, title: 'Insights - News & Trends | Avlaan Pharma' },
  { path: 'contact', component: Contact, title: 'Contact Us | Avlaan Pharma' },
  
  // Blog / Uncategorized posts
  { path: 'uncategorized/:slug', component: BlogPost },
  
  // Fallback redirect
  { path: '**', redirectTo: '' }
];
