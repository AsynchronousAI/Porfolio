"use client";

import { useState } from "react";
import { Search, ExternalLink, Star, Calendar, Tag } from "lucide-react";
import { Input } from "@1chooo/ui/components/input";
import { Button } from "@1chooo/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@1chooo/ui/components/card";
import { Badge } from "@1chooo/ui/components/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@1chooo/ui/components/tabs";

// Sample bookmark data
const bookmarks = [
  {
    id: 1,
    title: "Figma",
    description:
      "Collaborative interface design tool for creating beautiful user interfaces and prototypes.",
    url: "https://figma.com",
    category: "Design",
    tags: ["UI/UX", "Prototyping", "Collaboration"],
    dateAdded: "2024-01-15",
    isFavorite: true,
    favicon: "🎨",
  },
  {
    id: 2,
    title: "Next.js Documentation",
    description:
      "The React framework for production with built-in optimizations and best practices.",
    url: "https://nextjs.org/docs",
    category: "Development",
    tags: ["React", "Framework", "Documentation"],
    dateAdded: "2024-01-10",
    isFavorite: true,
    favicon: "⚛️",
  },
  {
    id: 3,
    title: "Tailwind CSS",
    description:
      "A utility-first CSS framework for rapidly building custom user interfaces.",
    url: "https://tailwindcss.com",
    category: "Development",
    tags: ["CSS", "Framework", "Styling"],
    dateAdded: "2024-01-08",
    isFavorite: false,
    favicon: "🎨",
  },
  {
    id: 4,
    title: "Notion",
    description:
      "All-in-one workspace for notes, tasks, wikis, and databases to organize your work and life.",
    url: "https://notion.so",
    category: "Productivity",
    tags: ["Notes", "Organization", "Database"],
    dateAdded: "2024-01-12",
    isFavorite: true,
    favicon: "📝",
  },
  {
    id: 5,
    title: "GitHub",
    description:
      "Platform for version control and collaboration, hosting millions of repositories.",
    url: "https://github.com",
    category: "Development",
    tags: ["Git", "Version Control", "Collaboration"],
    dateAdded: "2024-01-05",
    isFavorite: false,
    favicon: "🐙",
  },
  {
    id: 6,
    title: "Unsplash",
    description:
      "Beautiful free images and photos that you can download and use for any project.",
    url: "https://unsplash.com",
    category: "Design",
    tags: ["Photos", "Stock Images", "Free"],
    dateAdded: "2024-01-14",
    isFavorite: false,
    favicon: "📸",
  },
  {
    id: 7,
    title: "Linear",
    description:
      "Issue tracking tool designed for modern software teams with a focus on speed and usability.",
    url: "https://linear.app",
    category: "Productivity",
    tags: ["Project Management", "Issues", "Team"],
    dateAdded: "2024-01-11",
    isFavorite: true,
    favicon: "📋",
  },
  {
    id: 8,
    title: "Vercel",
    description:
      "Platform for frontend frameworks and static sites, built to integrate with headless content.",
    url: "https://vercel.com",
    category: "Development",
    tags: ["Deployment", "Hosting", "Frontend"],
    dateAdded: "2024-01-09",
    isFavorite: false,
    favicon: "▲",
  },
];

const categories = ["All", "Design", "Development", "Productivity"];

export default function BookmarksPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  const filteredBookmarks = bookmarks.filter((bookmark) => {
    const matchesSearch =
      bookmark.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bookmark.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bookmark.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      );

    const matchesCategory =
      selectedCategory === "All" || bookmark.category === selectedCategory;
    const matchesFavorites = !showFavoritesOnly || bookmark.isFavorite;

    return matchesSearch && matchesCategory && matchesFavorites;
  });

  const favoriteBookmarks = bookmarks.filter((bookmark) => bookmark.isFavorite);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            My Bookmarks
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            A curated collection of tools and resources I use
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
            <Input
              placeholder="Search bookmarks, tags, or descriptions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button
            variant={showFavoritesOnly ? "default" : "outline"}
            onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
            className="flex items-center gap-2"
          >
            <Star
              className={`h-4 w-4 ${showFavoritesOnly ? "fill-current" : ""}`}
            />
            Favorites Only
          </Button>
        </div>

        {/* Category Tabs */}
        <Tabs
          value={selectedCategory}
          onValueChange={setSelectedCategory}
          className="mb-8"
        >
          <TabsList className="grid w-full grid-cols-4">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-6">
              {/* Stats */}
              <div className="flex items-center gap-4 mb-6 text-sm text-slate-600 dark:text-slate-400">
                <span>{filteredBookmarks.length} bookmarks</span>
                {category === "All" && (
                  <span>{favoriteBookmarks.length} favorites</span>
                )}
              </div>

              {/* Bookmarks Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBookmarks.map((bookmark) => (
                  <Card
                    key={bookmark.id}
                    className="group hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="text-2xl">{bookmark.favicon}</div>
                          <div>
                            <CardTitle className="text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {bookmark.title}
                            </CardTitle>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="secondary" className="text-xs">
                                {bookmark.category}
                              </Badge>
                              {bookmark.isFavorite && (
                                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="mb-4 line-clamp-2">
                        {bookmark.description}
                      </CardDescription>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {bookmark.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs"
                          >
                            <Tag className="h-2 w-2 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-xs text-slate-500">
                          <Calendar className="h-3 w-3" />
                          {new Date(bookmark.dateAdded).toLocaleDateString()}
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-8 px-2"
                          onClick={() => window.open(bookmark.url, "_blank")}
                        >
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Visit
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredBookmarks.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-4xl mb-4">🔍</div>
                  <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-2">
                    No bookmarks found
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Try adjusting your search or filters
                  </p>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
