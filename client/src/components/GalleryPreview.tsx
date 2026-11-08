import { ArrowRight, Camera, Image as ImageIcon } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useSchool } from "../context/SchoolContext";

const GalleryPreview = () => {
  const { galleryImages } = useSchool();
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <Camera size={16} />
              Our Gallery
            </div>

            <SectionHeading
              // eyebrow="Gallery"
              title="Moments That Tell Our Story"
              description="Every picture holds a memory. Explore the everyday moments,
              achievements, celebrations, and experiences that make our school
              special."
            />
          </div>

          <a
            href="/gallery"
            className="group inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#23471f]"
          >
            Explore Gallery
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* Gallery Grid */}
        <div className="grid auto-rows-47.5 grid-cols-2 gap-4 md:auto-rows-57.5 md:grid-cols-4">
          {galleryImages.slice(0, 5).map((item, i) => {
            const className = i % 5 === 0 ? "md:col-span-2 md:row-span-2" : "";
            return (
              <a
                key={item.id}
                href="/gallery"
                className={`group relative overflow-hidden rounded-2xl bg-primary/10 ${className}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent opacity-80 transition group-hover:opacity-100" />

                {/* Category */}
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary">
                  {item.category}
                </span>

                {/* Image Title */}
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                  <h3 className="font-['Fraunces'] text-xl font-medium text-white sm:text-2xl">
                    {item.title}
                  </h3>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition group-hover:bg-accent">
                    <ArrowRight size={17} />
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-[#687362]">
          <ImageIcon size={16} className="text-accent" />
          <p>Memories, milestones, and moments worth remembering.</p>
        </div>
      </div>
    </section>
  );
};
export default GalleryPreview;
