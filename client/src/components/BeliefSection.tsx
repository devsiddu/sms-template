const BeliefSection = () => {
  return (
    <section className="relative isolate overflow-hidden bg-primary-dark py-24 sm:py-32">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -bottom-48 -right-32 h-120 w-120 rounded-full bg-primary/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_300px] lg:gap-20">
          {/* Main belief */}
          <div>
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                What We Believe
              </p>
            </div>

            <div className="relative">
              <span
                className="absolute -left-2 -top-12 font-heading text-8xl leading-none text-white/10 sm:-left-5 sm:-top-16 sm:text-9xl"
                aria-hidden="true"
              >
                “
              </span>

              <h2 className="relative max-w-4xl font-heading text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-6xl">
                Every child has the potential to{" "}
                <span className="text-accent">learn, grow and achieve.</span>{" "}
                Education helps turn that potential into possibility.
              </h2>
            </div>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/65">
              We believe that a supportive learning environment, dedicated
              guidance and strong values can help children build confidence and
              prepare for a brighter future.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <div className="h-10 w-10 rounded-full border border-accent/50 bg-accent/10" />

              <div>
                <p className="text-sm font-semibold text-white">
                  The KHPS Philosophy
                </p>
                <p className="mt-1 text-xs text-white/50">
                  Learning with purpose. Growing with confidence.
                </p>
              </div>
            </div>
          </div>

          {/* Decorative visual */}
          <div className="relative mx-auto flex h-64 w-64 items-center justify-center lg:h-72 lg:w-72">
            <div className="absolute inset-0 rounded-full border border-white/10" />
            <div className="absolute inset-5 rounded-full border border-white/10" />
            <div className="absolute inset-10 rounded-full bg-white/5" />

            <div className="relative flex h-36 w-36 items-center justify-center rounded-full bg-accent text-primary-dark shadow-2xl sm:h-40 sm:w-40">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
                className="h-16 w-16"
                aria-hidden="true"
              >
                <path d="M12 3v18M3 12h18" />
                <path d="M12 3c-3 2-5 5-5 9s2 7 5 9c3-2 5-5 5-9s-2-7-5-9Z" />
                <path d="M5 7c3 1 5 3 7 5 2-2 4-4 7-5M5 17c3-1 5-3 7-5 2 2 4 4 7 5" />
              </svg>
            </div>

            <span className="absolute right-0 top-8 h-3 w-3 rounded-full bg-accent" />
            <span className="absolute bottom-8 left-2 h-2 w-2 rounded-full bg-white/60" />
          </div>
        </div>

        {/* Bottom values */}
        <div className="mt-20 grid gap-6 border-t border-white/15 pt-8 sm:grid-cols-3">
          <div>
            <p className="font-heading text-xl font-semibold text-white">
              Learn
            </p>
            <p className="mt-2 text-sm text-white/50">
              Discover knowledge and develop curiosity.
            </p>
          </div>

          <div>
            <p className="font-heading text-xl font-semibold text-white">
              Grow
            </p>
            <p className="mt-2 text-sm text-white/50">
              Build confidence, character and skills.
            </p>
          </div>

          <div>
            <p className="font-heading text-xl font-semibold text-white">
              Achieve
            </p>
            <p className="mt-2 text-sm text-white/50">
              Work towards a future full of possibilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeliefSection;
