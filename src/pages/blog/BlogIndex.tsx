import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import Navbar from '@/components/studio/Navbar';
import Footer from '@/components/studio/Footer';
import SEO from '@/components/SEO';

const posts = [
  {
    slug: 'webdesign-kosten-schweiz-2026',
    category: 'Webdesign',
    title: 'Webdesign Kosten Schweiz 2026: Was kostet eine professionelle Website?',
    excerpt:
      'Von CHF 500 bis CHF 50.000 – die Preisspanne für Websites ist enorm. Was steckt dahinter, was braucht Ihr KMU wirklich, und wo lohnt sich die Investition?',
    date: '12. Mai 2026',
    readingTime: '6 Min. Lesezeit',
  },
  {
    slug: 'website-handwerker-erstellen-lassen',
    category: 'Handwerk & Bau',
    title: 'Website für Handwerker erstellen lassen: Der komplette Guide 2026',
    excerpt:
      'Handwerksbetriebe verlieren täglich Aufträge, weil ihre Website Interessenten nicht überzeugt. Was eine gute Handwerker-Website ausmacht – und was sie kosten sollte.',
    date: '5. Mai 2026',
    readingTime: '8 Min. Lesezeit',
  },
  {
    slug: 'conversion-rate-optimieren-kmu',
    category: 'Conversion',
    title: 'Conversion Rate optimieren für KMUs: 7 bewährte Strategien',
    excerpt:
      'Die Conversion Rate entscheidet darüber, ob Ihre Website ein Kostenfaktor oder ein Umsatztreiber ist. 7 Strategien, die für KMUs in der DACH-Region messbar wirken.',
    date: '28. April 2026',
    readingTime: '7 Min. Lesezeit',
  },
];

const BlogIndex: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col">
      <SEO
        title="Blog – Webdesign & Conversion für KMUs | Studio100"
        description="Praxiswissen zu Webdesign, Conversion-Optimierung und digitaler Sichtbarkeit für KMUs in der DACH-Region. Kostenlos, ohne Buzzwords."
        canonical="/blog"
      />
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-gradient-to-b from-white via-neutral-50 to-white">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-100 via-blue-50 to-transparent blur-3xl opacity-60 pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase mb-4">
              Studio100 Blog
            </div>
            <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-neutral-900 leading-[1.05]">
              Webdesign & Conversion<br />
              <span className="text-neutral-400">für KMUs.</span>
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-neutral-600 max-w-2xl leading-relaxed">
              Praxiswissen ohne Buzzwords. Alles, was Sie über Webdesign, Conversion-Optimierung
              und digitale Sichtbarkeit in der DACH-Region wissen müssen.
            </p>
          </div>
        </section>

        {/* Articles */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-3xl border border-neutral-200 bg-white hover:border-neutral-900 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  {/* Card top accent */}
                  <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 to-blue-400" />

                  <div className="flex flex-col flex-1 p-8 lg:p-10">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100">
                        {post.category}
                      </span>
                    </div>

                    <h2 className="text-xl font-semibold text-neutral-900 leading-snug group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-[15px] text-neutral-600 leading-relaxed flex-1">
                      {post.excerpt}
                    </p>

                    <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-neutral-400">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={12} /> {post.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={12} /> {post.readingTime}
                        </span>
                      </div>
                      <ArrowRight
                        size={16}
                        className="text-neutral-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all"
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-24 bg-neutral-50 border-t border-neutral-100">
          <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900">
              Ihre Website generiert zu wenig Anfragen?
            </h2>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              Starten Sie mit einer kostenlosen Analyse – und erfahren Sie in 24 Stunden,
              wie viel Potenzial Ihre Website aktuell verschenkt.
            </p>
            <div className="mt-8">
              <Link
                to="/#analysis"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-700 transition-all"
              >
                Kostenlose Website-Analyse starten
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogIndex;
