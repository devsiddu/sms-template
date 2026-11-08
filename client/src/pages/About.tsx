import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Building2,
  Eye,
  GraduationCap,
  Handshake,
  Heart,
  Image,
  Lightbulb,
  School,
  ShieldCheck,
  Sprout,
  Target,
  Users,
} from "lucide-react";
const items = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide meaningful and accessible education that builds knowledge, encourages curiosity, and helps every child develop confidence and responsibility.",
    color: "bg-[#2d5a27]",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To create a learning environment where every student has the opportunity to grow, discover their potential, and contribute positively to society.",
    color: "bg-[#d98e36]",
  },
  {
    icon: Heart,
    title: "Our Commitment",
    description:
      "To nurture students with care, discipline, respect, and strong values while working together with parents and the wider community.",
    color: "bg-[#2d5a27]",
  },
];
const values = [
  {
    icon: BookOpen,
    title: "Knowledge",
    description: "Encouraging a lifelong love of learning and discovery.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "Building honesty, discipline, and responsibility.",
  },
  {
    icon: Handshake,
    title: "Respect",
    description: "Treating everyone with kindness and dignity.",
  },
  {
    icon: Lightbulb,
    title: "Curiosity",
    description: "Inspiring students to question, explore, and innovate.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Growing stronger through cooperation and shared purpose.",
  },
  {
    icon: Sprout,
    title: "Growth",
    description: "Helping every child develop their unique potential.",
  },
];
const milestones = [
  {
    icon: Sprout,
    title: "Humble Beginnings",
    description:
      "A simple beginning driven by a dream to make education accessible to children in the community.",
    label: "The Beginning",
  },
  {
    icon: School,
    title: "Growing Through Education",
    description:
      "Students, teachers, and the community worked together to build a stronger educational foundation.",
    label: "Growth",
  },
  {
    icon: Building2,
    title: "A New Chapter",
    description:
      "The journey from a humble hut to a school building reflects years of dedication and collective effort.",
    label: "Transformation",
  },
  {
    icon: GraduationCap,
    title: "Continuing the Journey",
    description:
      "Today, the school continues its commitment to learning, student development, and community progress.",
    label: "Our Present",
  },
];
const About = () => {
  return (
    <div>
      <section className="relative overflow-hidden bg-primary px-5 py-24 sm:px-8 lg:py-32">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full border-45 border-white/5" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full border-45 border-white/5" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-[#f5d9a9]">
              <BookOpen size={16} />
              About Our School
            </span>

            <h1 className="mt-7 font-['Fraunces'] text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
              A Journey of
              <span className="block text-[#e8ad57]">Learning & Growth</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Discover the story of KHPS – Yogisiddeshwar Tot Jokanatti, a
              school built on the belief that education can transform lives and
              strengthen communities.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#our-story"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#c47b27]"
              >
                Discover Our Story
                <ArrowRight size={18} />
              </a>

              <a
                href="/contact"
                className="rounded-full border border-white/30 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        id="our-story"
        className="bg-background px-5 py-20 sm:px-8 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-4xl">
              <img
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1000"
                alt="School building"
                className="h-105 w-full object-cover sm:h-130"
                loading="lazy"
              />
            </div>

            <div className="absolute -bottom-7 right-5 rounded-2xl bg-accent p-6 text-white shadow-xl sm:right-8">
              <p className="font-['Fraunces'] text-4xl font-semibold">36+</p>
              <p className="mt-1 text-sm font-medium">Years of Learning</p>
            </div>
          </div>

          {/* Content */}
          <div className="pt-5 lg:pt-0">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
              Our Story
            </span>

            <h2 className="mt-5 font-['Fraunces'] text-4xl font-semibold leading-tight text-[#243d24] sm:text-5xl">
              From Humble Beginnings
              <span className="block text-primary">
                to a Place of Opportunity
              </span>
            </h2>

            <p className="mt-7 text-base leading-8 text-[#626b5d]">
              Every great journey begins with a simple dream. The story of KHPS
              – Yogisiddeshwar Tot Jokanatti is one of dedication,
              determination, and a belief in the power of education.
            </p>

            <p className="mt-5 text-base leading-8 text-[#626b5d]">
              What began with humble beginnings has grown into a school that
              continues to serve its community. Through the years, the school
              has evolved while remaining committed to making education
              accessible and meaningful for children.
            </p>

            <p className="mt-5 text-base leading-8 text-[#626b5d]">
              Our journey is not just about the growth of a building. It is
              about the students, teachers, parents, and community members who
              have contributed to our story.
            </p>

            <a
              href="/gallery"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-primary transition hover:text-accent"
            >
              Explore Our Memories
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>
      <section className="bg-white px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
              What Guides Us
            </span>

            <h2 className="mt-4 font-['Fraunces'] text-4xl font-semibold text-[#243d24] sm:text-5xl">
              Our Purpose & Direction
            </h2>

            <p className="mt-5 leading-7 text-[#687362]">
              The principles that guide our decisions, shape our learning
              environment, and define our commitment to every student.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {items.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-[#e9e5d9] bg-background/60 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.color} text-white`}
                  >
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-7 font-['Fraunces'] text-2xl font-semibold text-[#243d24]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#687362]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-background px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
              What We Believe In
            </span>

            <h2 className="mt-4 font-['Fraunces'] text-4xl font-semibold text-[#243d24] sm:text-5xl">
              Values That Shape
              <span className="block text-primary">Our Students</span>
            </h2>

            <p className="mt-5 leading-7 text-[#687362]">
              Education goes beyond textbooks. We believe in developing
              character, building confidence, and nurturing responsible
              individuals.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="group rounded-2xl border border-[#e5dfcf] bg-white p-7 transition duration-300 hover:border-primary hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-6 font-['Fraunces'] text-2xl font-semibold text-[#243d24]">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#687362]">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-white px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
              Our Journey
            </span>

            <h2 className="mt-4 font-['Fraunces'] text-4xl font-semibold text-[#243d24] sm:text-5xl">
              Every Step Has a Story
            </h2>

            <p className="mt-5 leading-7 text-[#687362]">
              A journey shaped by determination, community support, and a shared
              belief in education.
            </p>
          </div>

          <div className="relative grid gap-10 md:grid-cols-4">
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-[#d9dfd0] md:block" />

            {milestones.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="relative">
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border-4 border-white bg-primary text-white shadow-md">
                    <Icon size={23} />
                  </div>

                  <span className="mt-7 inline-block text-xs font-bold uppercase tracking-widest text-accent">
                    {item.label}
                  </span>

                  <h3 className="mt-3 font-['Fraunces'] text-2xl font-semibold text-[#243d24]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#687362]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-background px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-4xl bg-primary px-7 py-14 text-center sm:px-12 sm:py-20">
            <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full border-40 border-white/5" />
            <div className="absolute -bottom-28 -left-16 h-72 w-72 rounded-full border-40 border-white/5" />

            <div className="relative z-10 mx-auto max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-[#f5d9a9]">
                <Image size={16} />
                Be Part of Our Story
              </span>

              <h2 className="mt-7 font-['Fraunces'] text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Our Story Continues
                <span className="block text-[#e8ad57]">
                  With Every Student.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-xl leading-8 text-white/75">
                Every student adds a new chapter to our journey. Explore our
                school memories and discover the experiences that bring our
                community together.
              </p>

              <div className="mt-9 flex flex-wrap justify-center gap-4">
                <a
                  href="/gallery"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#c47b27]"
                >
                  Explore Gallery
                  <ArrowRight size={18} />
                </a>

                <a
                  href="/contact"
                  className="rounded-full border border-white/30 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
