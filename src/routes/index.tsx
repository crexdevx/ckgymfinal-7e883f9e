import { createFileRoute } from "@tanstack/react-router";
import {
  Dumbbell,
  Flame,
  HeartPulse,
  MapPin,
  Phone,
  Clock,
  Users,
  Trophy,
  ArrowRight,
  Check,
  Activity,
  ShieldCheck,
} from "lucide-react";
import heroImage from "@/assets/hero-greek-god-video.jpg";
import logoImage from "@/assets/ck-gym-logo.jpg";
import founderImage from "@/assets/ck-gym-founder.jpg";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { Gallery } from "@/components/gallery";
import { GYM, WA_JOIN, WA_MONTHLY, WA_SIX_MONTH } from "@/lib/ck-gym";

const programs = [
  {
    icon: Dumbbell,
    title: "Strength & Bodybuilding",
    body: "Free weights, barbells and machines with form coaching on every lift.",
  },
  {
    icon: Flame,
    title: "Fat Loss & Conditioning",
    body: "Circuit and cardio sessions built around your body type and schedule.",
  },
  {
    icon: HeartPulse,
    title: "General Fitness",
    body: "Beginner-friendly plans for stamina, posture and everyday strength.",
  },
  {
    icon: Trophy,
    title: "Competition Prep",
    body: "Focused blocks for local physique and powerlifting athletes in Assam.",
  },
];

const hours = [
  { day: "Monday – Friday", time: "5:30 AM – 9:30 PM" },
  { day: "Saturday", time: "6:00 AM – 9:00 PM" },
  { day: "Sunday", time: "6:00 AM – 11:00 AM" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthClub",
  name: "CK Gym",
  alternateName: ["CK Gym Nalbari", "CKgym"],
  description:
    "CK Gym is a local gym and fitness centre in Sondha, Nalbari, Assam offering strength training, weight loss, cardio and personal coaching.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "FF3V+RC6, Sondha",
    addressLocality: "Nalbari",
    addressRegion: "Assam",
    postalCode: "781369",
    addressCountry: "IN",
  },
  areaServed: ["Nalbari", "Sondha", "Assam"],
  priceRange: "₹₹",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "05:30",
      closes: "21:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "06:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "06:00",
      closes: "11:00",
    },
  ],
};

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "CK Gym Nalbari | Best Gym & Fitness Centre in Nalbari, Assam" },
      {
        name: "description",
        content:
          "CK Gym in Sondha, Nalbari (Assam) — the best gym near you for strength training, weight loss and personal coaching. Visit us today.",
      },
      { name: "keywords", content: "CK Gym, CK Gym Nalbari, best gym Nalbari, gym in Nalbari Assam" },
      { property: "og:title", content: "CK Gym Nalbari | Best Gym in Nalbari, Assam" },
      {
        property: "og:description",
        content:
          "Strength, conditioning and coaching at CK Gym, Sondha, Nalbari, Assam.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: "CK Gym Nalbari | Best Gym in Nalbari, Assam" },
      {
        name: "twitter:description",
        content: "Train at CK Gym in Sondha, Nalbari, Assam. Strength, fat loss and coaching.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main id="top">
        {/* Hero */}
        <section className="relative isolate flex h-[100svh] items-center overflow-hidden bg-background pt-16">
          <video
            src="/ck-gym-hero-mobile.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={heroImage}
            width={720}
            height={408}
            className="absolute inset-0 -z-10 h-full w-full object-contain"
            aria-label="Marble Greek god statue holding a back double biceps pose, symbolising strength at CK Gym Nalbari"
          />
          {/* readability scrims */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/95 via-background/70 to-background/20 md:hidden" />
          <div className="absolute inset-0 -z-10 hidden bg-hero-scrim md:block" />
          <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background to-transparent" />

          <div className="mx-auto flex h-full w-full max-w-6xl flex-col justify-start px-5 pb-10 pt-16 md:pt-24">
            <div className="flex h-full max-w-full flex-col justify-between sm:block sm:h-auto md:max-w-2xl">

              <div>
                <p className="eyebrow">Nalbari · Sondha · Assam</p>
                <h1 className="mt-2 font-display text-[clamp(2.25rem,10.5vw,3.75rem)] leading-[0.9] tracking-[0.005em] sm:mt-3 sm:text-6xl md:mt-5 md:text-[clamp(4rem,7vw,6.5rem)]">
                  <span className="block text-foreground">Build strength.</span>
                  <span className="block text-gradient-gold">Build yourself.</span>
                </h1>
              </div>
              <div>
                <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base md:mt-6 md:text-lg">
                  CK Gym is Nalbari's home for serious training — heavy weights, honest coaching and a
                  floor where beginners and athletes push side by side.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-8">
                  <Button variant="hero" size="xl" asChild className="h-12 px-7 text-xs md:h-14 md:px-9 md:text-sm">
                    <a href={WA_JOIN} target="_blank" rel="noopener noreferrer">
                      Start training <ArrowRight />
                    </a>
                  </Button>
                  <Button variant="heroOutline" size="xl" asChild className="h-12 px-7 text-xs md:h-14 md:px-9 md:text-sm">
                    <a href={GYM.mapUrl} target="_blank" rel="noreferrer">
                      <MapPin /> Directions
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Stats */}
        <section className="border-y border-border bg-card">
          <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-border md:grid-cols-4">
            {[
              { icon: Dumbbell, k: "30+", v: "Machines & free weights" },
              { icon: Users, k: "Local", v: "Coaches from Nalbari" },
              { icon: Clock, k: "16 hrs", v: "Open daily on weekdays" },
              { icon: Trophy, k: "Est. 2020", v: "Training Nalbari since" },
            ].map(({ icon: Icon, k, v }) => (
              <div key={k} className="px-4 py-8 text-center sm:px-5">
                <Icon className="mx-auto size-5 text-primary" />
                <p className="mt-3 font-display text-2xl sm:text-3xl">{k}</p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-widest text-muted-foreground sm:text-xs">
                  {v}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Programs */}
        <section id="programs" className="mx-auto max-w-6xl px-5 pb-24">
          <p className="eyebrow">Services / Programs</p>
          <h2 className="mt-4 max-w-xl font-display text-4xl sm:text-5xl">
            Disciplines <span className="text-gradient-gold">fit for a god</span>
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {programs.map(({ icon: Icon, title, body }) => (
              <article
                key={title}
                className="group rounded-lg border border-border bg-card p-7 transition-colors hover:border-primary/60"
              >
                <Icon className="size-6 text-primary" />
                <h3 className="mt-5 font-display text-2xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Membership plans */}
        <section id="membership" className="border-y border-border bg-card">
          <div className="mx-auto max-w-6xl px-5 py-24">
            <p className="eyebrow">Membership plans</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">
              Simple, honest <span className="text-gradient-gold">pricing</span>
            </h2>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              <article className="rounded-lg border border-border bg-background p-8 transition-colors hover:border-primary/60">
                <h3 className="font-display text-2xl">Monthly membership</h3>
                <p className="mt-5 font-display text-5xl text-foreground">
                  ₹500
                  <span className="ml-2 align-middle text-base font-normal tracking-widest text-muted-foreground">
                    / MONTH
                  </span>
                </p>
                <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-foreground">₹500 per month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-foreground">Admission fee: ₹1,000 (one time)</span>
                  </li>
                </ul>
                <Button variant="heroOutline" size="xl" className="mt-8 w-full" asChild>
                  <a href={WA_MONTHLY} target="_blank" rel="noopener noreferrer">
                    Join now
                  </a>
                </Button>
              </article>

              <article className="relative rounded-lg border border-primary/70 bg-background p-8 shadow-gold">
                <span className="absolute -top-3 left-8 rounded-sm bg-primary px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-primary-foreground">
                  Best value
                </span>
                <h3 className="font-display text-2xl">6 month membership</h3>
                <p className="mt-5 font-display text-5xl text-gradient-gold">
                  ₹3,000
                  <span className="ml-2 align-middle text-base font-normal tracking-widest text-muted-foreground">
                    / 6 MONTHS
                  </span>
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-foreground">₹3,000 for 6 months</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-foreground">Best value plan</span>
                  </li>
                </ul>
                <Button variant="hero" size="xl" className="mt-8 w-full" asChild>
                  <a href={WA_SIX_MONTH} target="_blank" rel="noopener noreferrer">
                    Join now
                  </a>
                </Button>
              </article>
            </div>
          </div>
        </section>

        <Gallery />

        {/* About / Founder */}
        <section id="about" className="mx-auto max-w-6xl px-5 py-24">
          <div className="grid items-center gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-14">
            <div className="min-w-0 order-1 md:order-2">
              <p className="eyebrow">About CK Gym · Founder &amp; Gym Owner</p>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl">
                Ajoy <span className="text-gradient-gold">Barman</span>
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Built with a passion for fitness and a genuine desire to help people become
                stronger, CK Gym is more than just a place to train. Ajoy Barman, the founder, believes in
                staying approachable, treating every member with respect, and creating an
                environment where beginners and experienced athletes can train together.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                He is on the floor most days — happy to show you a machine, correct your form or
                simply talk through where to start. No pressure, no judgement, just steady work and
                honest guidance.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Humble and approachable",
                  "Beginner friendly",
                  "Dedicated to every member",
                  "Focused on real progress",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative order-2 md:order-1">
              <div className="absolute -inset-3 -z-10 rounded-lg bg-gradient-to-tr from-primary/25 to-transparent blur-xl" />
              <img
                src={founderImage}
                alt="Ajoy Barman, founder and owner of CK Gym, Nalbari"
                width={1000}
                height={1600}
                loading="lazy"
                className="w-full rounded-lg border border-border object-cover shadow-panel"
              />
            </div>
          </div>
        </section>


        {/* Why */}
        <section id="why" className="bg-background">
          <div className="mx-auto max-w-6xl px-5 py-24">
            <p className="eyebrow">Why CK Gym</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">
              Nalbari's <span className="text-gradient-gold">training temple</span>
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              A neighbourhood gym in Sondha, Nalbari, built for people who want real results close
              to home. Every new member gets a walkthrough, a starting plan and someone watching
              their form.
            </p>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Dumbbell,
                  title: "30+ Machines",
                  body: "Quality equipment for serious training.",
                },
                {
                  icon: Activity,
                  title: "Open cardio area",
                  body: "Dedicated space for cardio and conditioning.",
                },
                {
                  icon: ShieldCheck,
                  title: "Expert guidance",
                  body: "Support for beginners and experienced members.",
                },
                {
                  icon: Trophy,
                  title: "Strength & size",
                  body: "Train with a focus on strength and muscle growth.",
                },
              ].map(({ icon: Icon, title, body }) => (
                <article
                  key={title}
                  className="rounded-lg border border-border bg-card p-7 transition-colors hover:border-primary/60"
                >
                  <Icon className="size-6 text-primary" />
                  <h3 className="mt-5 font-display text-xl">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>


        {/* Visit */}
        <section id="visit" className="mx-auto max-w-6xl px-5 py-24">
          <p className="eyebrow">Contact &amp; visit</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">
            Come see the <span className="text-gradient-gold">floor</span>
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-7">
              <MapPin className="size-5 text-primary" />
              <h3 className="mt-4 font-display text-xl">Address</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{GYM.address}</p>
              <Button variant="heroOutline" size="sm" className="mt-5" asChild>
                <a href={GYM.mapUrl} target="_blank" rel="noreferrer">
                  Open in Maps
                </a>
              </Button>
            </div>
            <div className="rounded-lg border border-border bg-card p-7">
              <Clock className="size-5 text-primary" />
              <h3 className="mt-4 font-display text-xl">Business hours</h3>
              <dl className="mt-3 space-y-2 text-sm">
                {hours.map(({ day, time }) => (
                  <div key={day} className="flex justify-between gap-3">
                    <dt className="text-muted-foreground">{day}</dt>
                    <dd className="text-foreground">{time}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="rounded-lg border border-border bg-card p-7">
              <Phone className="size-5 text-primary" />
              <h3 className="mt-4 font-display text-xl">Membership</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Walk in any day, or message us on WhatsApp at {GYM.phoneDisplay} for current
                membership details.
              </p>
              <Button variant="hero" size="sm" className="mt-5" asChild>
                <a href={WA_JOIN} target="_blank" rel="noopener noreferrer">
                  Join now
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <img
              src={logoImage}
              alt="CK Gym logo"
              width={120}
              height={120}
              loading="lazy"
              className="h-10 w-auto object-contain"
            />
            <span className="font-display text-lg tracking-wide text-foreground">
              Nalbari, Assam
            </span>
          </div>
          <p>© {new Date().getFullYear()} CK Gym. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
