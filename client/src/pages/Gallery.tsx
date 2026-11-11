import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  ChevronLeft,
  ChevronRight,
  Images,
  X,
} from "lucide-react";
import { useSchool } from "../context/useSchool";

const categories = [
  "All",
  "Campus",
  "Learning",
  "Students",
  "Activities",
  "Events",
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const { galleryImages } = useSchool();
  const filteredImages = useMemo(() => {
    if (activeCategory === "All") return galleryImages;

    return galleryImages.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const selectedIndex = filteredImages.findIndex(
    (item) => item.id === selectedImage?.id,
  );

  const showPrevious = () => {
    const index =
      (selectedIndex - 1 + filteredImages.length) % filteredImages.length;

    setSelectedImage(filteredImages[index]);
  };

  const showNext = () => {
    const index = (selectedIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[index]);
  };

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedImage(null);
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage, selectedIndex, filteredImages]);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-20 text-white md:py-28">
        <div className="container relative z-10">
          <Link
            to="/"
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-white/75 transition hover:text-white"
          >
            <ArrowLeft size={17} />
            Back to Home
          </Link>

          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em]">
              <Camera size={15} />
              Our Memories
            </div>

            <h1 className="font-heading text-5xl font-semibold leading-tight md:text-7xl">
              Moments That
              <span className="block text-accent">Tell Our Story.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
              Explore moments from our school life — learning, activities,
              celebrations, and the memories we create together.
            </p>
          </div>

          <div className="mt-12 flex items-center gap-3 text-sm text-white/70">
            <Images size={19} />
            <span>{galleryImages.length} photographs</span>
            <span className="text-white/30">•</span>
            <span>{categories.length - 1} categories</span>
          </div>
        </div>

        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-8 -top-8 h-56 w-56 rounded-full border border-white/10" />
      </section>

      {/* Gallery */}
      <section className="section">
        <div className="container">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Photo Gallery
              </span>
              <h2 className="section-heading mt-3">Explore Our Memories</h2>
              <p className="section-description mt-3">
                Every photograph captures a moment of learning, growth, and
                togetherness.
              </p>
            </div>

            <div className="text-sm text-text-secondary">
              Showing{" "}
              <span className="font-semibold text-text">
                {filteredImages.length}
              </span>{" "}
              photographs
            </div>
          </div>

          {/* Category filters */}
          <div className="mb-10 flex flex-wrap gap-2">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border px-5 py-2.5 text-sm font-medium transition ${
                    isActive
                      ? "border-primary bg-primary text-white"
                      : "border-border bg-surface text-text-secondary hover:border-primary hover:text-primary"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Image grid */}
          {filteredImages.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredImages.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedImage(item)}
                  className={`group relative block w-full overflow-hidden rounded-2xl bg-surface text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${
                    index === 0 ? "lg:col-span-2" : ""
                  }`}
                >
                  <div
                    className={`relative overflow-hidden ${
                      index === 0 ? "aspect-video" : "aspect-4/3"
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent opacity-80 transition group-hover:opacity-100" />

                    <div className="absolute left-5 top-5">
                      <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-primary backdrop-blur">
                        {item.category}
                      </span>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white md:p-6">
                      <div>
                        <h3 className="font-heading text-xl font-semibold md:text-2xl">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-xs text-white/75">
                          {item.date}
                        </p>
                      </div>

                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur transition group-hover:bg-white group-hover:text-primary">
                        <ArrowUpRightIcon />
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-border bg-surface px-6 py-20 text-center">
              <Images size={42} className="mx-auto text-text-light" />
              <h3 className="mt-5 font-heading text-2xl text-text">
                No photographs found
              </h3>
              <p className="mt-2 text-sm text-text-secondary">
                There are no photographs in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="pb-20">
        <div className="container">
          <div className="rounded-3xl bg-primary px-7 py-12 text-center text-white md:px-16 md:py-16">
            <Camera size={34} className="mx-auto text-accent" />

            <h2 className="mt-5 font-heading text-3xl font-semibold md:text-4xl">
              Every Picture Has a Story
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/70 md:text-base">
              Stay connected with our school and discover more updates,
              activities, and achievements.
            </p>

            <Link
              to="/news"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-primary"
            >
              Explore School News
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/95 p-4 md:p-8"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <button
            onClick={() => setSelectedImage(null)}
            aria-label="Close image preview"
            className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <X size={23} />
          </button>

          <button
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:left-8"
          >
            <ChevronLeft size={26} />
          </button>

          <div
            className="relative flex max-h-full w-full max-w-5xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-h-[72vh] max-w-full rounded-lg object-contain"
            />

            <div className="mt-5 w-full max-w-3xl text-center text-white">
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                {selectedImage.category}
              </span>

              <h3 className="mt-2 font-heading text-2xl font-semibold">
                {selectedImage.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/65">
                {selectedImage.description}
              </p>

              <p className="mt-3 text-xs text-white/45">
                {selectedIndex + 1} of {filteredImages.length} ·{" "}
                {selectedImage.date}
              </p>
            </div>
          </div>

          <button
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:right-8"
          >
            <ChevronRight size={26} />
          </button>
        </div>
      )}
    </main>
  );
}

function ArrowUpRightIcon() {
  return <ArrowRight size={19} className="-rotate-45" />;
}
