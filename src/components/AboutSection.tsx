import { cn } from "@/lib/utils";

const GlassCard = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm",
        "transition-all duration-300 hover:shadow-md hover:-translate-y-0.5",
        className
      )}
    >
      {children}
    </div>
  );
};

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3">
    <span
      className="mt-[0.55rem] h-2 w-2 rounded-full flex-none"
      style={{ background: "linear-gradient(135deg, #22c55e, #3b82f6)" }}
      aria-hidden="true"
    />
    <span className="text-slate-600 dark:text-slate-300 leading-relaxed">{children}</span>
  </li>
);

export const AboutSection = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <div className="space-y-12">
        <div className="space-y-8">
          {/* Primary content card */}
          <GlassCard className="p-10 sm:p-12">
            <div className="space-y-6 mb-10">
              <p className="text-2xl text-foreground leading-relaxed font-medium">
                Hi there! 👋 I'm{" "}
                <span className="relative inline-block">
                  <span className="animate-gradient-text font-bold">
                    Kartik Bhalerao
                  </span>
                  <span className="absolute -bottom-1 left-0 right-0 h-1 rounded-full" style={{ background: "linear-gradient(90deg, #22c55e, #3b82f6, #8b5cf6)" }} />
                </span>
                , a Product Manager passionate about building user-centric products that
                drive real business impact. With a background in data analytics and
                product strategy, I specialize in translating complex problems into
                simple, scalable solutions.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                My experience spans across fintech, SaaS, and AI-enabled platforms,
                where I've led cross-functional teams through the entire product
                lifecycle—from discovery to launch. I'm a strong advocate of
                hypothesis-driven development and love using data, user insights, and
                rapid experimentation (A/B testing, MVPs) to inform product
                decisions.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Beyond product building, I document my thought process, case studies,
                and learnings through detailed blogs and product breakdowns. I'm also
                exploring the intersection of AI and product management to build
                smarter tools that empower PMs and teams.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                If you're equally obsessed with building meaningful products or just
                want to talk product, let's connect—I'm always up for great
                conversations!
              </p>
            </div>
          </GlassCard>

          {/* Experience Section */}
          <GlassCard className="p-10 sm:p-12">
            <h2 className="text-3xl font-black tracking-tight mb-10">
              <span className="text-slate-900 dark:text-white">Work </span>
              <span className="animate-gradient-text">Experience</span>
            </h2>

            <div className="space-y-10">
              {/* Decision Machine */}
              <article className="relative pl-8" style={{ borderLeft: "2px solid transparent", borderImage: "linear-gradient(180deg, #22c55e, #3b82f6) 1" }}>
                {/* Gradient dot */}
                <div className="absolute -left-[7px] top-1 w-3.5 h-3.5 rounded-full shadow-md" style={{ background: "linear-gradient(135deg, #22c55e, #3b82f6)" }} />

                <header className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Product Analyst</h3>
                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                    Decision Machine · Pune, India · June 2024 – Present
                  </p>
                  <span className="inline-block text-xs font-semibold text-white px-3 py-0.5 rounded-full" style={{ background: "linear-gradient(90deg, #22c55e, #3b82f6)" }}>
                    Current
                  </span>
                </header>

                <div className="mt-6 space-y-7">
                  {[
                    {
                      icon: "🔍",
                      label: "Market & Insights",
                      points: [
                        "Benchmarked 12 competing fintech products on features, pricing, and app-store sentiment to map the competitive landscape.",
                        "Identified a clear whitespace: Tier-2 city users underserved by existing credit-awareness tools — directly shaping the product's differentiation angle.",
                        "Led 20+ user interviews and diary studies to surface real pain points around credit scores, loan eligibility, and savings discipline.",
                        "Synthesized findings into actionable personas (e.g., 'First-Time Borrower', 'Aspirational Saver') used across design and engineering sprints.",
                      ],
                    },
                    {
                      icon: "📋",
                      label: "Product Definition",
                      points: [
                        "Authored end-to-end PRDs covering problem context, success metrics, edge cases, and acceptance criteria — keeping engineering and design aligned.",
                        "Broke down epics into user stories with clear JTBD framing, reducing ambiguity during sprint planning.",
                        "Ran RICE-based prioritization workshops to align stakeholders on what ships in V1 vs. what gets parked in the backlog.",
                        "Defined MVP scope around three core flows: credit score explainer, savings nudge engine, and loan eligibility simulator.",
                      ],
                    },
                    {
                      icon: "🗺️",
                      label: "Roadmap",
                      points: [
                        "Built and owned a 6-month rolling roadmap, broken into discovery, build, and validation phases per quarter.",
                        "Delivered V1 in under 8 weeks by sequencing dependencies early and cutting low-impact features after prioritization.",
                        "Set up a Now / Next / Later framework to communicate roadmap intent to leadership without committing to fixed dates prematurely.",
                        "Introduced fortnightly roadmap reviews to incorporate user feedback, bug severity, and business priorities in near real-time.",
                      ],
                    },
                    {
                      icon: "🚀",
                      label: "Go-To-Market",
                      points: [
                        "Defined target segments and crafted positioning around trust and simplicity — two attributes competitors consistently failed on in user reviews.",
                        "Co-authored launch messaging with marketing, ensuring product copy reflected real user language gathered during interviews.",
                        "Set up a closed beta with 200+ early users, structured onboarding flows, and tracked activation and D7 retention as leading indicators.",
                        "Built the GTM readiness checklist covering support docs, escalation paths, analytics instrumentation, and rollback criteria.",
                      ],
                    },
                    {
                      icon: "📈",
                      label: "Metrics & Impact",
                      points: [
                        "Reduced early-stage churn by 22% after redesigning the onboarding flow based on drop-off data from Mixpanel.",
                        "Improved D7 retention by 18% within 6 weeks of shipping the savings nudge engine.",
                        "Drove a 3.2× ROI on the beta cohort by optimising the credit score explainer flow, reducing support tickets by 35%.",
                        "Achieved 78% feature adoption on MVP core flows within the first month post-launch.",
                      ],
                    },
                  ].map((aspect, idx, arr) => (
                    <div key={aspect.label}>
                      {/* Aspect header */}
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className="w-1 h-5 rounded-full flex-shrink-0"
                          style={{ background: "linear-gradient(180deg, #22c55e, #3b82f6)" }}
                        />
                        <h4 className="text-base font-bold text-slate-900 dark:text-white">
                          {aspect.label}
                        </h4>
                        <div className="flex-1 h-px bg-gradient-to-r from-slate-200 to-transparent dark:from-slate-700 dark:to-transparent" />
                      </div>

                      {/* Bullet points */}
                      <ul className="space-y-1 pl-4">
                        {aspect.points.map((point, i) => (
                          <li
                            key={i}
                            className="group flex items-start gap-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed rounded-lg px-2 py-1.5 -mx-2 transition-colors duration-150 hover:bg-slate-50 dark:hover:bg-white/5"
                          >
                            <span
                              className="mt-[0.55rem] w-1.5 h-1.5 rounded-full flex-shrink-0 transition-transform duration-150 group-hover:scale-125"
                              style={{ background: "linear-gradient(135deg, #22c55e, #3b82f6)" }}
                            />
                            {point}
                          </li>
                        ))}
                      </ul>

                      {idx < arr.length - 1 && (
                        <div className="mt-6 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-slate-700" />
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {["Fintech", "B2C Product", "User Research", "PRD Writing", "Mixpanel", "A/B Testing", "Personal Finance", "AI Integration", "Product Analytics"].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-50 dark:bg-zinc-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-zinc-700 hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all duration-150 cursor-default"
                    >
                      <span className="text-slate-300 dark:text-slate-600 font-normal">#</span>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>

              {/* Divider */}
              <div className="w-full h-px" style={{ background: "linear-gradient(90deg, transparent, #3b82f6 40%, #8b5cf6 60%, transparent)" }} />

              {/* Ocius */}
              <article className="relative pl-8" style={{ borderLeft: "2px solid transparent", borderImage: "linear-gradient(180deg, #3b82f6, #8b5cf6) 1" }}>
                <div className="absolute -left-[7px] top-1 w-3.5 h-3.5 rounded-full shadow-md" style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6)" }} />

                <header className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Product Manager</h3>
                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                    Ocius · Remote · Jan 2024 – May 2024
                  </p>
                  <span className="inline-block text-xs font-semibold text-white px-3 py-0.5 rounded-full" style={{ background: "linear-gradient(90deg, #3b82f6, #8b5cf6)" }}>
                    Completed
                  </span>
                </header>

                <ul className="mt-5 space-y-3">
                  <Bullet>Took ownership of building an internal analytics dashboard to help sales and marketing teams track campaign performance and lead conversions.</Bullet>
                  <Bullet>Worked closely with data and medical affairs to gather requirements and prioritize features that solved real user pain points.</Bullet>
                  <Bullet>Translated scattered requests into clear user stories and wireframes to speed up dev collaboration.</Bullet>
                  <Bullet>Set up a lightweight feedback loop with stakeholders to ship faster and iterate based on real usage.</Bullet>
                  <Bullet>Automated recurring reports with SQL to replace manual Excel-heavy workflows.</Bullet>
                </ul>

                <div className="mt-8 flex flex-wrap gap-2">
                  {["Analytics Dashboard", "Cross-functional", "Data Analytics", "User Stories", "Wireframing", "SQL", "Stakeholders", "Process Automation", "HealthTech"].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-50 dark:bg-zinc-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-zinc-700 hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all duration-150 cursor-default"
                    >
                      <span className="text-slate-300 dark:text-slate-600 font-normal">#</span>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </div>
          </GlassCard>
        </div>


        {/* Call to Action */}
        <div className="text-center mt-16">
          <GlassCard className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Want to see more of my work?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              These case studies represent just a glimpse of my product management
              approach. Let's discuss how I can help drive your product's success.
            </p>
            <button
              className="inline-flex items-center justify-center rounded-xl px-8 py-3 font-semibold bg-black text-white hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-slate-100 shadow-sm hover:scale-[1.02] transition-all duration-200"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/kartik-bhalerao/",
                  "_blank"
                )
              }
            >
              Let's Talk
            </button>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
