import { AboutSection } from "@/components/AboutSection";
import { FooterSection } from "@/components/FooterSection";
import { Header } from "@/components/Header";

const About = () => {
  return (
    <div className="min-h-screen w-full text-foreground relative bg-white dark:bg-zinc-900">

      {/* Header */}
      <Header />

      <div className="relative z-10 pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          {/* About Me Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
              About <span className="animate-gradient-text">Me</span>
            </h1>
          </div>

          {/* About Section Content */}
          <AboutSection />
        </div>

        <FooterSection />
      </div>
    </div>
  );
};

export default About;

