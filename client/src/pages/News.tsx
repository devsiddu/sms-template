import { useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Search,
  Newspaper,
  Megaphone,
  Trophy,
  PartyPopper,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Clock3,
  X,
  Mail,
} from "lucide-react";
import { dummyNewsData } from "../assets/assets";

// Temporary demo content.
// Replace with API data when the admin news module is ready.

const categories = [
  { name: "All News", icon: Newspaper },
  { name: "Announcements", icon: Megaphone },
  { name: "Events", icon: PartyPopper },
  { name: "Achievements", icon: Trophy },
  { name: "Activities", icon: BookOpen },
];

const ITEMS_PER_PAGE = 6;

const formatDate = (date) =>
  new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

export default function News() {
  const [activeCategory, setActiveCategory] = useState("All News");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [newsData, setNewsData] = useState(dummyNewsData);

  const featuredNews = newsData.find((item) => item.featured);

  const filteredNews = useMemo(() => {
    return newsData.filter((item) => {
      const matchesCategory =
        activeCategory === "All News" || item.category === activeCategory;

      const search = searchQuery.trim().toLowerCase();

      const matchesSearch =
        !search ||
        item.title.toLowerCase().includes(search) ||
        item.excerpt.toLowerCase().includes(search) ||
        item.category.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);

  const paginatedNews = filteredNews.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handleSearch = (value) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const resetFilters = () => {
    setActiveCategory("All News");
    setSearchQuery("");
    setCurrentPage(1);
  };

  return (
    <main className="overflow-hidden">
      {/* =====================================
          HERO SECTION
      ====================================== */}

      <section className="relative overflow-hidden bg-primary px-5 py-20 sm:px-8 lg:py-28">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border-45 border-white/5" />

        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full border-45 border-white/5" />

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-accent-light">
              <Newspaper size={16} />
              News & Updates
            </div>

            <h1 className="mt-7 font-heading text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
              Stories From
              <span className="block text-[#E8AD57]">Our School.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Stay connected with everything happening at KHPS – Yogisiddeshwar
              Tot Jokanatti. Discover school announcements, celebrations,
              student achievements, and memorable moments.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#latest-news"
                className="btn bg-accent text-white hover:bg-[#c47b27]"
              >
                Explore Latest News
                <ArrowRight size={18} />
              </a>

              <span className="text-sm text-white/60">
                Keeping our community informed.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          FEATURED NEWS
      ====================================== */}

      {featuredNews && (
        <section className="section">
          <div className="container">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-7 w-1 rounded-full bg-accent" />
              <h2 className="text-2xl font-semibold">Featured Story</h2>
            </div>

            <article className="grid overflow-hidden rounded-[28px] border border-border bg-surface shadow-sm lg:grid-cols-2">
              <div className="relative min-h-70 overflow-hidden lg:min-h-110">
                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
                />

                <span className="absolute left-6 top-6 rounded-full bg-accent px-4 py-2 text-xs font-semibold text-white">
                  Featured
                </span>
              </div>

              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <div className="flex flex-wrap items-center gap-3 text-sm text-text-secondary">
                  <span className="rounded-full bg-primary-light px-3 py-1 font-semibold text-primary">
                    {featuredNews.category}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <CalendarDays size={15} />
                    {formatDate(featuredNews.date)}
                  </span>
                </div>

                <h2 className="mt-6 font-heading text-3xl font-semibold leading-tight text-text sm:text-4xl">
                  {featuredNews.title}
                </h2>

                <p className="mt-5 text-base leading-8 text-text-secondary">
                  {featuredNews.excerpt}
                </p>

                <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
                  <a
                    href={`/news/${featuredNews.id}`}
                    className="inline-flex items-center gap-2 font-semibold text-primary transition hover:text-accent"
                  >
                    Read Full Story
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* =====================================
          NEWS LIST AND FILTERS
      ====================================== */}

      <section
        id="latest-news"
        className="bg-surface-muted section scroll-mt-20"
      >
        <div className="container">
          {/* Section Heading */}

          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-accent">
                Stay Updated
              </span>

              <h2 className="section-heading mt-3">Latest News & Updates</h2>

              <p className="section-description">
                Explore the latest announcements, school activities, events, and
                achievements.
              </p>
            </div>

            <div className="text-sm text-text-secondary">
              Showing{" "}
              <span className="font-semibold text-primary">
                {filteredNews.length}
              </span>{" "}
              {filteredNews.length === 1 ? "article" : "articles"}
            </div>
          </div>

          {/* Search */}

          <div className="mb-7 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-sm">
              <Search
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-text-light"
              />

              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search news and updates..."
                aria-label="Search news"
                className="w-full rounded-full border border-border bg-surface py-3.5 pl-12 pr-11 text-sm text-text outline-none transition placeholder:text-text-light focus:border-primary focus:ring-2 focus:ring-primary/10"
              />

              {searchQuery && (
                <button
                  onClick={() => handleSearch("")}
                  aria-label="Clear search"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary hover:text-danger"
                >
                  <X size={17} />
                </button>
              )}
            </div>

            <button
              onClick={resetFilters}
              className="text-sm font-semibold text-primary hover:text-accent"
            >
              Clear all filters
            </button>
          </div>

          {/* Category Filters */}

          <div className="mb-10 flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.name;

              return (
                <button
                  key={category.name}
                  onClick={() => handleCategoryChange(category.name)}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition ${
                    isActive
                      ? "border-primary bg-primary text-white shadow-sm"
                      : "border-border bg-surface text-text-secondary hover:border-primary hover:text-primary"
                  }`}
                >
                  <Icon size={16} />
                  {category.name}
                </button>
              );
            })}
          </div>

          {/* News Cards */}

          {paginatedNews.length > 0 ? (
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {paginatedNews.map((item) => (
                <article key={item.id} className="card group flex flex-col">
                  {/* Image */}

                  <a
                    href={`/news/${item.id}`}
                    className="relative block aspect-16/10 overflow-hidden"
                    aria-label={`Read ${item.title}`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <span className="absolute left-4 top-4 rounded-full bg-surface/95 px-3 py-1.5 text-xs font-semibold text-primary shadow-sm">
                      {item.category}
                    </span>
                  </a>

                  {/* Content */}

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2 text-xs font-medium text-text-secondary">
                      <CalendarDays size={14} />
                      {formatDate(item.date)}
                    </div>

                    <h3 className="mt-4 font-heading text-2xl font-semibold leading-snug text-text transition group-hover:text-primary">
                      {item.title}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-7 text-text-secondary">
                      {item.excerpt}
                    </p>

                    <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                      <a
                        href={`/news/${item.id}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition hover:text-accent"
                      >
                        Read More
                        <ArrowRight
                          size={16}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* Empty State */

            <div className="rounded-3xl border border-dashed border-border bg-surface px-6 py-20 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-light text-primary">
                <Search size={28} />
              </div>

              <h3 className="mt-6 font-heading text-2xl font-semibold">
                No News Found
              </h3>

              <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-text-secondary">
                We couldn't find any news matching your search. Try another
                keyword or category.
              </p>

              <button onClick={resetFilters} className="btn btn-primary mt-7">
                Reset Filters
                <X size={17} />
              </button>
            </div>
          )}

          {/* Pagination */}

          {totalPages > 1 && (
            <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((page) => page - 1)}
                aria-label="Previous page"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-primary transition hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronLeft size={19} />
              </button>

              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    aria-current={currentPage === page ? "page" : undefined}
                    className={`h-11 min-w-11 rounded-full px-3 text-sm font-semibold transition ${
                      currentPage === page
                        ? "bg-primary text-white"
                        : "border border-border bg-surface text-text-secondary hover:border-primary hover:text-primary"
                    }`}
                  >
                    {page}
                  </button>
                ),
              )}

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((page) => page + 1)}
                aria-label="Next page"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-primary transition hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronRight size={19} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =====================================
          CONTACT CTA
      ====================================== */}

      <section className="section bg-background">
        <div className="container">
          <div className="relative overflow-hidden rounded-[28px] bg-primary px-7 py-14 text-center sm:px-12 sm:py-16">
            <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border-40 border-white/5" />

            <div className="relative z-10 mx-auto max-w-2xl">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-accent-light">
                <Mail size={26} />
              </div>

              <h2 className="mt-6 font-heading text-3xl font-semibold text-white sm:text-5xl">
                Stay Connected With Us
              </h2>

              <p className="mt-5 leading-8 text-white/75">
                Have questions about our school or want to know more about
                upcoming activities? We would be happy to hear from you.
              </p>

              <a
                href="/contact"
                className="btn mt-8 bg-accent text-white hover:bg-[#c47b27]"
              >
                Get in Touch
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
