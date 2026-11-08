type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

const SectionHeading = ({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) => {
  return (
    <div className={`mb-10 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </p>
      )}

      <h2 className="font-heading text-3xl font-semibold leading-tight text-text sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 max-w-2xl text-base leading-7 text-text-secondary ${
            centered ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
