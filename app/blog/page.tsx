import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Clock, User, ArrowRight, Flame, BookOpen, Sparkles, Shield } from 'lucide-react';
import { articles } from '@/data/articles';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Combat Sports, Martial Arts & Fitness Insights | IMPAKT MMA Blog Cape Town',
  description:
    'Expert training tips, discipline breakdowns, and combat sports guides from coaches at IMPAKT Academy of Mixed Martial Arts in Claremont, Cape Town.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Combat Sports & Fitness Insights | IMPAKT MMA Blog Cape Town',
    description:
      'Expert martial arts guides, BJJ techniques, and striking breakdowns from IMPAKT Academy in Claremont, Cape Town.',
    url: 'https://impaktmma.co.za/blog',
    siteName: 'IMPAKT Academy of Mixed Martial Arts',
    type: 'website',
  },
};

export default function BlogHubPage() {
  const featuredArticle = articles[0];

  const blogJsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'IMPAKT MMA Combat Sports & Fitness Blog',
      description:
        'Expert training tips, discipline breakdowns, and combat sports guides from coaches at IMPAKT Academy of Mixed Martial Arts in Claremont, Cape Town.',
      url: 'https://impaktmma.co.za/blog',
      publisher: {
        '@type': 'Organization',
        name: 'IMPAKT Academy of Mixed Martial Arts',
        url: 'https://impaktmma.co.za',
        logo: {
          '@type': 'ImageObject',
          url: 'https://impaktmma.co.za/images/impakt-logo.png',
        },
      },
      blogPost: articles.map((art) => ({
        '@type': 'BlogPosting',
        headline: art.title,
        description: art.seoDesc,
        url: `https://impaktmma.co.za/blog/${art.slug}`,
        datePublished: art.datePublished,
        dateModified: art.dateModified,
        author: {
          '@type': 'Person',
          name: art.author.name,
        },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://impaktmma.co.za',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog',
          item: 'https://impaktmma.co.za/blog',
        },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={blogJsonLd} />

      <div className="py-12 bg-mesh-dark min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li><ChevronRight className="w-3 h-3 text-slate-600" /></li>
              <li className="text-red-400 font-semibold" aria-current="page">Blog & Guides</li>
            </ol>
          </nav>

          {/* Header Banner */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/10 border border-red-500/30 text-xs font-bold uppercase tracking-widest text-red-400 mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Combat Knowledge & Coach Insights</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white uppercase tracking-wider mb-4 leading-tight">
              Combat Sports, Martial Arts & Fitness Insights
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore tactical guides, striking breakdowns, BJJ philosophies, and conditioning advice from the head instructors at IMPAKT Academy in Claremont, Cape Town.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">
            {['All Guides', 'Striking', 'Boxing & Fitness', 'Grappling & BJJ'].map((cat, idx) => (
              <span
                key={idx}
                className={`px-4 py-2 rounded-xl text-xs font-heading font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  idx === 0
                    ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-600/30 border border-red-500/40'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Featured Article Hero Card */}
          {featuredArticle && (
            <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/10 mb-16 group hover:border-red-500/30 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
                <div className="lg:col-span-7 relative h-72 sm:h-96 overflow-hidden">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#090A0F] via-[#090A0F]/60 to-transparent" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3.5 py-1 rounded-full bg-red-600 text-white text-xs font-heading font-bold uppercase tracking-widest shadow-lg flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Featured Pillar Guide
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 p-8 sm:p-10 space-y-4">
                  <div className="flex items-center gap-3 text-xs text-red-400 font-bold uppercase tracking-wider">
                    <span className="px-2.5 py-0.5 rounded bg-red-600/20 border border-red-500/30">
                      {featuredArticle.category}
                    </span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredArticle.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white uppercase group-hover:text-red-400 transition-colors leading-snug">
                    <Link href={`/blog/${featuredArticle.slug}`}>
                      {featuredArticle.title}
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {featuredArticle.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={featuredArticle.author.avatar}
                        alt={featuredArticle.author.name}
                        className="w-8 h-8 rounded-full bg-black/50 p-1 border border-white/10 object-contain"
                      />
                      <div>
                        <span className="text-xs font-bold text-white block">{featuredArticle.author.name}</span>
                        <span className="text-[10px] text-slate-400">{featuredArticle.author.role}</span>
                      </div>
                    </div>

                    <Link
                      href={`/blog/${featuredArticle.slug}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-heading font-bold uppercase tracking-wider transition-all shadow-md shadow-red-600/20"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* All 3 Pillar Articles Grid */}
          <div className="mb-20">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Shield className="w-5 h-5 text-red-500" />
                <span>Foundational Martial Arts Guides</span>
              </h2>
              <span className="text-xs text-slate-400 font-mono">3 Core Pillars</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <article
                  key={article.slug}
                  className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col justify-between group border border-white/10"
                >
                  <div>
                    {/* Thumbnail */}
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F111A] via-transparent to-transparent" />
                      
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-red-600/90 backdrop-blur-md text-[10px] font-heading font-bold uppercase tracking-wider text-white shadow-lg">
                          {article.category}
                        </span>
                      </div>

                      <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center p-2 group-hover:scale-110 transition-all shadow-xl">
                        <img
                          src={article.author.avatar}
                          alt=""
                          className="w-full h-full object-contain filter drop-shadow-[0_0_6px_rgba(255,30,39,0.7)]"
                        />
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                        <Clock className="w-3.5 h-3.5 text-red-500" />
                        <span>{article.readTime}</span>
                        <span>•</span>
                        <span>Claremont, Cape Town</span>
                      </div>

                      <h3 className="text-xl font-heading font-bold text-white uppercase group-hover:text-red-400 transition-colors mb-3 leading-snug line-clamp-2">
                        <Link href={`/blog/${article.slug}`}>
                          {article.title}
                        </Link>
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3 mb-6">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-6 pb-6 pt-0 border-t border-white/5 mt-auto">
                    <div className="flex items-center justify-between pt-4">
                      <div className="flex items-center gap-2">
                        <User className="w-3.5 h-3.5 text-red-400" />
                        <span className="text-xs text-slate-300 font-medium">{article.author.name}</span>
                      </div>

                      <Link
                        href={`/blog/${article.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-heading font-bold uppercase tracking-wider text-red-400 group-hover:text-red-300 transition-colors group/link"
                      >
                        <span>Read Article</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Quick CTA Box */}
          <div className="rounded-3xl p-8 sm:p-12 glass-panel border border-red-500/30 relative overflow-hidden bg-gradient-to-r from-red-950/40 via-[#0F111A] to-[#0F111A]">
            <div className="max-w-2xl space-y-4">
              <span className="px-3.5 py-1 rounded-full bg-red-600/30 border border-red-500/40 text-xs font-bold text-red-400 uppercase tracking-widest inline-block">
                Start Your Journey in Claremont
              </span>
              <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-white uppercase tracking-wider">
                Step off the sidelines and onto the mats.
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Try a single class with our R100 drop-in pass, or claim a completely free trial pass to experience coaching under Cape Town’s veteran fight team.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/contact"
                  className="px-6 py-3.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-xl shadow-red-600/30 transition-all border border-red-500/50 flex items-center gap-2"
                >
                  <Flame className="w-4 h-4 fill-white" />
                  <span>Claim Free Trial</span>
                </Link>
                <Link
                  href="/classes"
                  className="px-6 py-3.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                >
                  View Weekly Schedule
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
