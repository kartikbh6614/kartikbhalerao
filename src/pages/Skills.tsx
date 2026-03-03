import { Header } from "@/components/Header";
import { SkillsSection } from "@/components/SkillsSection";
import { ScrollArea } from "@/components/ui/scroll-area";

const Skills = () => {
  return (
    <div className="min-h-screen w-full text-foreground relative bg-white dark:bg-zinc-900">

      {/* Interactive Header */}
      <div className="relative z-10">
        <Header />

        {/* Main Content */}
        <div className="min-h-screen pt-20">
          <ScrollArea className="h-full">
            <div className="px-4 sm:px-6 lg:px-8 py-8">
              <SkillsSection />
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default Skills;
