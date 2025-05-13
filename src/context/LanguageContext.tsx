
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.gallery': 'Gallery',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    'hero.title': 'Crafting Unforgettable Moments',
    'hero.subtitle': 'Elevating events to extraordinary experiences',
    'hero.cta': 'Get a Quote',
    'about.title': 'About SnapEvent',
    'about.description': 'With over a decade of experience, SnapEvent has established itself as a premier event management company specializing in high-end events for government institutions, luxury brands, and corporate clients. Our team of dedicated professionals ensures that every event is executed with precision, creativity, and attention to detail.',
    'about.experience': 'Years of Experience',
    'about.events': 'Events Organized',
    'about.clients': 'Satisfied Clients',
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive event solutions tailored to your needs',
    'services.corporate.title': 'Corporate Events',
    'services.corporate.description': 'From intimate executive meetings to large-scale conferences, we create professional environments that reflect your company values.',
    'services.government.title': 'Government Ceremonies',
    'services.government.description': 'Protocol-perfect ceremonies and official events that uphold institutional dignity and purpose.',
    'services.weddings.title': 'Luxury Weddings',
    'services.weddings.description': 'Exquisite celebrations crafted with elegance and personalized touches for your special day.',
    'services.launches.title': 'Product & Store Launches',
    'services.launches.description': 'Strategic product introductions and store openings designed for maximum impact and media coverage.',
    'services.celebrity.title': 'Celebrity Appearances',
    'services.celebrity.description': 'Seamless coordination of VIP engagements, red carpet events, and celebrity hosting.',
    'services.media.title': 'Media & PR Coverage',
    'services.media.description': 'Comprehensive press coverage strategies ensuring your event receives the attention it deserves.',
    'gallery.title': 'Our Portfolio',
    'gallery.subtitle': 'A showcase of our finest events',
    'clients.title': 'Trusted By',
    'clients.subtitle': 'Our prestigious clientele',
    'testimonials.title': 'Testimonials',
    'testimonials.subtitle': 'What our clients say about us',
    'team.title': 'Meet Our Team',
    'team.description': 'At SnapEvent, our strength lies in the passion and expertise of our team. Together, we create unforgettable experiences that reflect elegance, precision, and creativity.',
    'team.member1.name': 'Lachhab Abdellah',
    'team.member1.position': 'Founder & Owner',
    'team.member1.bio': 'Visionary leader with 15+ years in photography, film direction, and luxury event production.',
    'team.member2.name': 'Soukaina Amrani',
    'team.member2.position': 'Creative Director',
    'team.member2.bio': 'Expert in transforming ideas into captivating visual experiences. Designs events with style, emotion, and impact.',
    'team.member3.name': 'Mohammed Sousi',
    'team.member3.position': 'Digital Marketing Specialist',
    'team.member3.bio': 'Drives online campaigns, influencer strategy, and brand presence for top-tier events.',
    'team.member4.name': 'Hajar Rochdi',
    'team.member4.position': 'Content Strategist',
    'team.member4.bio': 'Crafts compelling event narratives and manages storytelling across media platforms.',
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Ready to create an extraordinary event?',
    'contact.name': 'Full Name',
    'contact.email': 'Email Address',
    'contact.phone': 'Phone Number',
    'contact.eventType': 'Event Type',
    'contact.budget': 'Estimated Budget',
    'contact.message': 'Message',
    'contact.submit': 'Submit Inquiry',
    'contact.directEmail': 'Contact us: abdou.lachhab@gmail.com',
    'footer.rights': 'All Rights Reserved',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.services': 'Services',
    'nav.gallery': 'Galerie',
    'nav.testimonials': 'Témoignages',
    'nav.contact': 'Contact',
    'hero.title': 'Créer des Moments Inoubliables',
    'hero.subtitle': 'Transformer des événements en expériences extraordinaires',
    'hero.cta': 'Obtenir un Devis',
    'about.title': 'À Propos de SnapEvent',
    'about.description': 'Avec plus d\'une décennie d\'expérience, SnapEvent s\'est imposée comme une société d\'organisation d\'événements haut de gamme spécialisée dans les événements pour les institutions gouvernementales, les marques de luxe et les clients corporate. Notre équipe de professionnels dévoués garantit que chaque événement est exécuté avec précision, créativité et attention aux détails.',
    'about.experience': 'Années d\'Expérience',
    'about.events': 'Événements Organisés',
    'about.clients': 'Clients Satisfaits',
    'services.title': 'Nos Services',
    'services.subtitle': 'Solutions événementielles complètes adaptées à vos besoins',
    'services.corporate.title': 'Événements d\'Entreprise',
    'services.corporate.description': 'Des réunions exécutives intimes aux conférences à grande échelle, nous créons des environnements professionnels qui reflètent les valeurs de votre entreprise.',
    'services.government.title': 'Cérémonies Gouvernementales',
    'services.government.description': 'Cérémonies et événements officiels parfaitement protocolaires qui maintiennent la dignité et l\'objectif institutionnels.',
    'services.weddings.title': 'Mariages de Luxe',
    'services.weddings.description': 'Célébrations exquises élaborées avec élégance et touches personnalisées pour votre jour spécial.',
    'services.launches.title': 'Lancements de Produits & Magasins',
    'services.launches.description': 'Introductions stratégiques de produits et ouvertures de magasins conçues pour un impact maximal et une couverture médiatique.',
    'services.celebrity.title': 'Apparitions de Célébrités',
    'services.celebrity.description': 'Coordination harmonieuse d\'engagements VIP, d\'événements tapis rouge et d\'animation par des célébrités.',
    'services.media.title': 'Couverture Médiatique & RP',
    'services.media.description': 'Stratégies complètes de couverture de presse assurant que votre événement reçoit l\'attention qu\'il mérite.',
    'gallery.title': 'Notre Portfolio',
    'gallery.subtitle': 'Une exposition de nos meilleurs événements',
    'clients.title': 'Ils Nous Font Confiance',
    'clients.subtitle': 'Notre clientèle prestigieuse',
    'testimonials.title': 'Témoignages',
    'testimonials.subtitle': 'Ce que nos clients disent de nous',
    'team.title': 'Notre Équipe',
    'team.description': 'Chez SnapEvent, notre force réside dans la passion et l\'expertise de notre équipe. Ensemble, nous créons des expériences inoubliables qui reflètent élégance, précision et créativité.',
    'team.member1.name': 'Lachhab Abdellah',
    'team.member1.position': 'Fondateur & Propriétaire',
    'team.member1.bio': 'Leader visionnaire avec plus de 15 ans d\'expérience en photographie, réalisation de films et production d\'événements de luxe.',
    'team.member2.name': 'Soukaina Amrani',
    'team.member2.position': 'Directrice Créative',
    'team.member2.bio': 'Experte dans la transformation d\'idées en expériences visuelles captivantes. Conçoit des événements avec style, émotion et impact.',
    'team.member3.name': 'Mohammed Sousi',
    'team.member3.position': 'Spécialiste en Marketing Digital',
    'team.member3.bio': 'Dirige les campagnes en ligne, la stratégie d\'influence et la présence de marque pour des événements haut de gamme.',
    'team.member4.name': 'Hajar Rochdi',
    'team.member4.position': 'Stratégiste de Contenu',
    'team.member4.bio': 'Élabore des récits d\'événements convaincants et gère la narration sur les plateformes médiatiques.',
    'contact.title': 'Contactez-Nous',
    'contact.subtitle': 'Prêt à créer un événement extraordinaire?',
    'contact.name': 'Nom Complet',
    'contact.email': 'Adresse Email',
    'contact.phone': 'Numéro de Téléphone',
    'contact.eventType': 'Type d\'Événement',
    'contact.budget': 'Budget Estimé',
    'contact.message': 'Message',
    'contact.submit': 'Soumettre la Demande',
    'contact.directEmail': 'Contactez-nous: abdou.lachhab@gmail.com',
    'footer.rights': 'Tous Droits Réservés',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
