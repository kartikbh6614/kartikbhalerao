import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ZoomIn, ArrowUp } from "lucide-react";
import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";
import { getCaseStudyById } from "@/data/caseStudies";
import { Badge } from "@/components/ui/badge";
import { ImageLightbox } from "@/components/ImageLightbox";
import { RelatedCaseStudies } from "@/components/RelatedCaseStudies";

const A4_GALLERY_IDS = ['ether-prd', 'gullak-fintech', 'google-pay-prd', 'cloudeagle-ai', 'metis-improvement', 'codeant-ai'];

const CaseStudyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const caseStudy = id ? getCaseStudyById(id) : undefined;
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(Math.min(progress, 100));
      setShowBackToTop(scrollTop > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  if (!caseStudy) {
    return (
      <div className="min-h-screen w-full text-foreground relative bg-white dark:bg-zinc-900">
        <Header />
        <main className="pt-32 text-center">
          <h1 className="text-3xl font-bold mb-4">Case Study Not Found</h1>
          <Link to="/case-studies" className="text-blue-600 hover:underline">← Back to Case Studies</Link>
        </main>
        <FooterSection />
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full text-foreground relative bg-white dark:bg-zinc-900">

      {/* Reading Progress Bar */}
      <div className="fixed top-16 left-0 right-0 z-40 h-0.5 bg-slate-200 dark:bg-zinc-800 overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${caseStudy.bgGradient} transition-all duration-150 ease-out`}
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <Header />

      <main className="pt-24 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Back Button */}
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to Case Studies
          </Link>

          {/* Hero Image */}
          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg shadow-black/10 dark:shadow-black/40 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800">
            <img
              src={caseStudy.image}
              alt={caseStudy.title}
              className="w-full object-cover"
            />
          </div>

          {/* Title & Tags */}
          <div className="mb-10">
            <div className="flex flex-wrap gap-2 mb-3">
              {caseStudy.tags.map(tag => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-2">
              {caseStudy.title}
            </h1>
            <p className="text-slate-500 dark:text-zinc-400 text-lg">{caseStudy.subtitle}</p>
          </div>

          {/* Key Features & Tools */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Key Features */}
            <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200 dark:border-zinc-800 p-6 shadow-sm">
              <h2 className="text-base font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className={`w-1 h-5 rounded-full bg-gradient-to-b ${caseStudy.bgGradient} inline-block`} />
                Key Features
              </h2>
              <ul className="space-y-2.5">
                {caseStudy.keyFeatures.map(feature => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-slate-600 dark:text-zinc-400">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gradient-to-br ${caseStudy.bgGradient}`} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools */}
            <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200 dark:border-zinc-800 p-6 shadow-sm">
              <h2 className="text-base font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className={`w-1 h-5 rounded-full bg-gradient-to-b ${caseStudy.bgGradient} inline-block`} />
                Tools Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {caseStudy.tools.map(tool => (
                  <Badge
                    key={tool}
                    variant="secondary"
                    className="text-xs bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 border-0 hover:bg-slate-200 dark:hover:bg-zinc-700 transition-colors"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Gallery */}
          {caseStudy.gallery.length > 0 && (
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <ZoomIn className="w-5 h-5 text-slate-400 dark:text-zinc-500" />
                <div>
                  <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Gallery</h2>
                  <p className="text-xs text-slate-500 dark:text-zinc-500">Click any image to view full size</p>
                </div>
              </div>

              {A4_GALLERY_IDS.includes(id || '') ? (
                /* A4 Document Style */
                <div className="flex flex-col items-center gap-10">
                  {caseStudy.gallery.map((item, index) => (
                    <div
                      key={index}
                      className="group w-full max-w-4xl cursor-pointer"
                      onClick={() => openLightbox(index)}
                    >
                      <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.005]">
                        <div className="p-4 md:p-6 bg-gradient-to-br from-slate-50 to-white dark:from-zinc-900 dark:to-zinc-900">
                          <img
                            src={item.src}
                            alt={item.caption}
                            className="w-full h-auto object-contain rounded-lg"
                          />
                        </div>
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-12 h-12 rounded-full bg-white/90 dark:bg-zinc-900/90 flex items-center justify-center shadow-lg">
                            <ZoomIn className="w-5 h-5 text-slate-700 dark:text-zinc-200" />
                          </div>
                        </div>
                        {/* Page badge */}
                        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 dark:bg-zinc-900/90 border border-slate-200 dark:border-zinc-700 text-xs font-medium text-slate-600 dark:text-zinc-400 shadow-sm">
                          {index + 1} / {caseStudy.gallery.length}
                        </div>
                      </div>
                      {item.caption && (
                        <p className="text-sm text-slate-500 dark:text-zinc-500 mt-3 text-center">{item.caption}</p>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                /* Standard Grid */
                <div className="flex flex-col gap-6">
                  {caseStudy.gallery.map((item, index) => (
                    <div key={index} className="group cursor-pointer" onClick={() => openLightbox(index)}>
                      <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-lg transition-all duration-300">
                        <img
                          src={item.src}
                          alt={item.caption}
                          className="w-full aspect-video object-cover group-hover:scale-[1.02] transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-12 h-12 rounded-full bg-white/90 dark:bg-zinc-900/90 flex items-center justify-center shadow-lg">
                            <ZoomIn className="w-5 h-5 text-slate-700 dark:text-zinc-200" />
                          </div>
                        </div>
                        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 dark:bg-zinc-900/90 border border-slate-200 dark:border-zinc-700 text-xs font-medium text-slate-600 dark:text-zinc-400">
                          {index + 1} / {caseStudy.gallery.length}
                        </div>
                      </div>
                      {item.caption && (
                        <p className="text-sm text-slate-500 dark:text-zinc-500 mt-2 text-center">{item.caption}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </section>
          )}

          {/* Lightbox */}
          <ImageLightbox
            images={caseStudy.gallery}
            initialIndex={lightboxIndex}
            open={lightboxOpen}
            onOpenChange={setLightboxOpen}
          />

          {/* Related Case Studies */}
          <RelatedCaseStudies currentStudyId={id || ""} />
        </div>
      </main>

      <FooterSection />

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        title="Back to top"
        className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 shadow-lg flex items-center justify-center text-slate-600 dark:text-zinc-300 hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-400 transition-all duration-300 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-4 h-4" />
        {/* Progress ring */}
        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-slate-200 dark:text-zinc-700" />
          <circle
            cx="24" cy="24" r="22" fill="none"
            stroke="url(#topGrad)" strokeWidth="1.5" strokeLinecap="round"
            strokeDasharray={`${scrollProgress * 1.382} 138.2`}
          />
          <defs>
            <linearGradient id="topGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
      </button>
    </div>
  );
};

export default CaseStudyDetail;
