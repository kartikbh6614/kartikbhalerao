import { useState } from "react";
import { ChevronDown, ChevronUp, Lightbulb, Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

type SimpleDetail = { title: string; description: string };
type AspectDetail = { phase: string; icon: string; points: string[] };
type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  gradient: string;
  status: string;
  details?: SimpleDetail[];
  aspects?: AspectDetail[];
};

export const ExperienceSection = () => {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const experiences: Experience[] = [
    {
      title: "Product Analyst",
      company: "Decision Machine",
      location: "Pune (full-time)",
      period: "June 2024 - Present",
      highlights: [
        "🔍 Market & Insights",
        "🗺️ Roadmap Planning",
        "🚀 Go-To-Market",
        "🏗️ Product Definition",
      ],
      gradient: "from-blue-500 to-blue-700",
      status: "Current",
      aspects: [
        {
          phase: "Market & Insights",
          icon: "🔍",
          points: [
            "Benchmarked 12 competing fintech products across features, pricing models, and app-store sentiment to map the competitive landscape.",
            "Identified a clear whitespace: Tier-2 city users underserved by existing credit-awareness tools, directly shaping the product's differentiation angle.",
            "Led 20+ user interviews and diary studies to surface real pain points around credit scores, loan eligibility, and savings discipline.",
            "Synthesized qualitative findings into actionable personas (e.g., 'First-Time Borrower', 'Aspirational Saver') used across design and engineering sprints.",
            "Tracked macro fintech trends — BNPL adoption, RBI regulatory shifts, UPI credit expansion — to keep product bets aligned with market direction."
          ]
        },
        {
          phase: "Product Definition",
          icon: "📋",
          points: [
            "Authored end-to-end PRDs covering problem context, success metrics, edge cases, and acceptance criteria — keeping engineering and design in sync.",
            "Broke down epics into user stories with clear JTBD framing, reducing back-and-forth during sprint planning.",
            "Ran RICE-based prioritization workshops with stakeholders to align on what ships in V1 vs. what gets parked in the backlog.",
            "Defined the MVP scope around three core flows: credit score explainer, savings nudge engine, and loan eligibility simulator.",
            "Maintained a living requirements doc in Notion, versioned after every stakeholder review to prevent scope creep."
          ]
        },
        {
          phase: "Roadmap",
          icon: "🗺️",
          points: [
            "Built and owned a 6-month rolling roadmap, broken into discovery, build, and validation phases per quarter.",
            "Delivered V1 in under 8 weeks by sequencing dependencies early and cutting low-impact features after a brutal prioritization round.",
            "Set up a now / next / later framework to communicate roadmap intent to execs without committing to fixed dates prematurely.",
            "Introduced fortnightly roadmap reviews to incorporate user feedback, bug severity, and shifting business priorities in near real-time.",
            "Tracked roadmap health via velocity metrics and flagged blockers to leadership before they became delivery risks."
          ]
        },
        {
          phase: "Go-To-Market (GTM)",
          icon: "🚀",
          points: [
            "Defined target segments and crafted positioning around trust and simplicity — two attributes competitors consistently failed on in user reviews.",
            "Co-authored launch messaging with marketing, ensuring product copy reflected real user language gathered during interviews.",
            "Set up a closed beta with 200+ early users, structured onboarding flows, and tracked activation and D7 retention as leading indicators.",
            "Built the GTM readiness checklist covering support docs, escalation paths, analytics instrumentation, and rollback criteria.",
            "Gathered post-launch feedback through in-app surveys and support tickets to feed directly into the V1.1 backlog."
          ]
        }
      ]
    },
    {
      title: "Product Manager",
      company: "Ocius ",
      location: "Remote (Internship)",
      period: "Jan. 2024 - May 2024",
      highlights: [
        "🧭 Problem Discovery & Opportunity Mapping",
        "🎯 Vision & Product Strategy",
        "🔬 User Testing & Feedback Loops", 
        "🚀 Go-To-Market Readiness"
      ],
      gradient: "from-blue-600 to-indigo-700",
      status: "Completed",
      details: [
        {
          title: "Problem Discovery & Opportunity Mapping",
          description: "Identified a gap in how early-stage founders track customer feedback and prioritize features. Conducted 25+ interviews to validate the core problem and define the target segment."
        },
        {
          title: "Vision & Product Strategy",
          description: "Defined product vision: an AI-first prioritization and customer insight engine for solo builders and small teams. Mapped out 6-month roadmap with a focus on iterative releases."
        },
        {
          title: "User Testing & Feedback Loops",
          description: "Built a waitlist of 150+ users and ran 1:1 feedback sessions. Used Notion and Typeform to capture insights and measure feature resonance."
        },
        {
          title: "Go-To-Market Readiness",
          description: "Prepared for soft launch by setting up a landing page, pricing hypotheses, and early positioning tests via email campaigns and founder Slack groups."
        }
      ]
    }
  ];

  const cohorts = [
    {
      title: "HelloPM (Summer of Product)",
      period: "May 25 - June 25",
      description: "Intensive product management cohort focusing on hands-on learning",
      icon: "🎓"
    }
  ];

  const toggleExpanded = (index: number) => {
    setExpandedJob(expandedJob === index ? null : index);
  };

  return (
    <section className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
          Work Experience
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 mx-auto rounded-full"></div>
      </div>
      
      {/* Work Experience */}
      <div className="space-y-8 mb-20">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white/80 dark:bg-slate-800/60 border border-blue-200/50 dark:border-blue-700/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 backdrop-blur-sm"
          >
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
              <div className="flex-1 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl">
                    <Briefcase className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">
                      {exp.company}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-300">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 lg:mt-0">
                <span className={`inline-block bg-gradient-to-r ${exp.gradient} text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg`}>
                  {exp.status}
                </span>
              </div>
            </div>
            
            {/* Key Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {exp.highlights.map((highlight, i) => (
                <div
                  key={i}
                  className="flex items-start space-x-3 p-4 bg-white/60 dark:bg-slate-700/40 border border-blue-200/30 dark:border-blue-700/30 rounded-xl hover:bg-white/80 dark:hover:bg-slate-700/60 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <span className="text-lg flex-shrink-0 mt-0.5">
                    {highlight.split(' ')[0]}
                  </span>
                  <span className="text-slate-700 dark:text-slate-200 font-medium text-sm leading-relaxed">
                    {highlight.split(' ').slice(1).join(' ')}
                  </span>
                </div>
              ))}
            </div>

            {/* Expand/Collapse Button */}
            <button
              onClick={() => toggleExpanded(index)}
              className="w-full flex items-center justify-center space-x-2 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-200 group"
            >
              <Lightbulb className="w-5 h-5 text-blue-500 dark:text-blue-400" />
              <span className="text-blue-600 dark:text-blue-400 font-medium">
                {expandedJob === index ? 'Hide Details' : 'View Detailed Experience'}
              </span>
              {expandedJob === index ? (
                <ChevronUp className="w-5 h-5 text-blue-500 dark:text-blue-400 group-hover:scale-110 transition-transform" />
              ) : (
                <ChevronDown className="w-5 h-5 text-blue-500 dark:text-blue-400 group-hover:scale-110 transition-transform" />
              )}
            </button>

            {/* Detailed Experience */}
            {expandedJob === index && (
              <div className="mt-8 space-y-6 animate-fade-in">
                {exp.aspects
                  ? exp.aspects.map((aspect, i) => (
                      <div key={i} className="bg-white/60 dark:bg-slate-700/40 border border-blue-200/30 dark:border-blue-700/30 rounded-2xl p-6 border-l-4 border-l-blue-500 dark:border-l-blue-400 shadow-sm">
                        <h5 className="font-semibold text-blue-600 dark:text-blue-400 mb-4 text-lg flex items-center gap-2">
                          <span>{aspect.icon}</span>
                          {aspect.phase}
                        </h5>
                        <ul className="space-y-2.5">
                          {aspect.points.map((point, j) => (
                            <li key={j} className="flex items-start gap-2.5 text-slate-700 dark:text-slate-300 leading-relaxed">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 dark:bg-blue-500 flex-shrink-0" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))
                  : exp.details?.map((detail, i) => (
                      <div key={i} className="bg-white/60 dark:bg-slate-700/40 border border-blue-200/30 dark:border-blue-700/30 rounded-2xl p-6 border-l-4 border-l-blue-500 dark:border-l-blue-400 shadow-sm">
                        <h5 className="font-semibold text-blue-600 dark:text-blue-400 mb-3 text-lg">{detail.title}</h5>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{detail.description}</p>
                      </div>
                    ))}
              </div>
            )}
            
            {/* Add decorative line after Decision Machine experience */}
            {index === 0 && (
              <div className="mt-12 mb-4 flex items-center justify-center">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-300 dark:via-blue-600 to-transparent"></div>
                <div className="mx-4 p-2 bg-blue-50 dark:bg-blue-900/30 rounded-full">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse"></div>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-300 dark:via-blue-600 to-transparent"></div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Product Management Cohorts */}
      <div>
        <div className="text-center mb-12">
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Product Management Cohorts
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 gap-8">
          {cohorts.map((cohort, index) => (
            <div
              key={index}
              className="bg-white/80 dark:bg-slate-800/60 border border-indigo-200/50 dark:border-indigo-700/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300 backdrop-blur-sm hover:scale-[1.02]"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl">
                  <GraduationCap className="w-8 h-8 text-indigo-500 dark:text-indigo-400" />
                </div>
                
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{cohort.title}</h4>
                  <div className="flex items-center space-x-2 mb-4">
                    <Calendar className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium">{cohort.period}</p>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{cohort.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
