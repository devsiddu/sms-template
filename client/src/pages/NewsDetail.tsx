import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Newspaper,
  UserRound,
  Share2,
  BookOpen,
  ChevronRight,
} from "lucide-react";

// Temporary demo news data.
// Keep this structure consistent with News.jsx.

const newsData = [
  {
    id: 1,
    title: "Annual School Day Celebration",
    excerpt:
      "A memorable celebration bringing together students, teachers, parents, and the community to recognize talent, achievements, and the spirit of learning.",
    category: "Events",
    date: "2026-10-25",
    image:
      "https://images.unsplash.com/photo-1503095396549-807759245b35?w=1400",
    readTime: "4 min read",
    author: "School Administration",
    content: [
      {
        heading: "A Celebration of Learning and Talent",
        paragraphs: [
          "The Annual School Day is an important occasion in the life of a school. It provides an opportunity to celebrate the learning journey, talents, and achievements of students.",
          "Students, teachers, parents, and members of the community come together to make the occasion memorable. It reflects the collective effort and dedication that contribute to a positive educational environment.",
        ],
      },
      {
        heading: "Encouraging Every Student",
        paragraphs: [
          "School celebrations provide students with opportunities to express themselves, develop confidence, and participate in activities beyond their regular classroom learning.",
          "Every performance, participation, and achievement represents an important step in a student's personal growth.",
        ],
      },
      {
        heading: "Growing Together as a Community",
        paragraphs: [
          "The support of parents, teachers, and the wider community plays an important role in the school's development. Such occasions strengthen these relationships and create lasting memories.",
          "We remain committed to creating opportunities where every student can learn, participate, and discover their potential.",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Celebrating Student Achievements",
    excerpt:
      "Recognizing the dedication, hard work, and achievements of our students across different areas of learning.",
    category: "Achievements",
    date: "2026-10-18",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200",
    readTime: "3 min read",
    author: "School Administration",
    content: [
      {
        heading: "Recognizing Student Efforts",
        paragraphs: [
          "Every achievement begins with effort, determination, and a willingness to learn. Recognizing student progress encourages children to continue developing their abilities.",
          "Academic learning, creativity, participation, and personal development all contribute to a student's journey.",
        ],
      },
      {
        heading: "Encouraging Future Growth",
        paragraphs: [
          "Teachers and parents play an important role in supporting students. Their encouragement helps children approach new challenges with confidence.",
          "We believe every student has the potential to grow and achieve meaningful goals.",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "A Day of Learning and Creativity",
    excerpt:
      "Students explore their creativity and develop new skills through engaging classroom activities and collaborative learning.",
    category: "Activities",
    date: "2026-10-12",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200",
    readTime: "3 min read",
    author: "Teaching Staff",
    content: [
      {
        heading: "Learning Beyond Textbooks",
        paragraphs: [
          "Learning becomes meaningful when students have opportunities to explore ideas, ask questions, and participate actively.",
          "Creative classroom activities help students develop confidence, communication, and problem-solving skills.",
        ],
      },
      {
        heading: "Building Curiosity",
        paragraphs: [
          "A supportive learning environment encourages children to express ideas and discover new interests.",
          "Our goal is to make learning engaging while helping every student develop a strong foundation.",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Important Notice for Parents",
    excerpt:
      "Parents are requested to stay connected with the school for upcoming academic activities and important announcements.",
    category: "Announcements",
    date: "2026-10-05",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200",
    readTime: "2 min read",
    author: "School Administration",
    content: [
      {
        heading: "Information for Parents",
        paragraphs: [
          "Communication between the school and parents is essential for supporting students throughout their education.",
          "Parents are encouraged to stay connected with the school office and follow official school communications for updates.",
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Building a Better Learning Environment",
    excerpt:
      "Our continued efforts to create a welcoming environment where students can learn, grow, and discover their potential.",
    category: "Activities",
    date: "2026-09-25",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200",
    readTime: "3 min read",
    author: "School Administration",
    content: [
      {
        heading: "A Positive Environment for Learning",
        paragraphs: [
          "A welcoming school environment supports learning, creativity, and the overall development of students.",
          "Teachers, parents, and students contribute to creating a positive atmosphere built on respect and cooperation.",
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Celebrating the Spirit of Togetherness",
    excerpt:
      "Students and teachers come together to celebrate shared experiences, teamwork, and the importance of community.",
    category: "Events",
    date: "2026-09-15",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1200",
    readTime: "4 min read",
    author: "Teaching Staff",
    content: [
      {
        heading: "The Importance of Togetherness",
        paragraphs: [
          "A strong school community is built through cooperation, mutual respect, and shared experiences.",
          "Activities that bring students and teachers together help build friendships and a sense of belonging.",
        ],
      },
    ],
  },
  {
    id: 7,
    title: "School Admission Information",
    excerpt:
      "Information for parents interested in learning more about the school's admission process and educational environment.",
    category: "Announcements",
    date: "2026-09-05",
    image: "https://images.unsplash.com/photo-1560785496-3c9d27877182?w=1200",
    readTime: "2 min read",
    author: "School Administration",
    content: [
      {
        heading: "Admission Enquiries",
        paragraphs: [
          "Parents interested in learning about the school and its educational environment are welcome to contact the school office.",
          "Please contact the school directly for verified admission requirements, available classes, and relevant dates.",
        ],
      },
    ],
  },
  {
    id: 8,
    title: "Encouraging a Love for Reading",
    excerpt:
      "Promoting reading habits and helping students develop curiosity, imagination, and a lifelong interest in knowledge.",
    category: "Activities",
    date: "2026-08-28",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200",
    readTime: "3 min read",
    author: "Teaching Staff",
    content: [
      {
        heading: "Reading Opens New Worlds",
        paragraphs: [
          "Reading helps children improve their language, imagination, and understanding of the world around them.",
          "Developing a regular reading habit can support learning across different subjects and encourage independent thinking.",
        ],
      },
    ],
  },
];

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

  const article = newsData.find((item) => String(item.id) === String(id));

  const relatedNews = useMemo(() => {
    if (!article) return [];

    return newsData
      .filter(
        (item) => item.id !== article.id && item.category === article.category,
      )
      .slice(0, 3);
  }, [article]);

  const fallbackNews = useMemo(() => {
    if (!article || relatedNews.length >= 3) return relatedNews;

    const existingIds = new Set([
      article.id,
      ...relatedNews.map((item) => item.id),
    ]);

    return [
      ...relatedNews,
      ...newsData
        .filter((item) => !existingIds.has(item.id))
        .slice(0, 3 - relatedNews.length),
    ];
  }, [article, relatedNews]);

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

            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <Clock3 size={17} className="text-primary" />
              {article.readTime}
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
