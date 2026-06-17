import logo from "@/assets/freshstart-logo.png";
import heroRoom from "@/assets/hero-room.jpg";
import servicePainting from "@/assets/service-painting.jpg";
import serviceGardening from "@/assets/service-gardening.jpg";
import serviceExterior from "@/assets/service-exterior.jpg";

const PHONE = "+44 7856 322075";
const PHONE_HREF = "tel:+447856322075";
const ADDRESS = "86–90 Paul St, London EC2A 4NE";
const HOURS_SCHEDULE = ["9 am–10 pm,", "Monday through Sunday"].join("\n");

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="FreshStart" className="h-9 w-auto" />
        </a>
        <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
          <a href="#services" className="transition hover:text-primary">Services</a>
          <a href="#about" className="transition hover:text-primary">About</a>
          <a href="#reviews" className="transition hover:text-primary">Reviews</a>
          <a href="#contact" className="transition hover:text-primary">Contact</a>
        </nav>
        <a
          href={PHONE_HREF}
          className="hidden rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90 sm:inline-flex"
        >
          Call for a free quote
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 pt-16 pb-20 md:grid-cols-12 md:gap-12 md:pt-24 md:pb-28">
        <div className="md:col-span-6 md:pt-8">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            London · Walthamstow · Leyton
          </p>
          <h1 className="text-5xl leading-[1.05] text-primary md:text-6xl lg:text-7xl">
            Bring the fresh start into your home.
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Friendly, reliable painters and gardeners serving East London. Honest work,
            tidy finish, and a free quote — any time you ring.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={PHONE_HREF}
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition hover:opacity-90"
            >
              Call {PHONE}
            </a>
            <a
              href="#services"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition hover:border-primary hover:text-primary"
            >
              See what we do
            </a>
          </div>
          <div className="mt-10 flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} />
              ))}
            </div>
            <span>4.9 · 10 Google reviews</span>
          </div>
        </div>
        <div className="relative md:col-span-6">
          <div className="overflow-hidden rounded-sm shadow-[var(--shadow-soft)]">
            <img
              src={heroRoom}
              alt="Freshly painted London townhouse interior with sage green walls"
              width={1600}
              height={1200}
              className="h-[420px] w-full object-cover md:h-[560px]"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-sm border border-border bg-card p-5 shadow-[var(--shadow-soft)] md:block">
            <p className="font-serif text-3xl text-primary">10+</p>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Years on the tools
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    title: "Interior Painting",
    body: "Walls, ceilings, woodwork and feature rooms. Clean lines, careful prep, no mess left behind.",
    img: servicePainting,
  },
  {
    title: "Gardening & Upkeep",
    body: "Lawns, hedges, pruning and tidy-ups. Regular visits or one-off transformations.",
    img: serviceGardening,
  },
  {
    title: "Exterior & Odd Jobs",
    body: "Front doors, fences, rendering touch-ups and the small things on your list.",
    img: serviceExterior,
  },
];

function Services() {
  return (
    <section id="services" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">What we do</p>
            <h2 className="mt-3 text-4xl text-primary md:text-5xl">A small team. A long list of jobs done well.</h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Gardening, painting and the bits in between — local, reliable, and always free to
            quote on anything you ring us about.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="group">
              <div className="overflow-hidden rounded-sm">
                <img
                  src={s.img}
                  alt={s.title}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-5 text-2xl text-primary">{s.title}</h3>
              <p className="mt-2 text-muted-foreground">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-t border-border">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-5">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">About</p>
          <h2 className="mt-3 text-4xl text-primary md:text-5xl">
            Local hands, honest work.
          </h2>
        </div>
        <div className="space-y-5 text-lg text-muted-foreground md:col-span-7">
          <p>
            FreshStart is a small painting and gardening crew based in East London — covering
            Walthamstow, Leyton and the surrounding boroughs. Every job, big or small, gets the
            same care: tidy site, fair price, finish you can be proud of.
          </p>
          <p>
            Got a question, or want a quote? Give us a ring any time. We'll come round, take a
            look, and tell you straight what it'll cost.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-4 sm:grid-cols-3">
            <Stat k="4.9" l="Google rating" />
            <Stat k="10+" l="Years experience" />
            <Stat k="Free" l="Quotes, always" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ k, l }: { k: string; l: string }) {
  return (
    <div className="border-l-2 border-primary pl-4">
      <p className="font-serif text-3xl text-primary">{k}</p>
      <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{l}</p>
    </div>
  );
}

const reviews = [
  {
    quote: "Amazing service, extremely happy with the result!",
    name: "Google reviewer",
  },
  {
    quote: "Worked very hard especially the Chinese brother — very good honest people.",
    name: "H.",
  },
  {
    quote: "Very friendly, good English communication and they did a very good job.",
    name: "B.",
  },
];

function Reviews() {
  return (
    <section id="reviews" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Reviews</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-4xl text-primary md:text-5xl">
            Rated 4.9 by neighbours across East London.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex h-full flex-col justify-between rounded-sm border border-border bg-card p-7 shadow-[var(--shadow-soft)]"
            >
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} />
                ))}
              </div>
              <blockquote className="mt-5 font-serif text-xl leading-snug text-foreground">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-6 text-sm text-muted-foreground">— {r.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-12 rounded-sm bg-primary p-10 text-primary-foreground md:grid-cols-12 md:p-16">
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.18em] opacity-70">Get in touch</p>
            <h2 className="mt-3 text-4xl md:text-5xl">
              Ring for a free quote — any job, big or small.
            </h2>
            <p className="mt-5 max-w-md opacity-80">
              Pick up the phone and we'll come and have a look. No pressure, no obligation —
              just an honest price.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={PHONE_HREF}
                className="rounded-full bg-background px-6 py-3 text-sm font-medium text-primary transition hover:opacity-90"
              >
                Call {PHONE}
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary-foreground/10"
              >
                Find us on Instagram
              </a>
            </div>
          </div>
          <dl className="space-y-6 border-t border-primary-foreground/20 pt-8 md:col-span-5 md:border-t-0 md:border-l md:pt-0 md:pl-12">
            <Info label="Phone" value={PHONE} href={PHONE_HREF} />
            <Info label="Address" value={ADDRESS} />
            <Info label="Hours" value={HOURS_SCHEDULE} />
            <Info label="Areas" value="Walthamstow, Leyton & all of East London" />
          </dl>
        </div>
      </div>
    </section>
  );
}

function Info({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-[0.18em] opacity-60">{label}</dt>
      <dd className="mt-1 whitespace-pre-line font-serif text-xl">
        {href ? <a href={href} className="underline-offset-4 hover:underline">{value}</a> : value}
      </dd>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <img src={logo} alt="FreshStart" className="h-8 w-auto" />
          <p className="text-sm text-muted-foreground">
            Painting & gardening · London
          </p>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} FreshStart. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function Star() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-accent">
      <path d="M12 17.3l-6.2 3.7 1.6-7.1L2 9.2l7.2-.6L12 2l2.8 6.6 7.2.6-5.4 4.7 1.6 7.1z" />
    </svg>
  );
}
