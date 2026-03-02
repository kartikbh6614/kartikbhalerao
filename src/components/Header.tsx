
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ThemeToggle } from '@/components/ThemeToggle';
import { blogPosts } from '@/data/blogPosts';

const skillCategories = [
  { title: "Product Strategy",      description: "Discovery, roadmaps, go-to-market"   },
  { title: "Data & Analytics",      description: "Metrics, A/B testing, KPI tracking"  },
  { title: "User Experience",       description: "Research, wireframing, usability"     },
  { title: "Technical Leadership",  description: "Agile, API design, system architecture"},
  { title: "AI Tools",              description: "OpenAI, Anthropic, Zapier, n8n"       },
  { title: "Design & Wireframing",  description: "Figma, Canva, Sketch, Miro"           },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [blogDropdownOpen, setBlogDropdownOpen] = useState(false);
  const [skillsDropdownOpen, setSkillsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'blog') {
      navigate('/blog');
      return;
    }
    
    if (sectionId === 'skills') {
      navigate('/skills');
      return;
    }

    if (sectionId === 'contact') {
      navigate('/contact');
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleTitleClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b bg-white dark:bg-zinc-900 ${
        isScrolled
          ? 'border-gray-200 dark:border-gray-800 shadow-sm dark:shadow-gray-900'
          : 'border-transparent'
      }`}
    >
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo/Name */}
          <button
            onClick={handleTitleClick}
            className="group relative text-xl font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-500 flex items-center gap-3"
          >
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-2xl group-hover:shadow-blue-500/40 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                <img
                  src="/lovable-uploads/profile-header.jpg"
                  alt="Kartik Bhalerao"
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>
              {/* Enhanced glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-indigo-600/30 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-xl blur-2xl opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
            </div>
            <span className="relative">
              Kartik Bhalerao
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/25 to-purple-600/25 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </span>
          </button>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {/* Enhanced Skills Button */}
            {/* Skills Button with dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSkillsDropdownOpen(true)}
              onMouseLeave={() => setSkillsDropdownOpen(false)}
            >
              <button
                onClick={() => scrollToSection('skills')}
                className="group relative px-8 py-3 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-2xl transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/15 dark:bg-white/8 backdrop-blur-2xl rounded-2xl border border-white/30 dark:border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/25 to-purple-500/25 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-all duration-700"></div>
                <span className="relative z-10 tracking-wide">Skills</span>
              </button>

              {/* Dropdown */}
              {skillsDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 rounded-2xl border border-border/50 bg-white dark:bg-zinc-900 shadow-2xl shadow-black/10 dark:shadow-black/30 overflow-hidden z-50">
                  {/* Header */}
                  <div className="px-4 py-3 border-b border-border/40">
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">Skill Areas</p>
                  </div>
                  {/* Categories */}
                  <div className="py-1.5">
                    {skillCategories.map((cat, i) => (
                      <button
                        key={i}
                        onClick={() => scrollToSection('skills')}
                        className="w-full flex flex-col px-4 py-2.5 hover:bg-slate-50 dark:hover:bg-zinc-800 transition-colors duration-150 text-left group/item"
                      >
                        <span className="text-[13px] font-medium text-foreground group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 leading-snug transition-colors">
                          {cat.title}
                        </span>
                        <span className="text-[11px] text-muted-foreground mt-0.5">{cat.description}</span>
                      </button>
                    ))}
                  </div>
                  {/* Footer */}
                  <div className="px-4 py-2.5 border-t border-border/40">
                    <button
                      onClick={() => scrollToSection('skills')}
                      className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      View all skills →
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            {/* Blog Button with dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setBlogDropdownOpen(true)}
              onMouseLeave={() => setBlogDropdownOpen(false)}
            >
              <button
                onClick={() => scrollToSection('blog')}
                className="group relative px-8 py-3 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium rounded-2xl transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/15 dark:bg-white/8 backdrop-blur-2xl rounded-2xl border border-white/30 dark:border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/25 to-teal-500/25 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-all duration-700"></div>
                <span className="relative z-10 tracking-wide">Blog</span>
              </button>

              {/* Dropdown */}
              {blogDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 rounded-2xl border border-border/50 bg-white dark:bg-zinc-900 shadow-2xl shadow-black/10 dark:shadow-black/30 overflow-hidden z-50">
                  {/* Header */}
                  <div className="px-4 py-3 border-b border-border/40">
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">Articles</p>
                  </div>
                  {/* Posts */}
                  <div className="py-1.5">
                    {blogPosts.map(post => (
                      <button
                        key={post.id}
                        onClick={() => navigate(`/blog?id=${post.id}`)}
                        className="w-full flex flex-col px-4 py-2.5 hover:bg-slate-50 dark:hover:bg-zinc-800 transition-colors duration-150 text-left group/item"
                      >
                        <span className="text-[13px] font-medium text-foreground group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 leading-snug line-clamp-1 transition-colors">
                          {post.title}
                        </span>
                        <span className="text-[11px] text-muted-foreground mt-0.5 capitalize">{post.category}</span>
                      </button>
                    ))}
                  </div>
                  {/* Footer */}
                  <div className="px-4 py-2.5 border-t border-border/40">
                    <button
                      onClick={() => navigate('/blog')}
                      className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      View all articles →
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Enhanced Contact Button */}
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative px-8 py-3 text-slate-700 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 font-medium rounded-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Multi-layer glass background */}
              <div className="absolute inset-0 bg-white/15 dark:bg-white/8 backdrop-blur-2xl rounded-2xl border border-white/30 dark:border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Enhanced gradient layers */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/15 to-pink-500/15 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent dark:from-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Enhanced glow effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/25 to-pink-500/25 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-all duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-pink-400/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-50 transition-all duration-1000"></div>
              
              <span className="relative z-10 tracking-wide">Contact</span>
            </button>

            {/* Theme Toggle */}
            <ThemeToggle />
          </nav>

          {/* Enhanced Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="group relative p-3 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-500 rounded-2xl overflow-hidden"
            >
              {/* Enhanced glass background */}
              <div className="absolute inset-0 bg-white/15 dark:bg-white/8 backdrop-blur-2xl rounded-2xl border border-white/30 dark:border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-1 pb-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900">
            <div className="py-4 px-2">
              <nav className="flex flex-col space-y-3">
                {/* Enhanced Mobile Skills Button */}
                <button
                  onClick={() => scrollToSection('skills')}
                  className="group relative px-8 py-4 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-2xl transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/15 dark:bg-white/8 backdrop-blur-2xl rounded-2xl border border-white/30 dark:border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-700"></div>
                  
                  <span className="relative z-10 tracking-wide">Skills</span>
                </button>
                
                {/* Enhanced Mobile Blog Button */}
                <button
                  onClick={() => scrollToSection('blog')}
                  className="group relative px-8 py-4 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium rounded-2xl transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/15 dark:bg-white/8 backdrop-blur-2xl rounded-2xl border border-white/30 dark:border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-700"></div>
                  
                  <span className="relative z-10 tracking-wide">Blog</span>
                </button>

                {/* Enhanced Mobile Contact Button */}
                <button
                  onClick={() => scrollToSection('contact')}
                  className="group relative px-8 py-4 text-slate-700 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 font-medium rounded-2xl transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/15 dark:bg-white/8 backdrop-blur-2xl rounded-2xl border border-white/30 dark:border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/15 to-pink-500/15 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-700"></div>
                  
                  <span className="relative z-10 tracking-wide">Contact</span>
                </button>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
