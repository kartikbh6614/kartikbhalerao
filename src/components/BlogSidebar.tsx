import { useState, useMemo } from "react";
import {
  Search, Clock, BookOpen, Bookmark, BookmarkCheck, X, Mail, Send,
  PanelLeftClose, PanelLeft, Eye, Star, CheckCircle, Sparkles, History,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BlogPost } from "@/data/blogPosts";
import { cn } from "@/lib/utils";
import type { SortOption } from "@/pages/Blog";
import { toast } from "sonner";

interface BlogSidebarProps {
  posts: BlogPost[];
  allPosts: BlogPost[];
  selectedPost: BlogPost | null;
  onPostClick: (post: BlogPost) => void;
  categories: Record<string, string>;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  blogTheme: "light" | "dark" | "system";
  onThemeChange: (theme: "light" | "dark" | "system") => void;
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

export const BlogSidebar = ({
  posts,
  selectedPost,
  onPostClick,
  searchTerm,
  onSearchChange,
  bookmarkedPosts,
  onToggleBookmark,
  readPosts,
  recentSearches,
  onClearSearchHistory,
  onAddRecentSearch,
  isCollapsed,
  onToggleCollapse,
}: BlogSidebarProps) => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const totalReadingTime = useMemo(() =>
    posts.reduce((total, post) => {
      const match = post.readTime.match(/(\d+)/);
      return total + (match ? parseInt(match[1]) : 0);
    }, 0),
  [posts]);

  const handleSearchSubmit = () => {
    if (searchTerm.trim()) onAddRecentSearch(searchTerm.trim());
  };

  const handleNewsletterSubmit = async () => {
    if (!newsletterEmail.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    setIsSubscribing(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success("Successfully subscribed!");
    setNewsletterEmail("");
    setIsSubscribing(false);
  };

  // ── Collapsed state ───────────────────────────────────────────────────────
  if (isCollapsed) {
    return (
      <div className="h-full flex flex-col items-center py-4 px-2 bg-background border-r border-border/50">
        <Button
          variant="ghost" size="sm"
          onClick={onToggleCollapse}
          className="mb-5 p-2 hover:bg-primary/10"
        >
          <PanelLeft className="w-4 h-4 text-primary" />
        </Button>
        <div className="w-9 h-9 bg-gradient-to-br from-violet-500 to-blue-500 rounded-xl flex items-center justify-center mb-5 shadow-md shadow-violet-500/20">
          <BookOpen className="w-4 h-4 text-white" />
        </div>
        <div className="flex-1 flex flex-col gap-2 items-center w-full">
          {posts.slice(0, 6).map(post => (
            <button
              key={post.id}
              onClick={() => onPostClick(post)}
              title={post.title}
              className={cn(
                "w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold transition-all",
                selectedPost?.id === post.id
                  ? "bg-violet-500 text-white shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
              )}
            >
              {post.title.charAt(0)}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // ── Full sidebar ──────────────────────────────────────────────────────────
  return (
    <div className="h-full flex flex-col bg-background border-r border-border/50"
      style={{
        backgroundImage: 'radial-gradient(circle, rgb(100 116 139 / 0.15) 1.5px, transparent 1.5px)',
        backgroundSize: '22px 22px',
      }}
    >
      {/* ── Header ── */}
      <div className="px-4 pt-5 pb-4 border-b border-border/50">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            {/* Gradient icon */}
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/25">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-background flex items-center justify-center">
                <span className="text-[8px] text-white font-bold">{posts.length}</span>
              </div>
            </div>
            <div>
              <h2 className="text-sm font-bold text-foreground">Articles</h2>
              <p className="text-[10px] text-muted-foreground flex items-center gap-1 mt-0.5">
                <Clock className="w-2.5 h-2.5" />
                ~{totalReadingTime} min total
              </p>
            </div>
          </div>
          <Button
            variant="ghost" size="sm"
            onClick={onToggleCollapse}
            className="p-1.5 hover:bg-muted rounded-lg"
          >
            <PanelLeftClose className="w-4 h-4 text-muted-foreground" />
          </Button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
          <Input
            placeholder="Search articles…"
            value={searchTerm}
            onChange={e => onSearchChange(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleSearchSubmit()}
            className="pl-9 h-9 bg-background/80 border-border/60 focus-visible:ring-violet-400/40 rounded-xl text-xs"
          />
          {searchTerm && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="w-3 h-3" />
            </button>
          )}
        </div>

        {/* Recent searches */}
        {recentSearches.length > 0 && !searchTerm && (
          <div className="mt-2 flex flex-wrap gap-1 items-center">
            <History className="w-3 h-3 text-muted-foreground flex-shrink-0" />
            {recentSearches.slice(0, 3).map((term, i) => (
              <button
                key={i}
                onClick={() => onSearchChange(term)}
                className="px-2 py-0.5 text-[10px] bg-muted text-muted-foreground rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
              >
                {term}
              </button>
            ))}
            <button onClick={onClearSearchHistory} className="ml-auto text-muted-foreground hover:text-destructive transition-colors">
              <X className="w-3 h-3" />
            </button>
          </div>
        )}
      </div>

      {/* ── Divider label ── */}
      <div className="px-4 pt-4 pb-2">
        <div className="flex items-center gap-2">
          <div className="h-px flex-1 bg-gradient-to-r from-violet-400/50 to-transparent" />
          <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">All Posts</span>
          <div className="h-px flex-1 bg-gradient-to-l from-blue-400/50 to-transparent" />
        </div>
      </div>

      {/* ── Posts list ── */}
      <div className="flex-1 overflow-y-auto px-3 py-2 space-y-1.5">
        {posts.map(post => (
          <PostCard
            key={post.id}
            post={post}
            isSelected={selectedPost?.id === post.id}
            isRead={readPosts.includes(post.id)}
            isBookmarked={bookmarkedPosts.includes(post.id)}
            onPostClick={onPostClick}
            onToggleBookmark={onToggleBookmark}
          />
        ))}
        {posts.length === 0 && (
          <div className="text-center py-12 px-4">
            <div className="w-12 h-12 mx-auto mb-3 bg-muted rounded-xl flex items-center justify-center">
              <Search className="w-5 h-5 text-muted-foreground" />
            </div>
            <p className="text-xs font-medium text-muted-foreground">No articles found</p>
            <p className="text-[10px] text-muted-foreground mt-1">Try a different search term</p>
          </div>
        )}
      </div>

      {/* ── Newsletter footer ── */}
      <div className="px-4 py-4 border-t border-border/50 bg-background/60 backdrop-blur-sm">
        <div className="flex items-center gap-1.5 mb-2">
          <div className="w-5 h-5 bg-gradient-to-br from-violet-500 to-blue-500 rounded-md flex items-center justify-center">
            <Mail className="w-3 h-3 text-white" />
          </div>
          <span className="text-[11px] font-semibold text-foreground">Stay Updated</span>
        </div>
        <p className="text-[10px] text-muted-foreground mb-2.5 leading-relaxed">
          Get new articles delivered to your inbox.
        </p>
        <div className="flex gap-1.5">
          <Input
            type="email"
            placeholder="your@email.com"
            value={newsletterEmail}
            onChange={e => setNewsletterEmail(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleNewsletterSubmit()}
            className="h-8 text-xs bg-background/80 border-border/60 rounded-xl"
          />
          <Button
            size="sm"
            onClick={handleNewsletterSubmit}
            disabled={isSubscribing}
            className="h-8 w-8 p-0 flex-shrink-0 bg-gradient-to-br from-violet-500 to-blue-500 text-white hover:opacity-90 rounded-xl shadow-sm shadow-violet-500/20"
          >
            {isSubscribing
              ? <Sparkles className="w-3.5 h-3.5 animate-spin" />
              : <Send className="w-3.5 h-3.5" />
            }
          </Button>
        </div>
      </div>
    </div>
  );
};

// ── PostCard ──────────────────────────────────────────────────────────────────
interface PostCardProps {
  post: BlogPost;
  isSelected: boolean;
  isRead: boolean;
  isBookmarked: boolean;
  onPostClick: (post: BlogPost) => void;
  onToggleBookmark: (postId: number) => void;
}

const PostCard = ({
  post,
  isSelected,
  isRead,
  isBookmarked,
  onPostClick,
  onToggleBookmark,
}: PostCardProps) => (
  <article
    onClick={() => onPostClick(post)}
    className={cn(
      "group relative cursor-pointer rounded-xl p-3 transition-all duration-200 border",
      isSelected
        ? "bg-violet-50 dark:bg-violet-900/20 border-violet-200 dark:border-violet-700/40 shadow-md shadow-violet-500/10"
        : "bg-background/70 backdrop-blur-sm border-border/40 hover:border-violet-200 dark:hover:border-violet-700/40 hover:shadow-sm hover:bg-background/90"
    )}
  >
    {/* Left accent bar */}
    <div className={cn(
      "absolute left-0 top-3 bottom-3 w-0.5 rounded-full transition-all duration-200",
      isSelected
        ? "bg-gradient-to-b from-violet-500 to-blue-500"
        : "bg-transparent group-hover:bg-gradient-to-b group-hover:from-violet-300 group-hover:to-blue-300"
    )} />

    <div className="pl-2 flex items-start gap-2.5">
      {/* Thumbnail */}
      {post.image && (
        <div className="w-11 h-11 rounded-lg overflow-hidden flex-shrink-0 bg-muted ring-1 ring-border/50">
          <img src={post.image} alt="" className="w-full h-full object-cover" loading="lazy" />
        </div>
      )}

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-1 mb-1.5">
          <h3 className={cn(
            "text-xs font-semibold leading-snug line-clamp-2 transition-colors",
            isSelected
              ? "text-violet-700 dark:text-violet-300"
              : "text-foreground group-hover:text-violet-700 dark:group-hover:text-violet-300"
          )}>
            {post.title}
          </h3>
          <button
            onClick={e => { e.stopPropagation(); onToggleBookmark(post.id); }}
            className={cn(
              "p-1 rounded-md transition-all flex-shrink-0 -mt-0.5",
              isBookmarked
                ? "text-violet-500 bg-violet-100 dark:bg-violet-900/40"
                : "text-muted-foreground opacity-0 group-hover:opacity-100 hover:text-violet-500 hover:bg-violet-50 dark:hover:bg-violet-900/20"
            )}
          >
            {isBookmarked
              ? <BookmarkCheck className="w-3 h-3" />
              : <Bookmark className="w-3 h-3" />
            }
          </button>
        </div>

        <div className="flex items-center gap-2">
          {isRead && (
            <span className="flex items-center gap-0.5 text-[9px] text-emerald-500 font-medium">
              <Eye className="w-2.5 h-2.5" /> Read
            </span>
          )}
          {post.featured && <Star className="w-2.5 h-2.5 text-amber-400 fill-current" />}
        </div>
      </div>
    </div>
  </article>
);
