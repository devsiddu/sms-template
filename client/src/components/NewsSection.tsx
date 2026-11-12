import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import { useSchool } from "../context/useSchool";

const NewsSection = () => {
  const { news } = useSchool();

  return (
    <section className="bg-background pt-20 sm:pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section heading */}
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <SectionHeading
              eyebrow="News & Updates"
              title="What's happening at our school?"
              description="Stay connected with the latest announcements, school activities and memorable moments."
            />
          </div>

          <Link
            to="/news"
            className="mb-10 inline-flex shrink-0 items-center gap-3 text-sm font-semibold text-primary transition hover:gap-5"
          >
            View All News
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* News cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {news.slice(0, 3).map((item) => (
            <article
              key={item.id}
              className={`group overflow-hidden rounded-2xl border border-border bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                item.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Image / placeholder */}
              <div className="relative aspect-16/10 overflow-hidden bg-primary-dark">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-3 bg-primary-dark text-center">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      className="h-12 w-12 text-white/60"
                      aria-hidden="true"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="m21 15-5-5L5 21" />
                    </svg>

                    <span className="text-xs uppercase tracking-widest text-white/60">
                      School News
                    </span>
                  </div>
                )}

                {/* Category */}
                <span className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 text-xs font-semibold text-primary shadow-sm">
                  {item.category}
                </span>
              </div>

              {/* Card content */}
              <div className="p-6 sm:p-7">
                <div className="flex items-center gap-2 text-xs text-text-secondary">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {item.date}
                </div>

                <h3 className="mt-4 font-heading text-xl font-semibold leading-snug text-text transition-colors group-hover:text-primary">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-text-secondary">
                  {item.excerpt}
                </p>

                <Link
                  to="/news"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                  aria-label={`Read more about ${item.title}`}
                >
                  Read More
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-border bg-white px-6 py-7 sm:flex-row sm:px-8">
          <div>
            <h3 className="font-heading text-xl font-semibold text-text">
              Stay connected with KHPS
            </h3>
            <p className="mt-2 text-sm text-text-secondary">
              Visit our news page for school updates and announcements.
            </p>
          </div>

          <Link
            to="/news"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
          >
            Explore News
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
