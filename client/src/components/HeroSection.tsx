import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { useSchool } from "../context/useSchool";

const HeroSection = () => {
  const { schoolInfo } = useSchool();
  const years = new Date().getFullYear() - schoolInfo.establishYear;
  return (
    <section
      className="relative isolate overflow-hidden bg-background"
      style={{
        backgroundImage: `linear-gradient(rgba(247,242,231,0.50), rgba(247,242,231,0.50)), url(${assets.school_bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary-light/70 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-accent-light/70 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-12 lg:py-28">
        {/* Left content */}
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              {schoolInfo.fullname}
            </p>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-5xl font-semibold leading-[1.12] tracking-tight text-text sm:text-6xl lg:text-7xl">
            Every child.
            <br />
            <span className="text-primary">Every dream.</span>
            <br />A brighter future.
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-base leading-8 text-text-secondary sm:text-lg">
            A place where young minds learn, grow and discover their potential.
            Building a strong foundation for tomorrow through education and
            values.
          </p>

          {/* Actions */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-white transition hover:bg-primary-dark"
            >
              Discover Our School
              <span aria-hidden="true">↗</span>
            </Link>

            <Link
              to="/about#story"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-border bg-white px-7 py-4 text-sm font-semibold text-text transition hover:border-primary hover:text-primary"
            >
              Explore Our Story
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Bottom metadata */}
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-border pt-7">
            <div>
              <p className="font-heading text-3xl font-semibold text-primary">
                {years}+
              </p>
              <p className="mt-1 text-xs text-text-secondary">
                Years of learning
              </p>
            </div>

            <div className="h-10 w-px bg-border" />

            <div>
              <p className="text-sm font-semibold text-text">
                {schoolInfo.location}
              </p>
              <p className="mt-1 text-xs text-text-secondary">
                A journey of education
              </p>
            </div>
          </div>
        </div>

        {/* Right visual panel */}
        <div className="relative mx-auto w-full max-w-xl">
          <div className="relative aspect-[4/4.3] overflow-hidden rounded-4xl bg-primary-dark p-5 sm:p-7">
            {/* Decorative circles */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-white/10" />

            <div className="relative flex h-full flex-col justify-between">
              {/* Top content */}
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                    KHPS
                  </p>
                  <p className="mt-2 max-w-45 font-heading text-2xl font-medium leading-tight text-white sm:text-3xl">
                    A foundation for tomorrow.
                  </p>
                </div>

                <div className="rounded-full border border-white/20 px-3 py-2 text-xs text-white/80">
                  Est. School
                </div>
              </div>

              {/* Central visual */}
              <div className="relative flex flex-1 items-center justify-center">
                <div className="absolute h-64 w-64 rounded-full bg-white/5 sm:h-72 sm:w-72" />

                <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-white/20 bg-white/5 sm:h-56 sm:w-56">
                  <div className="text-center">
                    <span className="block font-heading text-7xl font-semibold text-white sm:text-8xl">
                      K
                    </span>
                    <span className="mt-2 block text-xs uppercase tracking-[0.25em] text-white/65">
                      Learn & Grow
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-5 left-0 rounded-2xl bg-accent px-4 py-3 text-sm font-semibold text-text shadow-lg">
                  Every dream matters.
                </div>

                <div className="absolute right-0 top-8 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-xs text-white backdrop-blur">
                  <span className="block text-lg font-semibold">{years}+</span>
                  Years of journey
                </div>
              </div>

              {/* Bottom content */}
              <div className="flex items-end justify-between border-t border-white/15 pt-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-white/50">
                    Learning. Growing. Inspiring.
                  </p>
                  <p className="mt-2 font-heading text-lg text-white">
                    Education with values.
                  </p>
                </div>

                <span className="text-3xl text-accent" aria-hidden="true">
                  ✳
                </span>
              </div>
            </div>
          </div>

          {/* Floating label */}
          <div className="absolute -bottom-5 -left-3 rounded-2xl border border-border bg-white px-5 py-4 shadow-xl sm:-left-8">
            <p className="text-xs text-text-secondary">Our purpose</p>
            <p className="mt-1 font-heading text-lg font-semibold text-primary">
              Learn. Lead. Succeed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
