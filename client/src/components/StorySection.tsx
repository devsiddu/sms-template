import SectionHeading from "./SectionHeading";
import { assets } from "../assets/assets";
import { useSchool } from "../context/useSchool";

const milestones = [
  {
    number: "01",
    period: "The Beginning",
    title: "A humble beginning",
    description:
      "The school's journey began with a simple but meaningful purpose: bringing education closer to children in the community.",
    side: "left",
  },
  {
    number: "02",
    period: "Growing Together",
    title: "A community that believes in education",
    description:
      "With the support of teachers, families and the local community, the school continued its journey of learning and development.",
    side: "right",
  },
  {
    number: "03",
    period: "Today",
    title: "Continuing the journey",
    description:
      "Today, the school continues its commitment to education, helping children build knowledge, confidence and a foundation for the future.",
    side: "left",
  },
];

const StorySection = () => {
  const { schoolInfo } = useSchool();
  const years = new Date().getFullYear() - schoolInfo.establishYear;

  return (
    <section
      id="story"
      className="overflow-hidden bg-background py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow="Our Story"
            title="A journey from humble beginnings to a brighter tomorrow."
            description="Every institution has a story. Ours is a journey shaped by education, perseverance and the belief that every child deserves an opportunity to learn."
            centered
          />
        </div>

        {/* School image */}
        <div className="relative">
          <div className="aspect-5/4 overflow-hidden rounded-4xl bg-primary-dark">
            <img
              className="h-full w-full object-cover"
              src={assets.school_bg}
              alt="Yogisiddeshwar Government Kannada Primary School"
              loading="lazy"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

            {/* Image caption */}
            <div className="absolute bottom-0 left-0 p-7 sm:p-9">
              <p className="font-heading text-2xl font-semibold text-white">
                Our School Through the Years
              </p>

              <p className="mt-2 max-w-xs text-sm leading-6 text-white/80">
                A journey built on education, dedication, and community.
              </p>
            </div>
          </div>

          {/* Experience badge */}
          <div className="absolute -bottom-5 -right-3 rounded-2xl border border-border bg-white p-5 shadow-lg sm:-right-6">
            <p className="font-heading text-4xl font-semibold text-primary">
              {years}+
            </p>
            <p className="mt-1 text-xs text-text-secondary">
              Years of educational journey
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-28">
          <div className="mb-14 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Our Progress
            </p>

            <h3 className="mt-3 font-heading text-3xl font-semibold text-text">
              The journey continues
            </h3>
          </div>

          <div className="relative mx-auto max-w-4xl">
            {/* Timeline line */}
            <div className="absolute bottom-0 left-5 top-0 w-px bg-border sm:left-1/2 sm:-translate-x-1/2" />

            <div className="space-y-12">
              {milestones.map((item, index) => (
                <div
                  key={item.number}
                  className="relative grid grid-cols-[40px_1fr] gap-5 sm:grid-cols-2 sm:gap-12"
                >
                  {/* Timeline marker */}
                  <div className="absolute left-5 top-6 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background bg-primary text-xs font-semibold text-white sm:left-1/2">
                    {item.number}
                  </div>

                  {/* Content */}
                  <div
                    className={`col-start-2 rounded-2xl border border-border bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg sm:col-start-auto sm:p-8 ${
                      index % 2 === 0
                        ? "sm:col-start-1 sm:text-right"
                        : "sm:col-start-2 sm:mt-16"
                    }`}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                      {item.period}
                    </p>

                    <h4 className="mt-3 font-heading text-xl font-semibold text-text sm:text-2xl">
                      {item.title}
                    </h4>

                    <p className="mt-3 text-sm leading-7 text-text-secondary">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-24 rounded-4xl bg-primary-dark px-6 py-12 text-center sm:px-12 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Looking Ahead
          </p>

          <h3 className="mx-auto mt-5 max-w-2xl font-heading text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Our story is still being written, one child at a time.
          </h3>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/65">
            Every lesson learned and every dream encouraged becomes part of the
            school's continuing journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
