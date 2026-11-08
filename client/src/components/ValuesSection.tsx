import SectionHeading from "../components/SectionHeading";

const values = [
  {
    number: "01",
    title: "Learning",
    description:
      "Encouraging curiosity, developing knowledge and helping every child build a strong foundation for lifelong learning.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="h-7 w-7"
      >
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
        <path d="M8 7h8M8 11h8" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Respect",
    description:
      "Building a welcoming environment where students learn to respect themselves, others and their community.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="h-7 w-7"
      >
        <path d="M12 21s-8-4.5-8-11V5l8-3 8 3v5c0 6.5-8 11-8 11Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Integrity",
    description:
      "Promoting honesty, responsibility and good character through everyday actions and positive choices.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="h-7 w-7"
      >
        <path d="M12 3v18M5 7h14M7 7l-4 8h8L7 7Zm10 0-4 8h8l-4-8Z" />
        <path d="M5 21h14" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Growth",
    description:
      "Supporting each child's academic, personal and social development while encouraging confidence and creativity.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="h-7 w-7"
      >
        <path d="M3 17 9 11l4 4 8-9" />
        <path d="M15 6h6v6" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Equality",
    description:
      "Believing that every child deserves the opportunity to learn, participate and reach their potential.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="h-7 w-7"
      >
        <circle cx="12" cy="8" r="3" />
        <path d="M5 21v-2a7 7 0 0 1 14 0v2M3 11h2m14 0h2" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Community",
    description:
      "Strengthening the connection between students, teachers, families and the wider community.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="h-7 w-7"
      >
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20v-1a6 6 0 0 1 12 0v1" />
        <path d="M16 11a3 3 0 1 0 0-6M18 14a5 5 0 0 1 3 5v1" />
      </svg>
    ),
  },
];

const ValuesSection = () => {
  return (
    <section
      id="values"
      className="relative overflow-hidden bg-white py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-primary-light/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow="What We Believe"
            title="Values that shape every step of the journey."
            description="Education builds more than knowledge. It helps shape character, develop confidence and prepare children for life."
            centered
          />
        </div>

        {/* Values grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.number}
              className="group relative overflow-hidden rounded-2xl border border-border bg-background p-7 transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-white hover:shadow-xl sm:p-8"
            >
              {/* Number */}
              <div className="absolute right-7 top-7 font-mono text-xs text-text-light">
                {value.number}
              </div>

              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-light text-primary transition duration-300 group-hover:bg-primary group-hover:text-white">
                {value.icon}
              </div>

              {/* Content */}
              <h3 className="mt-7 font-heading text-2xl font-semibold text-text">
                {value.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-text-secondary">
                {value.description}
              </p>

              {/* Bottom accent */}
              <div className="mt-7 h-1 w-10 rounded-full bg-accent transition-all duration-300 group-hover:w-20" />
            </article>
          ))}
        </div>

        {/* Closing statement */}
        <div className="mt-16 rounded-4xl bg-primary-dark px-6 py-12 text-center sm:px-12 sm:py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Our Commitment
          </p>

          <h3 className="mx-auto mt-5 max-w-3xl font-heading text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Helping every child learn with confidence and grow with purpose.
          </h3>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/65">
            A strong foundation today creates better possibilities for tomorrow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
