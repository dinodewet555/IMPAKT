import type { Metadata } from 'next';
import { Inter, Oswald } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://impaktmma.co.za'),
  title: {
    default: 'IMPAKT MMA Academy Cape Town | Elite Martial Arts & BJJ Gym in Claremont',
    template: '%s | IMPAKT MMA Cape Town',
  },
  description:
    'Cape Town’s premier MMA gym established in 2001 in Claremont. Expert training in Muay Thai, Brazilian Jiu-Jitsu, Boxing, Box Fit, and Strength Conditioning.',
  keywords: [
    'MMA Cape Town',
    'Mixed Martial Arts Claremont',
    'BJJ Cape Town',
    'Muay Thai Kickboxing Western Cape',
    'Boxing gym Claremont',
    'Fighter fitness South Africa',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'IMPAKT MMA Academy | Premier Combat Sports Gym in Cape Town',
    description: 'Transform your body and mind with world-class combat training in Claremont since 2001.',
    url: 'https://impaktmma.co.za',
    siteName: 'IMPAKT Academy of Mixed Martial Arts',
    locale: 'en_ZA',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['SportsActivityLocation', 'ExerciseGym'],
    '@id': 'https://impaktmma.co.za/#gym',
    name: 'IMPAKT Academy of Mixed Martial Arts',
    image: 'https://impaktmma.co.za/images/impakt-facility-ring.jpg',
    foundingDate: '2001',
    telephone: '+27216711661',
    email: 'dk@impaktsa.com',
    url: 'https://impaktmma.co.za',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Claremont',
      addressLocality: 'Cape Town',
      addressRegion: 'Western Cape',
      addressCountry: 'ZA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -33.9806,
      longitude: 18.4654,
    },
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
    priceRange: '$$',
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Full Boxing Ring', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Grappling Mat Area', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Cardio & Weight Conditioning', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Sports Massage & Recovery', value: true },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} dark scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#090A0F] text-slate-100 font-sans antialiased selection:bg-red-600 selection:text-white flex flex-col min-h-screen">
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow pt-20">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
