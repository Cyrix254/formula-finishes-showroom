export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-ink lg:text-4xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-ink/60">{description}</p> : null}
    </div>
  );
}
