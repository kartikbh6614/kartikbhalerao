import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";

const CaseStudies = () => {
  return (
    <div className="min-h-screen w-full text-foreground relative bg-white dark:bg-zinc-900">

      <div className="relative z-10">
        <Header />
        <main className="pt-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
            <CaseStudiesSection />
          </div>
        </main>
        <FooterSection />
      </div>
    </div>
  );
};

export default CaseStudies;
