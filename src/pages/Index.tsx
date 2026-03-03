import { HeroSection } from "@/components/HeroSection";
import { FooterSection } from "@/components/FooterSection";
import { Header } from "@/components/Header";
import { WelcomeToast } from "@/components/WelcomeToast";

const Index = () => {
  return (
    <div className="min-h-screen w-full text-foreground relative bg-white dark:bg-zinc-900">


      <div className="relative z-10">
        <Header />
        <WelcomeToast />

        <div className="min-h-screen w-full flex items-center justify-center pt-16">
          <HeroSection />
        </div>

        <FooterSection />
      </div>
    </div>
  );
};

export default Index;

