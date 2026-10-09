import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";

import { GlassCard } from "@/components/ui-kit/GlassCard";
import { productCategories } from "@/data/products";
import { site } from "@/data/site";
import { SectionHeading } from "@/components/ui-kit/SectionHeading";

export function ContactSection({ id }: { id?: string }) {
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    interest: productCategories[0]?.label ?? "",
    message: "",
  });

  const waLink = `https://wa.me/${site.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hi Formula Finishes & Interiors, I'd like a quote for ${form.interest || "interior finishes"}.` +
    (form.message ? ` ${form.message}` : ""),
  )}`;

  return (
    <section id={id} className="relative z-10 mx-auto max-w-7xl px-6 py-16 scroll-mt-24">
      <SectionHeading
        eyebrow="Contact"
        title="Tell us about your space"
        description="Share your rooms, measurements or moodboard and we'll come back with finish options and a fitted price."
      />

      <div className="mx-auto mt-10 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <GlassCard className="p-6 sm:p-8">
          {sent ? (
            <div className="py-10 text-center">
              <p className="font-display text-2xl font-extrabold text-ink">Thanks — got it!</p>
              <p className="mx-auto mt-3 max-w-md text-sm text-ink/75">
                We'll get back to you shortly with finish options and a fitted price.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-brand-foreground shadow-lift transition-opacity hover:opacity-90"
              >
                Go back
              </button>
            </div>
          ) : (
            <form
              className="grid gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                setIsSubmitting(true);
                setTimeout(() => {
                  setSent(true);
                  setIsSubmitting(false);
                  setForm({
                    name: "",
                    phone: "",
                    email: "",
                    interest: productCategories[0]?.label ?? "",
                    message: "",
                  });
                }, 1500);
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Your name">
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                    placeholder="eg...Jane Mwangi"
                  />
                </Field>
                <Field label="Phone">
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (/[^0-9+\s]/.test(value)) {
                        setPhoneError("Only numbers are allowed in this field");
                        setTimeout(() => setPhoneError(""), 3000);
                      }
                      let stripped = value.replace(/[^0-9+]/g, "");
                      if (stripped.length > 13) stripped = stripped.slice(0, 13);
                      
                      let formatted = "";
                      let i = stripped.startsWith("+") ? 4 : 4; 
                      formatted = stripped.substring(0, i);
                      if (stripped.length > i) formatted += " " + stripped.substring(i, i+3);
                      if (stripped.length > i+3) formatted += " " + stripped.substring(i+3, i+6);
                      if (stripped.length > i+6) formatted += " " + stripped.substring(i+6);
                      
                      setForm({ ...form, phone: formatted.trim() });
                    }}
                    className={inputClass}
                    placeholder="0712 345 678"
                    maxLength={16}
                  />
                  {phoneError && (
                    <span className="mt-1.5 block text-xs font-semibold text-rose-500">
                      {phoneError}
                    </span>
                  )}
                </Field>
              </div>
              <Field label="Email">
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/\s/.test(value)) {
                      setEmailError("Spaces are not allowed in email addresses");
                      setTimeout(() => setEmailError(""), 3000);
                    }
                    setForm({ ...form, email: value.replace(/\s/g, "") });
                  }}
                  onBlur={(e) => {
                    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value);
                    if (e.target.value && !valid) {
                      setEmailError("Please enter a valid email address");
                      setTimeout(() => setEmailError(""), 3000);
                    }
                  }}
                  className={inputClass}
                  placeholder="you@example.com"
                />
                {emailError && (
                  <span className="mt-1.5 block text-xs font-semibold text-rose-500">
                    {emailError}
                  </span>
                )}
              </Field>
              <Field label="What are you interested in?">
                <select
                  required
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
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={inputClass}
                  placeholder="Rooms, wall or window sizes, timelines…"
                />
              </Field>
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-lift transition-opacity hover:opacity-90 disabled:opacity-80 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send enquiry"
                )}
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
              onClick={(e) => {
                e.preventDefault();
                const phone = site.whatsapp.replace(/\D/g, "");
                const text = encodeURIComponent(`Hi Formula Finishes & Interiors! I just saw your website and I'm interested in exploring your interior finishes for my space. Could we discuss catalogues, pricing, or a potential site survey?`);
                const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                const url = isMobile
                  ? `https://wa.me/${phone}?text=${text}`
                  : `whatsapp://send?phone=${phone}&text=${text}`;
                window.location.href = url;
              }}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground shadow-lift transition-opacity hover:opacity-90"
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
      </div>
    </section>
  );
}

const inputClass =
  "w-full rounded-2xl border border-white/70 dark:border-white/10 bg-white/70 dark:bg-card/70 px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink/70 dark:placeholder:text-muted-foreground focus:border-brand";

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
