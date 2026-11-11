import { Link } from "react-router-dom";
import SectionHeading from "./SectionHeading";
import { useSchool } from "../context/useSchool";

const highlights = [
  {
    number: "01",
    title: "Quality Education",
    description:
      "Building strong foundations through meaningful learning and academic development.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="h-6 w-6"
      >
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
        <path d="M8 7h8M8 11h8" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Values & Character",
    description:
      "Encouraging respect, responsibility, confidence and positive relationships.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="h-6 w-6"
      >
        <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Equal Opportunity",
    description:
      "Creating an environment where every child is encouraged to learn and grow.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="h-6 w-6"
      >
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20v-1a6 6 0 0 1 12 0v1" />
        <path d="M16 11a3 3 0 1 0 0-6" />
        <path d="M18 14a5 5 0 0 1 3 5v1" />
      </svg>
    ),
  },
];

const AboutPreview = () => {
  const { schoolInfo } = useSchool();
  const years = new Date().getFullYear() - schoolInfo.establishYear;

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section heading */}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <SectionHeading
            eyebrow="Who We Are"
            title="More than a school. A place to build a future."
          />

          <p className="mb-10 max-w-xl text-base leading-8 text-text-secondary lg:justify-self-end">
            Education is more than textbooks and examinations. It is about
            developing knowledge, confidence, values and the ability to face
            tomorrow with purpose.
          </p>
        </div>

        {/* Main content */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Visual panel */}
          <div className="relative min-h-95 overflow-hidden rounded-4xl bg-primary-dark p-8 sm:p-10">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/10" />
            <div className="absolute -right-8 -top-8 h-48 w-48 rounded-full border border-white/10" />

            <div className="relative flex h-full flex-col justify-between">
              <div>
                <span className="inline-flex rounded-full border border-white/20 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white/70">
                  Our Journey
                </span>

                <h3 className="mt-8 max-w-sm font-heading text-4xl font-semibold leading-tight text-white sm:text-5xl">
                  From humble beginnings to brighter possibilities.
                </h3>
              </div>

              <div className="mt-12 flex items-end justify-between">
                <div>
                  <p className="font-heading text-6xl font-semibold text-accent sm:text-7xl">
                    {years}+
                  </p>
                  <p className="mt-2 text-sm text-white/65">
                    Years of educational journey
                  </p>
                </div>

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-8 w-8 text-white"
                  >
                    <path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-7h6v7" />
                    <path d="M9 9h.01M15 9h.01" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Text and highlights */}
          <div className="flex flex-col justify-center">
            <p className="text-lg leading-8 text-text">
              {schoolInfo.fullname}, located in {schoolInfo.location}, has a
              journey rooted in education and community.
            </p>

            <p className="mt-5 leading-8 text-text-secondary">
              From its humble beginnings to its present identity, the school
              represents the importance of accessible education and the
              opportunities it can create for children.
            </p>

            {/* Highlights */}
            <div className="mt-9 space-y-6">
              {highlights.map((item) => (
                <div key={item.number} className="group flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary transition group-hover:bg-primary group-hover:text-white">
                    {item.icon}
                  </div>

                  <div className="flex-1 border-b border-border pb-5">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-accent">
                        {item.number}
                      </span>

                      <h3 className="font-heading text-lg font-semibold text-text">
                        {item.title}
                      </h3>
                    </div>

                    <p className="mt-2 text-sm leading-7 text-text-secondary">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-9">
              <Link
                to="/about"
                className="inline-flex items-center gap-3 text-sm font-semibold text-primary transition hover:gap-5"
              >
                Learn More About Our School
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
