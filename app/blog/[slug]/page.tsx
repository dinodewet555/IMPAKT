import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, Clock, User, ArrowRight, Shield, Flame, CheckCircle2, HelpCircle, Share2, Calendar } from 'lucide-react';
import { articles } from '@/data/articles';
import JsonLd from '@/components/JsonLd';

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: article.seoTitle,
    description: article.seoDesc,
    keywords: article.tags,
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
    openGraph: {
      title: article.seoTitle,
      description: article.seoDesc,
      url: `https://impaktmma.co.za/blog/${article.slug}`,
      siteName: 'IMPAKT Academy of Mixed Martial Arts',
      type: 'article',
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified,
      authors: [article.author.name],
      images: [
        {
          url: article.image.startsWith('http') ? article.image : `https://impaktmma.co.za${article.image}`,
          alt: article.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = articles.filter((a) => a.slug !== slug).slice(0, 2);

  const jsonLdData: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: article.title,
      description: article.seoDesc,
      image: article.image.startsWith('http') ? article.image : `https://impaktmma.co.za${article.image}`,
      datePublished: article.datePublished,
      dateModified: article.dateModified,
      keywords: article.tags.join(', '),
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://impaktmma.co.za/blog/${article.slug}`,
      },
      author: {
        '@type': 'Person',
        name: article.author.name,
        jobTitle: article.author.role,
      },
      publisher: {
        '@type': 'Organization',
        name: 'IMPAKT Academy of Mixed Martial Arts',
        url: 'https://impaktmma.co.za',
        logo: {
          '@type': 'ImageObject',
          url: 'https://impaktmma.co.za/images/impakt-logo.png',
        },
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://impaktmma.co.za' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://impaktmma.co.za/blog' },
        { '@type': 'ListItem', position: 3, name: article.title, item: `https://impaktmma.co.za/blog/${article.slug}` },
      ],
    },
    ...(article.faqs && article.faqs.length > 0 ? [{
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: article.faqs.map(faq => ({
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs text-slate-400 flex-wrap">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><ChevronRight className="w-3 h-3 text-slate-600" /></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><ChevronRight className="w-3 h-3 text-slate-600" /></li>
              <li className="text-red-400 font-semibold truncate max-w-xs sm:max-w-md" aria-current="page">
                {article.title}
              </li>
            </ol>
          </nav>

          {/* Article Header */}
          <header className="mb-10 space-y-6">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="px-3.5 py-1 rounded-full bg-red-600/30 border border-red-500/40 text-xs font-bold text-red-400 uppercase tracking-widest">
                {article.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                <Clock className="w-3.5 h-3.5 text-red-500" />
                {article.readTime}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                {new Date(article.datePublished).toLocaleDateString('en-ZA', { year: 'numeric', month: 'short', day: 'numeric' })}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white uppercase tracking-wider leading-tight">
              {article.title}
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed border-l-2 border-red-600 pl-4 py-1 italic bg-white/5 rounded-r-lg">
              {article.excerpt}
            </p>

            {/* Author Byline */}
            <div className="flex items-center justify-between py-4 border-y border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-600/20 border border-red-500/30 flex items-center justify-center p-1.5 shadow-md">
                  <img
                    src={article.author.avatar}
                    alt={article.author.name}
                    className="w-full h-full object-contain filter drop-shadow-[0_0_4px_rgba(255,30,39,0.8)]"
                  />
                </div>
                <div>
                  <div className="font-heading font-bold text-white uppercase text-sm">{article.author.name}</div>
                  <div className="text-xs text-red-400">{article.author.role} • IMPAKT MMA Claremont</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] uppercase tracking-widest text-slate-400 font-bold hidden sm:inline-block">Location:</span>
                <span className="text-xs font-semibold text-slate-200 bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">
                  Claremont, Cape Town
                </span>
              </div>
            </div>
          </header>

          {/* Hero Banner Image */}
          <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/10 mb-12 shadow-2xl">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-80 sm:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F] via-transparent to-transparent opacity-60" />
          </div>

          {/* Article Main Body Content */}
          <article className="prose prose-invert max-w-none mb-16 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
            {article.content.split('\n\n').map((paragraph, index) => {
              const trimmed = paragraph.trim();
              if (!trimmed) return null;

              // Top level H1 (already rendered above)
              if (trimmed.startsWith('# ')) {
                return null;
              }

              // H2 Header
              if (trimmed.startsWith('## ')) {
                return (
                  <h2
                    key={index}
                    className="text-2xl sm:text-3xl font-heading font-bold text-white uppercase tracking-wider mt-10 mb-4 pt-4 border-t border-white/10 flex items-center gap-2 text-red-400"
                  >
                    <span>{trimmed.replace('## ', '')}</span>
                  </h2>
                );
              }

              // H3 Header
              if (trimmed.startsWith('### ')) {
                return (
                  <h3
                    key={index}
                    className="text-xl font-heading font-bold text-white uppercase tracking-wide mt-6 mb-3 text-slate-100"
                  >
                    {trimmed.replace('### ', '')}
                  </h3>
                );
              }

              // Markdown Horizontal Rule
              if (trimmed === '---') {
                return <hr key={index} className="my-8 border-white/10" />;
              }

              // Code / Diagram block
              if (trimmed.startsWith('```')) {
                const codeContent = trimmed.replace(/```[a-z]*/g, '').trim();
                return (
                  <pre
                    key={index}
                    className="p-4 rounded-xl bg-black/60 border border-white/10 font-mono text-xs text-red-400 overflow-x-auto my-6"
                  >
                    <code>{codeContent}</code>
                  </pre>
                );
              }

              // Markdown Table
              if (trimmed.includes('|') && trimmed.includes('\n')) {
                const rows = trimmed.split('\n').filter((r) => r.trim() && !r.includes('---'));
                if (rows.length > 0) {
                  const headerCols = rows[0].split('|').map((c) => c.trim()).filter(Boolean);
                  const bodyRows = rows.slice(1);
                  return (
                    <div key={index} className="overflow-x-auto my-6 rounded-xl border border-white/10">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="bg-white/10 border-b border-white/10">
                            {headerCols.map((col, cIdx) => (
                              <th key={cIdx} className="p-3 font-heading font-bold uppercase text-white tracking-wider">
                                {col}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {bodyRows.map((bRow, rIdx) => {
                            const cells = bRow.split('|').map((c) => c.trim()).filter(Boolean);
                            return (
                              <tr key={rIdx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                {cells.map((cell, cellIdx) => (
                                  <td key={cellIdx} className="p-3 text-slate-300">
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  );
                }
              }

              // Bullet list
              if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
                const items = trimmed.split('\n').map((item) => item.replace(/^[\*\-]\s+/, '').trim());
                return (
                  <ul key={index} className="space-y-2 my-4 pl-2">
                    {items.map((it, itIdx) => (
                      <li key={itIdx} className="flex items-start gap-2.5 text-slate-300 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2" />
                        <span>
                          {it.split('**').map((part, pIdx) =>
                            pIdx % 2 === 1 ? <strong key={pIdx} className="text-white font-semibold">{part}</strong> : part
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                );
              }

              // Numbered list
              if (/^\d+\.\s+/.test(trimmed)) {
                const items = trimmed.split('\n').map((item) => item.replace(/^\d+\.\s+/, '').trim());
                return (
                  <ol key={index} className="space-y-2.5 my-4 pl-2">
                    {items.map((it, itIdx) => (
                      <li key={itIdx} className="flex items-start gap-3 text-slate-300 text-sm">
                        <span className="w-6 h-6 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 font-mono text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">
                          {itIdx + 1}
                        </span>
                        <span className="pt-0.5">
                          {it.split('**').map((part, pIdx) =>
                            pIdx % 2 === 1 ? <strong key={pIdx} className="text-white font-semibold">{part}</strong> : part
                          )}
                        </span>
                      </li>
                    ))}
                  </ol>
                );
              }

              // Normal text paragraph with links & bold
              return (
                <p key={index} className="my-4 leading-relaxed">
                  {paragraph.split('**').map((part, pIdx) => {
                    if (pIdx % 2 === 1) {
                      return <strong key={pIdx} className="text-white font-semibold">{part}</strong>;
                    }
                    if (part.includes('[') && part.includes('](')) {
                      // Simple regex parser for markdown links
                      const linkRegex = /\[(.*?)\]\((.*?)\)/g;
                      const elements = [];
                      let lastIndex = 0;
                      let match;
                      while ((match = linkRegex.exec(part)) !== null) {
                        if (match.index > lastIndex) {
                          elements.push(part.substring(lastIndex, match.index));
                        }
                        elements.push(
                          <Link
                            key={match.index}
                            href={match[2]}
                            className="text-red-400 underline hover:text-red-300 font-semibold transition-colors"
                          >
                            {match[1]}
                          </Link>
                        );
                        lastIndex = match.index + match[0].length;
                      }
                      if (lastIndex < part.length) {
                        elements.push(part.substring(lastIndex));
                      }
                      return <span key={pIdx}>{elements}</span>;
                    }
                    return part;
                  })}
                </p>
              );
            })}
          </article>

          {/* In-Content Sticky CTA Callout Box */}
          <div className="glass-panel p-8 rounded-3xl border border-red-500/40 bg-gradient-to-br from-[#161826] via-[#0E101A] to-[#0A0B12] mb-16 shadow-2xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-500">
                  <Flame className="w-4 h-4 fill-red-500" />
                  <span>Train at IMPAKT Claremont</span>
                </div>
                <h3 className="text-2xl font-heading font-bold text-white uppercase tracking-wide">
                  Ready to test your skills on the mats?
                </h3>
                <p className="text-xs text-slate-300 max-w-md">
                  Join our classes in Claremont, Cape Town. Choose our flexible <strong>R100 Drop-In pass</strong> or claim a <strong>Free Trial Class</strong> with zero obligation.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-xl shadow-red-600/30 transition-all border border-red-500/50 text-center"
                >
                  Claim Free Trial
                </Link>
                <Link
                  href="/classes"
                  className="w-full sm:w-auto px-5 py-3.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-center"
                >
                  View Schedule
                </Link>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          {article.faqs && article.faqs.length > 0 && (
            <div className="glass-panel p-8 rounded-2xl border border-white/10 mb-16 space-y-6">
              <h3 className="text-2xl font-heading font-bold text-white uppercase flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-red-500" />
                <span>Frequently Asked Questions</span>
              </h3>

              <div className="space-y-4">
                {article.faqs.map((faq, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
                    <h4 className="font-heading font-bold text-white uppercase text-base text-red-400">
                      {faq.q}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Articles Cross-Linking Grid */}
          <div className="border-t border-white/10 pt-12">
            <h3 className="text-xl font-heading font-bold text-white uppercase mb-6 tracking-wider flex items-center gap-2">
              <Shield className="w-5 h-5 text-red-500" />
              <span>Continue Reading: Other Pillar Guides</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="glass-panel glass-panel-hover p-5 rounded-2xl border border-white/10 flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-red-400 block mb-2">
                      {rel.category}
                    </span>
                    <h4 className="font-heading font-bold text-white uppercase group-hover:text-red-400 transition-colors text-base mb-2">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                      {rel.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center text-xs font-bold text-red-500 uppercase tracking-wider gap-1 group-hover:translate-x-1 transition-transform pt-2 border-t border-white/5">
                    <span>Read Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
