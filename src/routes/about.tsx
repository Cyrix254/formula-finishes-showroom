import { createFileRoute } from "@tanstack/react-router";

import { CtaBanner } from "@/components/ui-kit/CtaBanner";
import { GlassCard } from "@/components/ui-kit/GlassCard";
import { PageHero } from "@/components/ui-kit/PageHero";
import { Reveal } from "@/components/ui-kit/Reveal";
import { SectionHeading } from "@/components/ui-kit/SectionHeading";
import { projectImages } from "@/data/gallery";
import { site, stats } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Formula Finishes and Interiors" },
      {
        name: "description",
        content:
          "Who we are: a Nairobi-based interior finishes team supplying and installing wallpapers, panels, blinds, films and flooring with our own crew.",
      },
      { property: "og:title", content: "About Us | Formula Finishes and Interiors" },
      {
        property: "og:description",
        content: "A Nairobi interior finishes team that measures, supplies and installs in-house.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  {
    title: "Measured, not guessed",
    body: "Every job starts with a site survey so patterns line up and blinds fit the opening to the millimetre.",
  },
  {
    title: "Our own installers",
    body: "We never subcontract fitting. The people who quote your job are the people who finish it.",
  },
  {
    title: "Samples before you commit",
    body: "Physical swatches from our catalogues, viewed in your own light before anything is ordered.",
  },
  {
    title: "Clean handover",
    body: "Furniture returned, offcuts removed, surfaces wiped. You walk into a finished room.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="An interior finishes studio built around installation quality"
        description={`${site.name} supplies and fits wall, window and floor finishes for homes, offices and commercial spaces across Kenya.`}
      />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-10 lg:grid-cols-2">
        <Reveal>
          <img
            src={projectImages[2] ?? projectImages[0]}
            alt="Our team's completed interior finish"
            className="aspect-4/3 w-full rounded-4xl object-cover shadow-lift"
          />
        </Reveal>
        <div>
          <SectionHeading
            eyebrow="Our story"
            title="Finishes chosen well, fitted properly"
            description="We started out hanging wallpaper in Nairobi homes and grew into a full finishes studio — murals printed to wall size, fluted and stone wall panels, roller and vertical blinds, privacy films, wall-to-wall carpet, tiles, vinyl, SPC flooring and artificial grass."
          />
          <p className="mt-4 text-ink/75">
            Because we hold our own catalogues and fit with our own crew, we can move from survey to
            finished room in days rather than weeks — and stand behind the result afterwards.
          </p>
          <dl className="mt-8 grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl glass p-4">
                <dt className="font-display text-2xl font-extrabold text-ink">{s.value}</dt>
                <dd className="mt-1 text-xs text-ink/70">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeading eyebrow="How we work" title="Four things we never cut corners on" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 70}>
              <GlassCard hover className="h-full">
                <p className="font-display text-base font-bold text-ink">{v.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/75">{v.body}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
