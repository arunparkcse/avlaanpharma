import { Component, OnInit, signal, AfterViewInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';

interface BlogPostDetail {
  title: string;
  category: string;
  date: string;
  readTime: string;
  intro: string;
  sections: { heading: string; paragraphs: string[] }[];
  conclusion: string;
  image: string;
}

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [RouterLink, NgIf, NgFor],
  templateUrl: './blog-post.html',
  styleUrl: './blog-post.css',
})
export class BlogPost implements OnInit, AfterViewInit {
  activePost = signal<BlogPostDetail | null>(null);
  slug = signal<string>('');

  private postDatabase: Record<string, BlogPostDetail> = {
    'vegan-nutraceutical-ingredients': {
      title: 'Vegan Nutraceutical Ingredients on the Rise in India',
      category: 'Nutraceuticals',
      date: 'March 26, 2026',
      readTime: '3 min read',
      intro: 'The Indian nutraceutical landscape is witnessing an unprecedented transition. Driven by ethical choice, climate concern, and health consciousness, modern consumers are actively demanding animal-free formulations.',
      sections: [
        {
          heading: 'The Vegan Shift in Modern Formulation',
          paragraphs: [
            'For decades, standard B2B formulations relied heavily on animal-derived products: gelatin for capsules, sheep lanolin for Vitamin D3, and animal cartilage for chondroitin. However, the rise of the vegan and vegetarian consumer demographic in India has turned animal-free sourcing into a critical differentiator.',
            'B2B brands that fail to make the transition risk losing market share to clean-label, plant-based competitors. Consumers are scrutinizing labels for certifications like the Vegan Society registration and the FSSAI green dot.'
          ]
        },
        {
          heading: 'Avlaan Pharma\'s Active Vegan Offerings',
          paragraphs: [
            'To meet this market demand, Avlaan Pharma has curated a portfolio of highly bioavailable, plant-based actives: Vitashine™ D3 (from lichen), Phytodroitin™ (from seaweed), and Vollagen® (fermented amino acids).',
            'These ingredients allow manufacturers to maintain or improve the clinical efficacy of their supplements while qualifying for green dot labels and clean-label designations.'
          ]
        }
      ],
      conclusion: 'Adopting vegan actives is no longer a niche strategy—it is the baseline for modern, consumer-centric brand positioning.',
      image: 'images/insight_market_trends.png'
    },
    'magtein-supplier-india': {
      title: 'Magtein®: The Science of Patented Magnesium L-Threonate',
      category: 'Magnesium',
      date: 'February 12, 2026',
      readTime: '4 min read',
      intro: 'Magnesium is essential for hundreds of enzyme systems in the body, but standard magnesium compounds fail to deliver cognitive benefits due to their inability to cross the blood-brain barrier.',
      sections: [
        {
          heading: 'MIT Scientist-Developed Bioavailability',
          paragraphs: [
            'Developed by a team of neuroscientists at the Massachusetts Institute of Technology (MIT), Magtein® (Magnesium L-Threonate) is a patented compound designed to raise magnesium levels specifically in the brain.',
            'Clinical trials demonstrate that Magtein® effectively raises magnesium concentrations in cerebrospinal fluid (CSF). This in turn supports synaptic plasticity, memory formation, and focus.'
          ]
        },
        {
          heading: 'Clinical Backing for Cognitive Support & Sleep',
          paragraphs: [
            'Double-blind, placebo-controlled trials show that Magtein® significantly improves cognitive scores, learning capacity, and sleep quality in adults. It acts as an active ally to focus during the day and deep rest at night.',
            'Avlaan Pharma is the authorized distributor of Magtein® in India, supplying high-quality, FSSAI-approved powder format to supplement brands.'
          ]
        }
      ],
      conclusion: 'When formulating cognitive health products, utilizing clinically backed, patented Magtein® ensures superior user results and compliance safety.',
      image: 'images/insight_magtein_science.png'
    },
    'vegan-vitamin-d3-supplier-india-3': {
      title: 'FSSAI Regulations and Vegan Vitamin D3 Sourcing',
      category: 'Vitamin D3',
      date: 'January 28, 2026',
      readTime: '3 min read',
      intro: 'Sourcing active ingredients for the Indian market requires strict adherence to the Food Safety and Standards Authority of India (FSSAI) guidelines.',
      sections: [
        {
          heading: 'The Importance of Lichen-Derived Compliance',
          paragraphs: [
            'Vegan Vitamin D3 derived from lichen (Vitashine®) has revolutionized the market. Unlike lanolin-derived D3, lichen-derived D3 carries the FSSAI green dot certification.',
            'As a B2B manufacturer, verifying the plant source documentation and potency assay of your raw materials is mandatory. FSSAI requires complete traceability for clean-label claims.'
          ]
        },
        {
          heading: 'Quality Documentation Provided by Avlaan',
          paragraphs: [
            'To support our manufacturing partners, Avlaan Pharma supplies NABL-accredited Certificates of Analysis (COAs), complete stability data under Indian zone climates, and non-animal origin certificates.',
            'This guarantees that your final product stands up to regulatory audit and meets potency label claims throughout its shelf life.'
          ]
        }
      ],
      conclusion: 'Partnering with a compliant, quality-focused supplier like Avlaan Pharma ensures your regulatory filing is bulletproof.',
      image: 'images/insight_vitashine_regulations.png'
    },
    'vegan-collagen-ingredient-supplier-india': {
      title: 'Vollagen®: Redefining Beauty and Joint Nutrition',
      category: 'Collagen',
      date: 'December 15, 2025',
      readTime: '3 min read',
      intro: 'Collagen is the primary structural protein in the body, but animal-derived collagen faces limitations in absorption and consumer acceptance.',
      sections: [
        {
          heading: 'The Absorption Edge of Isolated Amino Acids',
          paragraphs: [
            'Traditional animal collagen is a large molecule that the body must digest and hydrolyze into smaller peptides before absorption. Vollagen® bypasses this constraint.',
            'Vollagen® consists of isolated, fermentation-derived amino acids in the exact ratio of human Type I collagen. These free-form amino acids are immediately bioavailable and ready for absorption, promoting natural collagen synthesis.'
          ]
        },
        {
          heading: 'B2B Sourcing with Avlaan Pharma',
          paragraphs: [
            'Formulated via a proprietary multi-step fermentation of non-GMO corn, Vollagen® is 100% plant-origin and free from common allergens. Avlaan supplies this ingredient in free-flowing powder format, optimized for tablets and capsules.'
          ]
        }
      ],
      conclusion: 'By choosing Vollagen®, brands provide their customers with a highly effective, animal-free collagen solution backed by innovative science.',
      image: 'images/insight_vollagen_beauty.png'
    },
    'magtein-supplier-india-2': {
      title: 'The Importance of Patented Ingredients for Brand Defensibility',
      category: 'Magnesium',
      date: 'November 22, 2025',
      readTime: '4 min read',
      intro: 'In a crowded nutraceutical market, B2B supplement brands must differentiate themselves to avoid price competition and maintain healthy profit margins.',
      sections: [
        {
          heading: 'The Pitfalls of Generic Actives',
          paragraphs: [
            'Generic magnesium L-threonate or D3 options often compete solely on price. This commoditization leads to low margins, and generic products cannot use the clinical study data of patented molecules.',
            'In contrast, formulating with patented Magtein® allows brands to legally showcase clinical trial results, build trust with practitioners, and maintain a premium price point.'
          ]
        },
        {
          heading: 'Regulatory Defensibility and Trademark Use',
          paragraphs: [
            'Authorized partners of Avlaan Pharma gain access to trademark licensing, allowing the Magtein® logo on packaging. This provides instant consumer trust and prevents intellectual property claims.'
          ]
        }
      ],
      conclusion: 'Building your formulation on patented foundations is the key to longevity, profitability, and consumer trust.',
      image: 'images/insight_brand_defensibility.png'
    },
    'nutraceutical-ingredient-suppliers': {
      title: 'Understanding Quality Standards in B2B Ingredient Distribution',
      category: 'Nutraceuticals',
      date: 'October 18, 2025',
      readTime: '5 min read',
      intro: 'B2B ingredient distribution forms the backbone of the health supplement industry. At Avlaan Pharma, quality control is not a post-process check—it is our core operating principle.',
      sections: [
        {
          heading: 'Sourcing Under Strict cGMP Guidelines',
          paragraphs: [
            'We source our ingredients exclusively from manufacturing facilities compliant with current Good Manufacturing Practices (cGMP). This ensures every batch of Vitashine®, Magtein®, or Vollagen® meets international standards.',
            'Quality checks cover assay percentages, microbiological profiles, heavy metal limits, and pesticide residues.'
          ]
        },
        {
          heading: 'The Role of NABL-Accredited Documentation',
          paragraphs: [
            'Every shipment we distribute is accompanied by a NABL-accredited Certificate of Analysis. Having local, verifiable quality reports speeds up manufacturing approvals and ensures product safety for Indian consumers.'
          ]
        }
      ],
      conclusion: 'Compromising on B2B raw material quality is a risk to your brand. Avlaan Pharma provides the transparency and documentation you need.',
      image: 'images/insight_quality_standards.png'
    },
    'vegan-nutraceutical-ingredients-2': {
      title: 'Transitioning Formulations from Animal to Plant Chondroitin (Phytodroitin)',
      category: 'Nutraceuticals',
      date: 'September 30, 2025',
      readTime: '3 min read',
      intro: 'Chondroitin is a cornerstone of joint-health supplements, but its animal origin (shark or bovine cartilage) is a major block for the growing vegetarian market in India.',
      sections: [
        {
          heading: 'Introducing Phytodroitin™: The Seaweed Alternative',
          paragraphs: [
            'Phytodroitin™ is a plant-origin alternative derived from specific seaweed (Ulva lactuca) and algal extracts. It mimics the mucopolysaccharide structure of chondroitin perfectly.',
            'Clinical and structural analysis shows that Phytodroitin™ provides equal or superior joint-comfort benefits compared to animal chondroitin without the environmental or ethical toll.'
          ]
        },
        {
          heading: 'B2B Sourcing Parameters',
          paragraphs: [
            'Phytodroitin™ is fully water-soluble and supplied by Avlaan Pharma in a free-flowing powder format. The standard daily dose of 400mg makes it easy to integrate into multi-ingredient joint formulations.'
          ]
        }
      ],
      conclusion: 'Transitioning to Phytodroitin™ allows brands to tap into the massive vegetarian market while promoting environmental sustainability.',
      image: 'images/insight_phytodroitin_joint.png'
    },
    'vegan-collagen-ingredient-supplier-india-2026': {
      title: 'Why Vollagen is Winning Innovation Awards in 2026',
      category: 'Collagen',
      date: 'August 14, 2025',
      readTime: '2 min read',
      intro: 'Innovation is the lifeblood of B2B nutraceuticals. At Vitafoods India 2026, Vollagen® took center stage by winning runner-up in the highly competitive Innovation Zone Awards.',
      sections: [
        {
          heading: 'Recognizing Scientific Efficacy',
          paragraphs: [
            'The Vitafoods India panel of judges, consisting of leading food scientists and regulatory experts, recognized Vollagen® for its innovative production methodology and direct absorption chemistry.',
            'Rather than relying on environmental-damaging animal farming, Vollagen® utilizes clean, controlled fermentation of non-GMO corn.'
          ]
        },
        {
          heading: 'Commercial Benefits for Indian Brands',
          paragraphs: [
            'By formulating with Vollagen®, brands can print the "Innovation Award" badge on their marketing materials, providing a powerful, scientifically validated message to consumers.'
          ]
        }
      ],
      conclusion: 'Vollagen® represents the clean, sustainable future of structural protein supplementation.',
      image: 'images/insight_innovation_award.png'
    },
    'nutraceutical-ingredient-suppliers2': {
      title: 'Avlaan Pharma: Meeting B2B Potency Compliance Standards',
      category: 'Nutraceuticals',
      date: 'July 05, 2025',
      readTime: '3 min read',
      intro: 'When manufacturing dietary supplements, active assay potency is critical. Under-dosed supplements lead to failed audits and zero efficacy, while over-dosed batches can lead to toxicities and recall.',
      sections: [
        {
          heading: 'Verifying active assays in Chennai',
          paragraphs: [
            'At Avlaan Pharma, we run rigorous quality checks on every imported batch at local labs. We verify the active concentration of Vitashine® D3, Magtein® L-threonate, and Vollagen® amino acids.',
            'We provide our B2B partners with full traceability and batch-specific documentation to support their internal quality controls.'
          ]
        }
      ],
      conclusion: 'Reliability in active potency is why India\'s leading brands trust Avlaan Pharma for their sourcing.',
      image: 'images/insight_potency_compliance.png'
    }
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const activeSlug = params.get('slug');
      if (activeSlug) {
        this.slug.set(activeSlug);
        const post = this.postDatabase[activeSlug];
        if (post) {
          this.activePost.set(post);
        } else {
          this.activePost.set(null);
        }
      }
    });
  }

  ngAfterViewInit() {
    window.scrollTo(0, 0);
  }
}
