import { createFileRoute } from "@tanstack/react-router";
import { BackgroundVideo } from "@/components/BackgroundVideo";
import { BookingForm } from "@/components/BookingForm";
import clinicInterior from "@/assets/clinic-interior.jpg";
import smile1 from "@/assets/smile-1.jpg";
import smile2 from "@/assets/smile-2.jpg";
import smile3 from "@/assets/smile-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LuxeDental — Luxury Cosmetic Dentistry & Smile Design" },
      {
        name: "description",
        content:
          "Award-winning cosmetic dental clinic. Veneers, implants, whitening and full smile makeovers. Book your consultation today.",
      },
      { property: "og:title", content: "LuxeDental — Luxury Cosmetic Dentistry" },
      {
        property: "og:description",
        content:
          "Precision meets artistry. Book a consultation with our luxury smile design clinic.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Transformations", href: "#transformations" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#booking" },
];

const services = [
  {
    title: "Smile Makeover",
    text: "A complete redesign of your smile, planned digitally and executed with artistry.",
  },
  {
    title: "Porcelain Veneers",
    text: "Ultra-thin, hand-layered ceramics that mimic natural enamel to perfection.",
  },
  {
    title: "Dental Implants",
    text: "Guided, minimally invasive implant surgery with lifelike final restorations.",
  },
  {
    title: "Teeth Whitening",
    text: "Clinically supervised whitening that brightens safely without sensitivity.",
  },
  {
    title: "Invisible Aligners",
    text: "Discreet orthodontics with 3D simulation of your result before you start.",
  },
  {
    title: "Preventive Care",
    text: "Meticulous hygiene and check-ups designed to protect your investment.",
  },
];

const experience = [
  {
    title: "Personalized Treatment",
    text: "Every smile is unique. We craft bespoke treatment plans tailored to your specific needs and aesthetic goals.",
  },
  {
    title: "Advanced Technology",
    text: "State-of-the-art digital imaging and 3D modelling ensure precision planning and predictable results.",
  },
  {
    title: "Natural Results",
    text: "We design smiles that look like they were always yours — balanced, proportional, and effortless.",
  },
  {
    title: "Calm Environment",
    text: "A quiet, private clinic built around comfort, from noise-cancelling suites to sedation options.",
  },
];

const journey = [
  {
    step: "01",
    title: "Consultation",
    text: "A detailed conversation about your goals, followed by a full clinical assessment.",
    points: ["Facial analysis", "Health screening", "Goal mapping"],
  },
  {
    step: "02",
    title: "Digital Planning",
    text: "We use CBCT imaging and 3D modeling to visualize your transformation before treatment begins.",
    points: ["CBCT 3D imaging", "Digital smile design", "Treatment simulation", "Precision measurements"],
  },
  {
    step: "03",
    title: "Treatment",
    text: "Expert execution of your personalized treatment plan using cutting-edge techniques and materials.",
    points: ["Minimally invasive procedures", "Premium ceramics", "Comfort-first sedation"],
  },
  {
    step: "04",
    title: "Aftercare",
    text: "Ongoing reviews and maintenance so your new smile stays flawless for years.",
    points: ["Scheduled reviews", "Home care protocol", "Lifetime support"],
  },
];

const transformations = [
  { img: smile1, name: "Sarah Mitchell", treatment: "Smile Makeover" },
  { img: smile2, name: "Adam Farouk", treatment: "Implants & Veneers" },
  { img: smile3, name: "Nour Hassan", treatment: "Invisible Aligners" },
];

function Index() {
  return (
    <div className="relative min-h-screen text-foreground">
      <BackgroundVideo />


      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#home" className="text-lg font-bold tracking-tight">
            LUXE<span className="text-primary">DENTAL</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((n) => (
              <a
                key={n.label}
                href={n.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#booking"
            className="rounded-full bg-primary px-5 py-2 text-xs font-semibold text-primary-foreground sm:text-sm"
          >
            Book Consultation
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center px-5 pt-24 text-center"
      >


        <div className="mx-auto max-w-3xl">
          <p className="text-xs uppercase tracking-[0.35em] text-primary">
            Cosmetic Dentistry
          </p>
          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-6xl md:text-7xl">
            Confidence Starts With{" "}
            <span className="text-primary">Your Smile</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-sm text-muted-foreground sm:text-base">
            Take the first step towards your transformation today. Precision dentistry,
            delivered with the calm of a private atelier.
          </p>
          <div className="mt-10 flex justify-center">
            <a
              href="#booking"
              className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground"
            >
              Book Consultation
            </a>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-4 border-t border-border/60 pt-8">
            {[
              ["12+", "Years of practice"],
              ["4,800", "Smiles designed"],
              ["4.9", "Patient rating"],
            ].map(([v, l]) => (
              <div key={l}>
                <p className="text-2xl font-semibold text-primary sm:text-3xl">{v}</p>
                <p className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">
                  {l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative px-5 py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-xs uppercase tracking-[0.35em] text-primary">
            Our Services
          </p>
          <h2 className="mt-4 text-center text-3xl font-bold sm:text-5xl">
            Treatments, <span className="text-primary">Refined</span>
          </h2>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-border bg-card/60 p-7 backdrop-blur-sm transition-colors hover:border-primary/60"
              >
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformations */}
      <section id="transformations" className="relative px-5 py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-xs uppercase tracking-[0.35em] text-primary">
            Transformations
          </p>
          <h2 className="mt-4 text-center text-3xl font-bold sm:text-5xl">
            Real People, <span className="text-primary">Real Smiles</span>
          </h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {transformations.map((t) => (
              <figure
                key={t.name}
                className="overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur-sm"
              >
                <img
                  src={t.img}
                  alt={`${t.name} after ${t.treatment} at LuxeDental`}
                  loading="lazy"
                  width={912}
                  height={1104}
                  className="h-80 w-full object-cover object-top"
                />
                <figcaption className="flex items-center justify-between px-5 py-4">
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.treatment}</p>
                  </div>
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    5.0
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="relative px-5 py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-primary">
            The Experience
          </p>
          <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
            Crafted for <span className="text-primary">Excellence</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm text-muted-foreground">
            Where precision meets artistry. Every detail of your journey is carefully
            considered.
          </p>
          <div className="mt-14 grid gap-8 text-left sm:grid-cols-2">
            {experience.map((e) => (
              <div key={e.title} className="flex gap-4">
                <span className="mt-1 h-9 w-9 shrink-0 rounded-lg border border-primary/50 bg-primary/10" />
                <div>
                  <h3 className="font-semibold">{e.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {e.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="relative px-5 py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold sm:text-5xl">
            Your <span className="text-primary">Journey</span>
          </h2>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {journey.map((j) => (
              <div
                key={j.step}
                className="rounded-2xl border border-border bg-card/60 p-7 backdrop-blur-sm"
              >
                <span className="text-xs font-semibold tracking-widest text-primary">
                  {j.step}
                </span>
                <h3 className="mt-2 text-xl font-semibold">{j.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {j.text}
                </p>
                <ul className="mt-4 space-y-2">
                  {j.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic */}
      <section className="relative px-5 py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <img
            src={clinicInterior}
            alt="LuxeDental treatment suite interior"
            loading="lazy"
            width={1408}
            height={1008}
            className="rounded-2xl border border-border object-cover"
          />
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-primary">The Clinic</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              A space designed to <span className="text-primary">calm</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Private suites, warm lighting and a team that moves quietly. From the moment
              you arrive, everything is arranged so treatment feels less like a procedure
              and more like a considered service.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Private, single-patient suites",
                "Sterilisation to hospital standard",
                "Sedation and anxiety-friendly protocols",
                "Same-day ceramics on select cases",
              ].map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="relative px-5 py-28">
        <div className="mx-auto max-w-3xl">
          <p className="text-center text-xs uppercase tracking-[0.35em] text-primary">
            Booking
          </p>
          <h2 className="mt-4 text-center text-3xl font-bold sm:text-5xl">
            Reserve Your <span className="text-primary">Consultation</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-center text-sm text-muted-foreground">
            Choose a time that suits you. We'll confirm by phone and send a preparation
            guide before your visit.
          </p>
          <div className="mt-12">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-border/60 px-5 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-lg font-bold">
            LUXE<span className="text-primary">DENTAL</span>
          </p>
          <p className="text-xs text-muted-foreground">
            Sat–Thu, 10:00 – 20:00 · +20 100 000 0000
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} LuxeDental. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
