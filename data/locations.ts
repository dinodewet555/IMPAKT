export interface LocalLandingPage {
  slug: string;
  suburb: string;
  title: string;
  seoTitle: string;
  seoDesc: string;
  h1: string;
  distanceFromFacility: string;
  heroImage: string;
  postalCodesServed: string[];
  areasServed: string[];
  commuteHighlights: string[];
  amenities: string[];
  scheduleHighlights: string[];
  faqs: { q: string; a: string }[];
}

export const locationsData: Record<string, LocalLandingPage> = {
  'claremont-mma-gym': {
    slug: 'claremont-mma-gym',
    suburb: 'Claremont',
    title: 'Claremont MMA & Combat Sports Hub',
    seoTitle: 'Elite MMA Gym in Claremont, Cape Town | IMPAKT Martial Arts',
    seoDesc: "Train at Claremont's premier combat sports facility. Established in 2001, IMPAKT offers Muay Thai, BJJ, and Boxing at 2 Stignant Crescent. Book a class today.",
    h1: 'IMPAKT Academy: Claremont’s Home for Mixed Martial Arts & Combat Fitness',
    distanceFromFacility: 'Primary Location (2 Stignant Crescent, Claremont)',
    heroImage: '/images/impakt-facility-ring.jpg',
    postalCodesServed: ['7708', '7700', '7735'],
    areasServed: ['Claremont', 'Claremont Upper', 'Newlands', 'Kenilworth', 'Harfield Village'],
    commuteHighlights: [
      '2 minutes from Cavendish Square via Dreyer Street',
      '5 minutes walk from Claremont Central Train & Taxi Station',
      'Direct access off Main Road and Stanhope Road',
      'Dedicated street-level parking in front of the facility',
    ],
    amenities: [
      'Full-size elevated boxing ring for authentic ringcraft',
      'Olympic-grade high-density tatami grappling mats',
      'Heavy bag array (banana bags, teardrop bags, slip bags)',
      'Free weights, barbells, kettlebells & Concept2 rowers',
      'In-house sports massage and soft-tissue recovery clinic',
    ],
    scheduleHighlights: [
      'Early Morning BoxFit: 06:00 – 07:00 (Mon, Wed, Thu)',
      'Evening Muay Thai Striking: 17:30 – 18:30 (Mon & Wed)',
      'Brazilian Jiu-Jitsu (Gi & No-Gi): 18:30 – 19:30 & 19:00 – 20:30',
      'Fighter MMA Sparring & Open Mat: Fri 18:00 & Sat 09:30',
    ],
    faqs: [
      {
        q: 'Where exactly is IMPAKT Academy located in Claremont?',
        a: 'We are located at 2 Stignant Crescent, Claremont, Cape Town (7708), just off Main Road near the central commercial hub.',
      },
      {
        q: 'Can I attend a single class as a drop-in visitor in Claremont?',
        a: 'Yes. We offer an open R100 single-session drop-in fee for any scheduled class or open-mat session.',
      },
      {
        q: 'What are the gym operating hours at the Claremont facility?',
        a: 'We are open Monday to Friday from 06:00 to 21:00, and Saturdays and Sundays from 08:00 to 13:00.',
      },
    ],
  },
  'wynberg-martial-arts': {
    slug: 'wynberg-martial-arts',
    suburb: 'Wynberg',
    title: 'Martial Arts & Boxing Near Wynberg',
    seoTitle: 'Martial Arts & Boxing Classes Near Wynberg | IMPAKT MMA',
    seoDesc: 'Looking for an MMA gym near Wynberg? IMPAKT Academy is just minutes away in Claremont, offering elite BJJ, Kickboxing, and fitness conditioning.',
    h1: 'Elite Martial Arts, Boxing & BJJ Classes Just Minutes from Wynberg',
    distanceFromFacility: '5 Minutes (1.8 km) from Wynberg Main Road',
    heroImage: '/images/impakt-kickboxing-strike.jpg',
    postalCodesServed: ['7800', '7824', '7708'],
    areasServed: ['Wynberg', 'Wynberg Upper', 'Maynardville', 'Plumstead', 'Ottery'],
    commuteHighlights: [
      'Just 5 minutes (1.8 km) straight north along Main Road',
      'Under 6 minutes via the M3 freeway exiting at Protea/Paradise Road',
      '1 direct stop on the Southern Line railway (Wynberg to Claremont)',
      'Convenient after-work training for Southern Suburbs commuters',
    ],
    amenities: [
      'Full regulation boxing ring for technical sparring',
      'High-impact tatami mat arena for injury-free grappling',
      'Extensive heavy-bag line and Thai pad equipment',
      'Strength & conditioning floor with squat racks and free weights',
      'Hot showers, changing facilities & sports massage therapy',
    ],
    scheduleHighlights: [
      'After-Work Muay Thai & Kickboxing: 18:00 – 19:30 (Mon, Wed, Fri)',
      'Evening BJJ & Submission Wrestling: 19:00 – 20:30 (Tue & Thu)',
      'Early Morning Pre-Work BoxFit: 06:00 – 07:00 (Mon & Thu)',
      'Weekend Open Mat Grappling: 09:30 – 11:00 (Sat)',
    ],
    faqs: [
      {
        q: 'How far is IMPAKT Academy from Wynberg?',
        a: 'IMPAKT Academy is approximately 1.8km from Wynberg Main Road (under 5 minutes drive), located at 2 Stignant Crescent in Claremont.',
      },
      {
        q: 'Why should Wynberg residents choose IMPAKT over a local commercial gym?',
        a: 'IMPAKT is a dedicated combat sports academy (Est. 2001) with certified black belt and championship-winning coaches, full tatami mats, a regulation ring, and authentic combat conditioning that commercial gyms cannot offer.',
      },
      {
        q: 'Do you offer drop-in passes for Wynberg residents?',
        a: 'Yes, our standard drop-in fee is R100 per class, or you can register for a Free 1-Day Trial pass on our website.',
      },
    ],
  },
  'southern-suburbs-combat-sports': {
    slug: 'southern-suburbs-combat-sports',
    suburb: 'Southern Suburbs',
    title: 'Southern Suburbs Combat Sports Hub',
    seoTitle: 'Premier MMA & Combat Sports Gym in the Southern Suburbs | IMPAKT',
    seoDesc: 'Join the top mixed martial arts academy in the Southern Suburbs of Cape Town. Professional coaching in Muay Thai, Boxing, and BJJ for all fitness levels.',
    h1: 'The Southern Suburbs’ Premier Mixed Martial Arts & Combat Academy',
    distanceFromFacility: 'Central Hub for Rondebosch, Newlands, Kenilworth & Constantia',
    heroImage: '/images/impakt-classes-4.jpg',
    postalCodesServed: ['7700', '7708', '7735', '7800', '7806'],
    areasServed: ['Southern Suburbs', 'Rondebosch', 'Newlands', 'Kenilworth', 'Bishopscourt', 'Constantia', 'Claremont', 'Wynberg'],
    commuteHighlights: [
      '4 minutes from Newlands (Dean Street & Forest Ground)',
      '6 minutes from Rondebosch & UCT Main Campus',
      '3 minutes from Kenilworth & Harfield Village',
      '8 minutes from Bishopscourt & Constantia via M3 Northbound',
    ],
    amenities: [
      'Comprehensive martial arts center with over 20+ years of legacy',
      'Olympic-grade tatami mats and elevated full-size boxing ring',
      'Dedicated strength & conditioning suite with Olympic weights',
      'Exclusive Women-only classes and Kids Hybrid martial arts',
      '12-Week Fighter’s Transformation Body Recomposition Program',
    ],
    scheduleHighlights: [
      'Daily 06:00 Morning Fighter Conditioning & BoxFit',
      'Daily 17:30 - 20:30 Evening Striking and Grappling Classes',
      'Youth Martial Arts (Ages 5-14): Tue & Thu @ 16:30',
      'Saturday & Sunday Weekend Training and Open Mats (08:00 – 13:00)',
    ],
    faqs: [
      {
        q: 'Which Southern Suburbs areas are closest to IMPAKT Academy?',
        a: 'IMPAKT Academy is centrally located in Claremont, making it under 10 minutes from Rondebosch, Newlands, Kenilworth, Wynberg, and Bishopscourt.',
      },
      {
        q: 'What packages are available for Southern Suburbs residents?',
        a: 'We offer R100 drop-ins, R850/mo unlimited combat memberships, R1,200/mo women’s specialized classes, and the R2,800/mo 12-Week Fighter Fitness Transformation package.',
      },
      {
        q: 'Is parking available for members driving from neighboring suburbs?',
        a: 'Yes, we have dedicated and secure street-level parking directly in front of our facility at 2 Stignant Crescent.',
      },
    ],
  },
};
