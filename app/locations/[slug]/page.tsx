import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, MapPin, Clock, Phone, Shield, Flame, CheckCircle2, Navigation, Car, HelpCircle, ArrowRight, Star } from 'lucide-react';
import { locationsData } from '@/data/locations';
import JsonLd from '@/components/JsonLd';

export async function generateStaticParams() {
  return Object.keys(locationsData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const loc = locationsData[slug];
  if (!loc) return {};

  return {
    title: loc.seoTitle,
    description: loc.seoDesc,
    alternates: {
      canonical: `/locations/${loc.slug}`,
    },
    openGraph: {
      title: loc.seoTitle,
      description: loc.seoDesc,
      url: `https://impaktmma.co.za/locations/${loc.slug}`,
      siteName: 'IMPAKT Academy of Mixed Martial Arts',
      type: 'website',
    },
  };
}

export default async function LocationLandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const loc = locationsData[slug];

  if (!loc) {
    notFound();
  }

  const jsonLdData: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': ['SportsActivityLocation', 'ExerciseGym', 'HealthAndBeautyBusiness'],
      '@id': `https://impaktmma.co.za/locations/${loc.slug}#location`,
      name: `IMPAKT Academy of Mixed Martial Arts - ${loc.suburb} Service Hub`,
      image: 'https://impaktmma.co.za/images/impakt-facility-ring.jpg',
      telephone: '+27216711661',
      email: 'dk@impaktsa.com',
      url: `https://impaktmma.co.za/locations/${loc.slug}`,
      foundingDate: '2001',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '2 Stignant Crescent',
        addressLocality: 'Claremont',
        addressRegion: 'Western Cape',
        postalCode: '7708',
        addressCountry: 'ZA',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -33.9806,
        longitude: 18.4654,
      },
      areaServed: loc.areasServed.map((area, idx) => ({
        '@type': 'City',
        name: area,
        postalCode: loc.postalCodesServed[idx] || '7708',
      })),
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '06:00',
          closes: '21:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Saturday', 'Sunday'],
          opens: '08:00',
          closes: '13:00',
        },
      ],
      amenityFeature: loc.amenities.map((am) => ({
        '@type': 'LocationFeatureSpecification',
        name: am,
        value: true,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://impaktmma.co.za' },
        { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://impaktmma.co.za/facilities' },
        { '@type': 'ListItem', position: 3, name: loc.title, item: `https://impaktmma.co.za/locations/${loc.slug}` },
      ],
    },
    ...(loc.faqs && loc.faqs.length > 0 ? [{
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: loc.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    }] : []),
  ];

  return (
    <>
      <JsonLd data={jsonLdData} />

      <div className="py-12 bg-mesh-dark min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-slate-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><ChevronRight className="w-3 h-3 text-slate-600" /></li>
              <li><Link href="/facilities" className="hover:text-white transition-colors">Locations</Link></li>
              <li><ChevronRight className="w-3 h-3 text-slate-600" /></li>
              <li className="text-red-400 font-semibold truncate" aria-current="page">{loc.suburb}</li>
            </ol>
          </nav>

          {/* Hero Banner */}
          <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/10 mb-16 shadow-2xl">
            <div className="absolute inset-0 z-0">
              <img src={loc.heroImage} alt={loc.title} className="w-full h-full object-cover opacity-25" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#090A0F] via-[#090A0F]/85 to-transparent" />
            </div>

            <div className="relative z-10 p-8 sm:p-14 max-w-3xl space-y-6">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="px-3.5 py-1 rounded-full bg-red-600/30 border border-red-500/40 text-xs font-bold text-red-400 uppercase tracking-widest inline-flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{loc.distanceFromFacility}</span>
                </span>
                <span className="text-xs font-semibold text-slate-300 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                  Est. 2001 • Cape Town
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white uppercase tracking-wider leading-tight">
                {loc.h1}
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {loc.seoDesc}
              </p>

              {/* Fast Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-xl font-heading font-bold text-sm uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-xl shadow-red-600/30 transition-all border border-red-500/50 flex items-center gap-2"
                >
                  <Flame className="w-4 h-4 fill-white" />
                  <span>Claim Free Trial Pass</span>
                </Link>

                <a
                  href="tel:+27216711661"
                  className="px-6 py-3.5 rounded-xl font-heading font-bold text-sm uppercase tracking-wider text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-red-500" />
                  <span>+27 21 671 1661</span>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Layout: Location Details, Transit & Amenities */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
            
            {/* Left 2 Cols: Commute & Amenities */}
            <div className="lg:col-span-2 space-y-10">
              
              {/* Commute & Transit Highlights */}
              <div className="glass-panel p-8 rounded-2xl border border-white/10 space-y-6">
                <h2 className="text-2xl font-heading font-bold text-white uppercase flex items-center gap-2 text-red-400">
                  <Navigation className="w-6 h-6 text-red-500" />
                  <span>Proximity & Fast Transit from {loc.suburb}</span>
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  IMPAKT Academy at <strong>2 Stignant Crescent, Claremont</strong> is situated just minutes from {loc.suburb}, making it the most accessible dedicated combat sports gym in the Southern Suburbs.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {loc.commuteHighlights.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3">
                      <Car className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Facility Amenities */}
              <div className="glass-panel p-8 rounded-2xl border border-white/10 space-y-6">
                <h2 className="text-2xl font-heading font-bold text-white uppercase flex items-center gap-2">
                  <Shield className="w-6 h-6 text-red-500" />
                  <span>Full Combat Stadium Features</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {loc.amenities.map((amenity, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-300 font-medium">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div className="glass-panel p-8 rounded-2xl border border-white/10 space-y-6">
                <h2 className="text-2xl font-heading font-bold text-white uppercase flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-red-500" />
                  <span>Frequently Asked Questions ({loc.suburb})</span>
                </h2>

                <div className="space-y-4">
                  {loc.faqs.map((faq, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
                      <h4 className="font-heading font-bold text-white uppercase text-base text-red-400">{faq.q}</h4>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Sidebar: NAP, Hours & Drop-In Box */}
            <div className="space-y-8">
              
              {/* Sticky Drop-in Conversion Card */}
              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-red-500/40 bg-gradient-to-b from-[#181B2B] to-[#0E101A] shadow-2xl space-y-6">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-red-600 text-white text-[10px] font-heading font-bold uppercase tracking-wider shadow-md">
                    Open To All Suburbs
                  </span>
                  <div className="flex items-center gap-1 text-amber-400 text-xs">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <span className="font-bold">4.9 / 5.0</span>
                  </div>
                </div>

                <div>
                  <div className="text-3xl font-heading font-extrabold text-white">R100</div>
                  <div className="text-xs text-red-400 font-medium">Single Class Drop-In Day Pass</div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Visiting from {loc.suburb}? Drop into any scheduled Muay Thai, BJJ, Boxing, or BoxFit session with zero lock-in contracts.
                </p>

                <div className="space-y-2.5 pt-2 border-t border-white/10 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-500" />
                    <span>Access to full mat floor & ring</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-500" />
                    <span>Free loaner glove gear provided</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-500" />
                    <span>Showers & secure lockers included</span>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="block w-full py-3.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-white bg-red-600 hover:bg-red-500 text-center shadow-lg shadow-red-600/30 transition-all"
                >
                  Claim R100 Drop-In Pass
                </Link>
              </div>

              {/* Location & Operational Hours */}
              <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4 text-xs">
                <h3 className="text-base font-heading font-bold text-white uppercase border-b border-red-600/40 pb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <span>Physical Address & NAP</span>
                </h3>

                <div className="space-y-2 text-slate-300">
                  <p className="font-semibold text-white">IMPAKT Academy of Mixed Martial Arts</p>
                  <p>2 Stignant Crescent, Claremont</p>
                  <p>Cape Town, Western Cape, 7708</p>
                  <p className="pt-2">
                    <strong className="text-white">Phone: </strong>
                    <a href="tel:+27216711661" className="text-red-400 hover:underline">+27 21 671 1661</a>
                  </p>
                  <p>
                    <strong className="text-white">Email: </strong>
                    <a href="mailto:dk@impaktsa.com" className="text-red-400 hover:underline">dk@impaktsa.com</a>
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <h4 className="font-bold text-white uppercase mb-2 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-red-500" />
                    <span>Operating Hours (SAST)</span>
                  </h4>
                  <div className="space-y-1 text-slate-400">
                    <div className="flex justify-between">
                      <span>Mon – Fri:</span>
                      <span className="text-slate-200 font-mono">06:00 – 21:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sat – Sun:</span>
                      <span className="text-slate-200 font-mono">08:00 – 13:00</span>
                    </div>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=2+Stignant+Crescent+Claremont+Cape+Town"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-2.5 rounded-lg text-center text-xs font-bold uppercase tracking-wider text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors mt-4"
                >
                  Open in Google Maps
                </a>
              </div>

            </div>

          </div>

          {/* Suburb Hub Cross-Linking Bar */}
          <div className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-heading font-bold text-white uppercase text-sm">Explore Other Southern Suburbs Locations:</h4>
              <p className="text-xs text-slate-400">Serving athletes across the Western Cape Southern Suburbs corridor.</p>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              {Object.values(locationsData).map((l) => (
                <Link
                  key={l.slug}
                  href={`/locations/${l.slug}`}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-heading font-bold uppercase tracking-wider border transition-colors ${
                    l.slug === slug
                      ? 'bg-red-600/20 text-red-400 border-red-500/40'
                      : 'bg-white/5 text-slate-300 border-white/10 hover:border-white/20'
                  }`}
                >
                  {l.suburb}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
