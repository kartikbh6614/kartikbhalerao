import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlogSidebar } from "./BlogSidebar";
import { BlogPostDetail } from "./BlogPostDetail";
import { BlogPost } from "@/data/blogPosts";
import type { SortOption } from "@/pages/Blog";
import { cn } from "@/lib/utils";

interface BlogLayoutProps {
  posts: BlogPost[];
  allPosts: BlogPost[];
  selectedPost: BlogPost | null;
  onPostClick: (post: BlogPost) => void;
  categories: Record<string, string>;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
  markdownContent: string;
  onBackToList: () => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  blogTheme: "light" | "dark" | "system";
  onThemeChange: (theme: "light" | "dark" | "system") => void;
  // New props for enhanced features
  bookmarkedPosts: number[];
  onToggleBookmark: (postId: number) => void;
  readPosts: number[];
  recentSearches: string[];
  onClearSearchHistory: () => void;
  onAddRecentSearch: (term: string) => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  viewMode: "list" | "archive";
  onViewModeChange: (mode: "list" | "archive") => void;
}

export const BlogLayout = ({
  posts,
  allPosts,
  selectedPost,
  onPostClick,
  categories,
  selectedCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
  markdownContent,
  onBackToList,
  sortBy,
  onSortChange,
  blogTheme,
  onThemeChange,
  bookmarkedPosts,
  onToggleBookmark,
  readPosts,
  recentSearches,
  onClearSearchHistory,
  onAddRecentSearch,
  isCollapsed,
  onToggleCollapse,
  viewMode,
  onViewModeChange,
}: BlogLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex min-h-screen relative">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed top-16 left-0 bottom-0 bg-background",
        "border-r border-border/50 z-50",
        "transform transition-all duration-300 ease-in-out",
        sidebarOpen ? "translate-x-0" : "-translate-x-full",
        "lg:translate-x-0 lg:static lg:top-0 lg:z-30",
        isCollapsed ? "w-16" : "w-80"
      )}>
        {/* Close Button for Mobile */}
        <div className="lg:hidden absolute top-3 right-3 z-10">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleSidebar}
            className="h-8 w-8 p-0 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Sidebar Content */}
        <div className="h-full overflow-hidden">
          <BlogSidebar
            posts={posts}
            allPosts={allPosts}
            selectedPost={selectedPost}
            onPostClick={(post) => {
              onPostClick(post);
              setSidebarOpen(false);
            }}
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={onCategoryChange}
            searchTerm={searchTerm}
            onSearchChange={onSearchChange}
            sortBy={sortBy}
            onSortChange={onSortChange}
            blogTheme={blogTheme}
            onThemeChange={onThemeChange}
            bookmarkedPosts={bookmarkedPosts}
            onToggleBookmark={onToggleBookmark}
            readPosts={readPosts}
            recentSearches={recentSearches}
            onClearSearchHistory={onClearSearchHistory}
            onAddRecentSearch={onAddRecentSearch}
            isCollapsed={isCollapsed}
            onToggleCollapse={onToggleCollapse}
            viewMode={viewMode}
            onViewModeChange={onViewModeChange}
          />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 transition-all duration-300">
        {/* Mobile Menu Button */}
        <div className="lg:hidden fixed top-20 left-4 z-40">
          <Button
            variant="outline"
            size="sm"
            onClick={toggleSidebar}
            className="bg-background/90 backdrop-blur-sm border-border/60 shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <Menu className="w-4 h-4" />
          </Button>
        </div>

        {/* Content Area */}
        <div className="min-h-screen bg-background">
          {selectedPost ? (
            <BlogPostDetail
              post={selectedPost}
              content={markdownContent}
              onBack={onBackToList}
            />
          ) : (
            <div className="flex flex-col items-center justify-center min-h-screen relative overflow-hidden">
              <style>{`
                @keyframes glow-pulse {
                  0%,100% { opacity: 0.5; transform: scale(1); }
                  50%     { opacity: 0.9; transform: scale(1.08); }
                }
                @keyframes arrow-left-bounce {
                  0%,100% { transform: translateX(0); opacity: 0.5; }
                  50%     { transform: translateX(-7px); opacity: 1; }
                }
                @keyframes chip-rise {
                  from { opacity: 0; transform: translateY(12px); }
                  to   { opacity: 1; transform: translateY(0); }
                }
              `}</style>

              {/* ── Background gradient mesh ── */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0"
                  style={{
                    background: `
                      radial-gradient(ellipse 55% 55% at 15% 25%, rgba(139,92,246,0.13) 0%, transparent 65%),
                      radial-gradient(ellipse 50% 55% at 85% 75%, rgba(59,130,246,0.13) 0%, transparent 65%),
                      radial-gradient(ellipse 40% 35% at 50% 50%, rgba(16,185,129,0.07) 0%, transparent 60%)
                    `,
                  }}
                />
                {/* fine grid */}
                <div className="absolute inset-0"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, rgb(148 163 184 / 0.07) 1px, transparent 1px),
                      linear-gradient(to bottom, rgb(148 163 184 / 0.07) 1px, transparent 1px)
                    `,
                    backgroundSize: '44px 44px',
                  }}
                />
              </div>



              {/* ── Central glass card ── */}
              <div className="relative z-10 mx-6">
                {/* Glow behind card */}
                <div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{ animation: 'glow-pulse 4s ease-in-out infinite', background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(139,92,246,0.18) 0%, transparent 70%)' }}
                />

                <div className="relative rounded-3xl border border-violet-200/40 dark:border-violet-700/25 bg-background/70 backdrop-blur-2xl shadow-2xl shadow-violet-500/10 px-10 py-10 max-w-md w-full text-center overflow-hidden">
                  {/* subtle inner gradient overlay */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500/5 via-transparent to-blue-500/5 pointer-events-none" />

                  {/* Icon */}
                  <div className="relative w-fit mx-auto mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl shadow-violet-500/35 ring-4 ring-violet-400/20">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                      </svg>
                    </div>
                    {/* live dot */}
                    <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
                      <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-background" />
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[1.6rem] font-bold bg-gradient-to-r from-violet-600 via-purple-500 to-blue-600 bg-clip-text text-transparent mb-2 leading-tight">
                    Pick an article
                  </h3>
                  <p className="text-sm text-muted-foreground mb-7 leading-relaxed">
                    {allPosts.length} articles on product strategy, leadership &amp; building great products.
                  </p>

                  {/* Quick-pick chips */}
                  <div className="flex flex-wrap gap-2 justify-center mb-7">
                    {allPosts.slice(0, 4).map((post, i) => {
                      const short = post.title.split(':')[0].trim();
                      return (
                        <button
                          key={post.id}
                          onClick={() => onPostClick(post)}
                          className="px-3 py-1.5 rounded-full bg-muted/70 hover:bg-violet-100 dark:hover:bg-violet-900/40 border border-border/60 hover:border-violet-300 dark:hover:border-violet-600 text-[11px] font-medium text-muted-foreground hover:text-violet-700 dark:hover:text-violet-300 transition-all duration-200 backdrop-blur-sm hover:shadow-sm hover:-translate-y-px active:translate-y-0"
                          style={{ animation: `chip-rise 0.4s ease-out both`, animationDelay: `${i * 0.07}s` }}
                        >
                          {short.length > 30 ? short.slice(0, 30) + '…' : short}
                        </button>
                      );
                    })}
                  </div>

                  {/* Arrow hint */}
                  <div className="flex items-center justify-center gap-1.5 text-muted-foreground/50">
                    <svg
                      style={{ animation: 'arrow-left-bounce 1.8s ease-in-out infinite' }}
                      xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="text-[11px] tracking-wide">Browse all articles in the sidebar</span>
                  </div>
                </div>
              </div>

            </div>
          )}
        </div>
      </main>
    </div>
  );
};
