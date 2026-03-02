import { useState } from "react";
import {
  Search, BookOpen, Bookmark, BookmarkCheck, X,
  PanelLeftClose, PanelLeft, Eye, History,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BlogPost } from "@/data/blogPosts";
import { cn } from "@/lib/utils";
import type { SortOption } from "@/pages/Blog";

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

const categoryStyle: Record<string, { dot: string; bar: string; label: string }> = {
  strategy:  { dot: "bg-violet-400",  bar: "bg-violet-400",  label: "text-violet-600 dark:text-violet-400"  },
  analytics: { dot: "bg-blue-400",    bar: "bg-blue-400",    label: "text-blue-600 dark:text-blue-400"      },
  research:  { dot: "bg-emerald-400", bar: "bg-emerald-400", label: "text-emerald-600 dark:text-emerald-400"},
  leadership:{ dot: "bg-rose-400",    bar: "bg-rose-400",    label: "text-rose-600 dark:text-rose-400"      },
  design:    { dot: "bg-amber-400",   bar: "bg-amber-400",   label: "text-amber-600 dark:text-amber-400"    },
  ai:        { dot: "bg-cyan-400",    bar: "bg-cyan-400",    label: "text-cyan-600 dark:text-cyan-400"      },
};
const fallbackStyle = { dot: "bg-slate-400", bar: "bg-slate-400", label: "text-slate-500" };

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

  const handleSearchSubmit = () => {
    if (searchTerm.trim()) onAddRecentSearch(searchTerm.trim());
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
        <BookOpen className="w-4 h-4 text-muted-foreground mb-5" />
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
    <div className="h-full flex flex-col bg-background border-r border-border/50">

      {/* ── Header ── */}
      <div className="px-4 pt-5 pb-4 border-b border-border/50">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <h2 className="text-base font-bold tracking-tight text-foreground">Writing</h2>
            <span className="px-1.5 py-0.5 rounded-md bg-muted text-[10px] font-semibold text-muted-foreground tabular-nums">
              {posts.length}
            </span>
          </div>
          <Button
            variant="ghost" size="sm"
            onClick={onToggleCollapse}
            className="p-1.5 hover:bg-muted rounded-lg"
          >
            <PanelLeftClose className="w-4 h-4 text-muted-foreground" />
          </Button>
        </div>
        <div className="h-px bg-border/60 mb-4" />

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

      {/* ── Posts list ── */}
      <div className="flex-1 overflow-y-auto px-3 py-2 space-y-0.5">
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
            <Search className="w-5 h-5 text-muted-foreground mx-auto mb-2" />
            <p className="text-xs font-medium text-muted-foreground">No articles found</p>
            <p className="text-[10px] text-muted-foreground mt-1">Try a different search term</p>
          </div>
        )}
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
}: PostCardProps) => {
  const style = categoryStyle[post.category] ?? fallbackStyle;

  return (
    <article
      onClick={() => onPostClick(post)}
      className={cn(
        "group relative cursor-pointer rounded-xl px-3 py-3 transition-all duration-200",
        isSelected
          ? "bg-violet-50 dark:bg-violet-900/20 shadow-sm ring-1 ring-violet-200/70 dark:ring-violet-800/40"
          : "hover:bg-muted/50 hover:shadow-sm"
      )}
    >
      {/* Left accent bar — category colour on hover, violet when selected */}
      <div className={cn(
        "absolute left-0 top-3 bottom-3 w-[3px] rounded-full transition-all duration-200",
        isSelected
          ? "bg-violet-500 opacity-100"
          : cn("opacity-0 group-hover:opacity-100", style.bar)
      )} />

      <div className="pl-3">
        {/* Title row */}
        <div className="flex items-start justify-between gap-1.5 mb-2">
          <h3 className={cn(
            "text-xs font-semibold leading-snug line-clamp-2 transition-colors duration-150",
            isSelected
              ? "text-violet-700 dark:text-violet-300"
              : "text-foreground/90 group-hover:text-foreground"
          )}>
            {post.title}
          </h3>
          <button
            onClick={e => { e.stopPropagation(); onToggleBookmark(post.id); }}
            className={cn(
              "p-0.5 rounded transition-all duration-150 flex-shrink-0 mt-px",
              isBookmarked
                ? "text-violet-500"
                : "text-muted-foreground opacity-0 group-hover:opacity-100 hover:text-violet-500"
            )}
          >
            {isBookmarked
              ? <BookmarkCheck className="w-3 h-3" />
              : <Bookmark className="w-3 h-3" />
            }
          </button>
        </div>

        {/* Meta row */}
        <div className="flex items-center gap-1.5">
          <span className={cn("w-1.5 h-1.5 rounded-full flex-shrink-0", style.dot)} />
          <span className={cn("text-[10px] font-medium capitalize", style.label)}>
            {post.category}
          </span>
          {isRead && (
            <span className="flex items-center gap-0.5 text-[9px] text-emerald-500 font-medium ml-auto">
              <Eye className="w-2.5 h-2.5" /> Read
            </span>
          )}
        </div>
      </div>
    </article>
  );
};
