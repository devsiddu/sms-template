import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Newspaper,
  UserRound,
  Share2,
  BookOpen,
  ChevronRight,
} from "lucide-react";
import { useSchool } from "../context/useSchool";

const formatDate = (date) =>
  new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const categoryColors = {
  Events: "bg-accent-light text-accent",
  Achievements: "bg-primary-light text-primary",
  Activities: "bg-[#e9e9f5] text-[#5757a1]",
  Announcements: "bg-[#f8e7e5] text-[#b34237]",
};

export default function NewsDetail() {
  const { id } = useParams();
  const { news } = useSchool();

  const article = news.find((item) => String(item.id) === String(id));

  const relatedNews = useMemo(() => {
    if (!article) return [];

    return news
      .filter(
        (item) => item.id !== article.id && item.category === article.category,
      )
      .slice(0, 3);
  }, [news, article]);

  const fallbackNews = useMemo(() => {
    if (!article || relatedNews.length >= 3) return relatedNews;

    const existingIds = new Set([
      article.id,
      ...relatedNews.map((item) => item.id),
    ]);

    return [
      ...relatedNews,
      ...news
        .filter((item) => !existingIds.has(item.id))
        .slice(0, 3 - relatedNews.length),
    ];
  }, [article, relatedNews, news]);

  // Article not found
  if (!article) {
    return (
      <main className="min-h-[65vh] bg-background px-5 py-24">
        <div className="container mx-auto max-w-xl text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-primary-light text-primary">
            <Newspaper size={36} />
          </div>

          <h1 className="mt-7 font-heading text-4xl font-semibold">
            Article Not Found
          </h1>

          <p className="mt-4 leading-7 text-text-secondary">
            The news article you're looking for may have been removed or the
            link may be incorrect.
          </p>

          <Link to="/news" className="btn btn-primary mt-8">
            <ArrowLeft size={18} />
            Back to All News
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-background">
      {/* =====================================
          BREADCRUMB
      ====================================== */}

      <section className="border-b border-border bg-surface">
        <div className="container py-5">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-sm text-text-secondary"
          >
            <Link to="/" className="transition hover:text-primary">
              Home
            </Link>

            <ChevronRight size={15} />

            <Link to="/news" className="transition hover:text-primary">
              News
            </Link>

            <ChevronRight size={15} />

            <span className="max-w-50 truncate font-medium text-primary">
              {article.title}
            </span>
          </nav>
        </div>
      </section>

      {/* =====================================
          ARTICLE HEADER
      ====================================== */}

      <section className="px-5 pb-12 pt-14 sm:px-8 sm:pt-20">
        <div className="mx-auto max-w-4xl">
          <Link
            to="/news"
            className="mb-9 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-accent"
          >
            <ArrowLeft size={17} />
            Back to all news
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            <span
              className={`rounded-full px-4 py-2 text-xs font-semibold ${
                categoryColors[article.category] ||
                "bg-primary-light text-primary"
              }`}
            >
              {article.category}
            </span>

            {article.featured && (
              <span className="rounded-full bg-accent-light px-4 py-2 text-xs font-semibold text-accent">
                Featured Story
              </span>
            )}
          </div>

          <h1 className="mt-7 font-heading text-4xl font-semibold leading-tight text-text sm:text-5xl lg:text-6xl">
            {article.title}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-text-secondary sm:text-lg">
            {article.excerpt}
          </p>

          {/* Article Meta */}

          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4 border-y border-border py-5">
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light text-primary">
                <UserRound size={19} />
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-wider text-text-light">
                  Published by
                </p>
                <p className="text-sm font-semibold text-text">
                  {article.author}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <CalendarDays size={17} className="text-primary" />
              {formatDate(article.date)}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          FEATURED IMAGE
      ====================================== */}

      <section className="px-5 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-3xl bg-surface shadow-md sm:rounded-4xl">
            <img
              src={article.image}
              alt={article.title}
              className="max-h-150 min-h-65 w-full object-cover sm:min-h-100"
            />
          </div>

          <p className="mt-4 text-center text-xs text-text-light">
            {article.title} – KHPS, Yogisiddeshwar Tot Jokanatti
          </p>
        </div>
      </section>

      {/* =====================================
          ARTICLE CONTENT
      ====================================== */}

      <section className="px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[minmax(0,1fr)_280px]">
          {/* Main Article */}

          <article className="min-w-0">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-7 w-1 rounded-full bg-accent" />
              <h2 className="font-heading text-2xl font-semibold">Article</h2>
            </div>

            <div className="max-w-3xl space-y-10">
              {article.content.map((section, index) => (
                <section key={index}>
                  <h2 className="mb-5 font-heading text-2xl font-semibold leading-snug text-text sm:text-3xl">
                    {section.heading}
                  </h2>

                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <p
                      key={paragraphIndex}
                      className="mb-5 text-base leading-8 text-text-secondary"
                    >
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}
            </div>

            {/* Article Footer */}

            <div className="mt-12 flex flex-wrap items-center justify-between gap-5 border-t border-border pt-7">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-text-light">
                  Published on
                </p>

                <p className="mt-1 font-semibold text-text">
                  {formatDate(article.date)}
                </p>
              </div>

              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator
                      .share({
                        title: article.title,
                        text: article.excerpt,
                        url: window.location.href,
                      })
                      .catch(() => {});
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                  }
                }}
                className="btn btn-outline"
              >
                <Share2 size={17} />
                Share Article
              </button>
            </div>
          </article>

          {/* Sidebar */}

          <aside className="space-y-6">
            {/* School Information */}

            <div className="rounded-2xl bg-primary p-7 text-white">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-accent-light">
                <BookOpen size={24} />
              </div>

              <h3 className="mt-5 font-heading text-2xl font-semibold text-white">
                KHPS
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/70">
                Yogisiddeshwar Tot Jokanatti. Learning today, building
                opportunities for tomorrow.
              </p>

              <Link
                to="/about"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-light hover:text-white"
              >
                About Our School
                <ArrowUpRight size={17} />
              </Link>
            </div>

            {/* Back to News */}

            <div className="rounded-2xl border border-border bg-surface p-7">
              <Newspaper size={24} className="text-accent" />

              <h3 className="mt-4 font-heading text-xl font-semibold">
                More School Updates
              </h3>

              <p className="mt-3 text-sm leading-7 text-text-secondary">
                Explore more announcements, events, and stories from our school.
              </p>

              <Link to="/news" className="btn btn-primary mt-6 w-full">
                View All News
                <ArrowRight size={17} />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* =====================================
          RELATED NEWS
      ====================================== */}

      {fallbackNews.length > 0 && (
        <section className="section bg-surface-muted">
          <div className="container">
            <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-accent">
                  Keep Exploring
                </span>

                <h2 className="section-heading mt-3">Related News & Stories</h2>

                <p className="section-description">
                  Discover more updates and memorable moments from our school.
                </p>
              </div>

              <Link
                to="/news"
                className="inline-flex items-center gap-2 font-semibold text-primary hover:text-accent"
              >
                All News
                <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {fallbackNews.map((item) => (
                <article key={item.id} className="card group bg-surface">
                  <Link
                    to={`/news/${item.id}`}
                    className="block aspect-16/10 overflow-hidden"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                  </Link>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-text-secondary">
                      <CalendarDays size={14} />
                      {formatDate(item.date)}
                    </div>

                    <h3 className="mt-4 font-heading text-xl font-semibold leading-snug text-text transition group-hover:text-primary">
                      {item.title}
                    </h3>

                    <p className="mt-3 line-clamp-2 text-sm leading-7 text-text-secondary">
                      {item.excerpt}
                    </p>

                    <Link
                      to={`/news/${item.id}`}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent"
                    >
                      Read Story
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =====================================
          BOTTOM NAVIGATION
      ====================================== */}

      <section className="border-t border-border bg-background px-5 py-8 sm:px-8">
        <div className="container flex flex-wrap items-center justify-between gap-5">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 font-semibold text-primary transition hover:text-accent"
          >
            <ArrowLeft size={18} />
            Back to all news
          </Link>

          <Link
            to="/"
            className="text-sm font-medium text-text-secondary hover:text-primary"
          >
            Return to Homepage
          </Link>
        </div>
      </section>
    </main>
  );
}
