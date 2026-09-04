import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/4 size-96 rounded-full bg-brand/25 blur-3xl animate-floaty"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-10 size-80 rounded-full bg-mint/40 blur-3xl animate-floaty"
      />
      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-10">
        <span className="inline-flex items-center rounded-full glass-strong px-4 py-1.5 text-xs font-semibold tracking-wide text-ink/70 uppercase">
          {eyebrow}
        </span>
        <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.05] text-ink lg:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-ink/60">{description}</p>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
