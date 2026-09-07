import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";

import { GlassCard } from "@/components/ui-kit/GlassCard";
import { PageHero } from "@/components/ui-kit/PageHero";
import { productCategories } from "@/data/products";
import { site } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Get a Quote from Formula Finishes and Interiors" },
      {
        name: "description",
        content:
          "Request a site survey or quote for wallpapers, murals, wall panels, blinds, window films or flooring. Call, email or message us on WhatsApp.",
      },
      { property: "og:title", content: "Contact | Get a Quote from Formula Finishes and Interiors" },
      {
        property: "og:description",
        content: "Book a site survey or ask for a fitted quote — we reply the same working day.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: site.name,
          telephone: site.phone,
          email: site.email,
          address: { "@type": "PostalAddress", addressLocality: site.location },
          openingHours: site.hours,
        }),
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    interest: productCategories[0]?.label ?? "",
    message: "",
  });

  const waLink = `https://wa.me/${site.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hi ${site.shortName}, I'd like a quote for ${form.interest || "interior finishes"}.` +
      (form.message ? ` ${form.message}` : ""),
  )}`;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us about your space"
        description="Share your rooms, measurements or moodboard and we'll come back with finish options and a fitted price."
      />

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[1.2fr_1fr]">
        <GlassCard className="p-6 sm:p-8">
          {sent ? (
            <div className="py-10 text-center">
              <p className="font-display text-2xl font-extrabold text-ink">Thanks — got it!</p>
              <p className="mx-auto mt-3 max-w-md text-sm text-ink/75">
                To reach us instantly, tap below and your details will be pre-filled in WhatsApp.
              </p>
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-lift"
              >
                <MessageCircle className="size-4" /> Continue on WhatsApp
              </a>
            </div>
          ) : (
            <form
              className="grid gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Your name">
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                    placeholder="Jane Mwangi"
                  />
                </Field>
                <Field label="Phone">
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={inputClass}
                    placeholder="07xx xxx xxx"
                  />
                </Field>
              </div>
              <Field label="Email">
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                  placeholder="you@example.com"
                />
              </Field>
              <Field label="What are you interested in?">
                <select
                  value={form.interest}
                  onChange={(e) => setForm({ ...form, interest: e.target.value })}
                  className={inputClass}
                >
                  {productCategories.map((c) => (
                    <option key={c.id} value={c.label}>
                      {c.label}
                    </option>
                  ))}
                  <option value="Something else">Something else</option>
                </select>
              </Field>
              <Field label="Details">
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={inputClass}
                  placeholder="Rooms, wall or window sizes, timelines…"
                />
              </Field>
              <button
                type="submit"
                className="mt-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-lift transition-opacity hover:opacity-90"
              >
                Send enquiry
              </button>
            </form>
          )}
        </GlassCard>

        <div className="grid gap-4">
          <GlassCard>
            <p className="font-display text-base font-bold text-ink">Reach us directly</p>
            <ul className="mt-4 space-y-3 text-sm text-ink/75">
              <li className="flex items-center gap-3">
                <Phone className="size-4 text-brand" />
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-ink">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 text-brand" />
                <a href={`mailto:${site.email}`} className="hover:text-ink">
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="size-4 text-brand" />
                {site.location}
              </li>
              <li className="flex items-center gap-3">
                <Clock className="size-4 text-brand" />
                {site.hours}
              </li>
            </ul>
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full glass-strong px-5 py-2.5 text-sm font-semibold text-ink"
            >
              <MessageCircle className="size-4" /> WhatsApp us
            </a>
          </GlassCard>
          <GlassCard>
            <p className="font-display text-base font-bold text-ink">Prefer to browse first?</p>
            <p className="mt-2 text-sm text-ink/75">
              Open our full PDF catalogues and send us the design codes you like.
            </p>
            <a
              href={site.driveCatalogue}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex text-sm font-semibold text-brand"
            >
              Open catalogues
            </a>
          </GlassCard>
        </div>
      </section>
    </>
  );
}

const inputClass =
  "w-full rounded-2xl border border-white/70 bg-white/70 px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink/70 focus:border-brand";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/70">
        {label}
      </span>
      {children}
    </label>
  );
}
