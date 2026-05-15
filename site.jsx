/* global React, ReactDOM, useTweaks, TweaksPanel, TweakSection, TweakColor, TweakRadio */
const { useState, useEffect, useRef, useMemo } = React;

/* ----------------------------- Icons ----------------------------- */
const Icon = {
  arrow: (p = {}) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  arrowUR: (p = {}) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  ),
  check: (p = {}) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M4 12.5 10 18 20 6" />
    </svg>
  ),
  plus: (p = {}) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" {...p}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  ),
  minus: (p = {}) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" {...p}>
      <path d="M5 12h14" />
    </svg>
  ),
  monitor: (p = {}) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="3" y="4" width="18" height="13" rx="1.5" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  ),
  refresh: (p = {}) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M3 12a9 9 0 0 1 15.5-6.3L21 8M21 3v5h-5M21 12a9 9 0 0 1-15.5 6.3L3 16M3 21v-5h5" />
    </svg>
  ),
  target: (p = {}) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" />
    </svg>
  ),
  wrench: (p = {}) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M14.7 6.3a4 4 0 0 0 5.1 5.1l-9 9a2.8 2.8 0 1 1-4-4l9-9.1a4 4 0 0 0-1.1-1z" />
    </svg>
  ),
  phone: (p = {}) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="7" y="2" width="10" height="20" rx="2.2" />
      <path d="M11 18.5h2" />
    </svg>
  ),
  spark: (p = {}) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
    </svg>
  ),
  mail: (p = {}) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
    </svg>
  ),
};

/* ----------------------------- Reveal ----------------------------- */
function Reveal({ children, delay = 0, as: As = "div", className = "", ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <As
      ref={ref}
      className={`reveal ${shown ? "is-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </As>
  );
}

/* ----------------------------- Nav ----------------------------- */
function Nav({ onCta }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["services", "Services"],
    ["work", "Work"],
    ["process", "Process"],
    ["pricing", "Pricing"],
    ["faq", "FAQ"],
  ];
  const go = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
  };
  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="nav-inner">
        <a className="logo" href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
          <span className="logo-mark" aria-hidden>
            <svg viewBox="0 0 32 32" fill="none">
              <path d="M6 26 16 6l10 20" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
              <path d="M11 21h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
              <circle cx="16" cy="6" r="1.2" fill="currentColor"/>
            </svg>
          </span>
          <span className="logo-word">Avanor<span className="logo-dot">.</span></span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          {links.map(([id, label]) => (
            <button key={id} className="nav-link" onClick={() => go(id)}>{label}</button>
          ))}
        </nav>
        <div className="nav-actions">
          <button className="nav-link nav-link--ghost" onClick={() => go("contact")}>Contact</button>
          <button className="btn btn-primary btn-sm" onClick={onCta}>
            Free Website Review <Icon.arrow width="14" height="14" />
          </button>
        </div>
        <button className="nav-toggle" aria-label="Menu" onClick={() => setOpen(!open)}>
          <span className={`bar ${open ? "x1" : ""}`}></span>
          <span className={`bar ${open ? "x2" : ""}`}></span>
        </button>
      </div>
      {open && (
        <div className="nav-mobile">
          {links.map(([id, label]) => (
            <button key={id} className="nav-mobile-link" onClick={() => go(id)}>{label}</button>
          ))}
          <button className="nav-mobile-link" onClick={() => go("contact")}>Contact</button>
          <button className="btn btn-primary" onClick={() => { setOpen(false); onCta(); }}>
            Free Website Review <Icon.arrow width="14" height="14"/>
          </button>
        </div>
      )}
    </header>
  );
}

/* ----------------------------- Hero ----------------------------- */
function Hero({ scrollTo }) {
  return (
    <section className="hero" data-screen-label="01 Hero">
      <div className="hero-grain" aria-hidden></div>
      <div className="hero-glow" aria-hidden></div>
      <div className="container hero-inner">
        <Reveal className="eyebrow">
          <span className="dot" /> Avanor Designs · est. 2021 · independent studio
        </Reveal>
        <Reveal delay={80}>
          <h1 className="hero-title">
            Your business <em className="serif-em">deserves</em> a website that looks as good as the work you do.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="hero-sub">
            Avanor Designs creates modern websites, landing pages, and digital experiences for small businesses ready to grow online.
          </p>
        </Reveal>
        <Reveal delay={240} className="hero-ctas">
          <button className="btn btn-primary btn-lg" onClick={() => scrollTo("contact")}>
            Get a Free Website Review <Icon.arrow width="16" height="16" />
          </button>
          <button className="btn btn-ghost btn-lg" onClick={() => scrollTo("services")}>
            View Services
          </button>
        </Reveal>
        <Reveal delay={340} className="hero-trust">
          {[
            ["Mobile-Friendly", "100% responsive"],
            ["Fast Launch", "in 2–4 weeks"],
            ["Modern Design", "built bespoke"],
            ["Small-Business Focused", "no agency bloat"],
          ].map(([label, sub]) => (
            <div className="trust" key={label}>
              <Icon.check width="14" height="14" />
              <div>
                <div className="trust-label">{label}</div>
                <div className="trust-sub">{sub}</div>
              </div>
            </div>
          ))}
        </Reveal>
        <Reveal delay={420} className="hero-mock-wrap">
          <HeroMock />
        </Reveal>
      </div>
    </section>
  );
}

/* Hero mock: a browser frame with a faux site preview + floating phone */
function HeroMock() {
  return (
    <div className="hero-mock">
      <div className="browser">
        <div className="browser-bar">
          <span className="dot-red"></span><span className="dot-yel"></span><span className="dot-grn"></span>
          <div className="browser-url">avanor.studio/preview/ridgeline-coffee</div>
          <div className="browser-spacer"></div>
        </div>
        <div className="browser-body">
          <div className="bm-left">
            <div className="bm-eyebrow">— Ridgeline Coffee Co.</div>
            <div className="bm-title">Slow-roasted in <span className="bm-em">Portland</span>, since 2014.</div>
            <div className="bm-sub">Single-origin beans, hand-poured for the people who care how their morning starts.</div>
            <div className="bm-actions">
              <span className="bm-btn bm-btn-primary">Order beans</span>
              <span className="bm-btn bm-btn-ghost">Visit shop ↗</span>
            </div>
            <div className="bm-meta">
              <span>★ 4.9 · 480 reviews</span><span>·</span><span>Open today · 7a–4p</span>
            </div>
          </div>
          <div className="bm-right">
            <div className="bm-image bm-image-1"><span>product shot</span></div>
            <div className="bm-image bm-image-2"><span>cafe interior</span></div>
            <div className="bm-image bm-image-3"><span>brew guide</span></div>
          </div>
        </div>
      </div>

      <div className="phone-mock">
        <div className="phone-notch"></div>
        <div className="phone-screen">
          <div className="ph-bar">9:41<span className="ph-dots"><i/><i/><i/></span></div>
          <div className="ph-card">
            <div className="ph-eyebrow">Bloom Studio</div>
            <div className="ph-title">Book your visit</div>
            <div className="ph-img"><span>hero image</span></div>
            <div className="ph-row"><span>Mon</span><span>Tue</span><span className="on">Wed</span><span>Thu</span><span>Fri</span></div>
            <div className="ph-btn">Continue</div>
          </div>
        </div>
      </div>

      <div className="float-tag float-tag-1">
        <span className="ft-dot" />
        <div>
          <div className="ft-label">Lighthouse</div>
          <div className="ft-value">99 / 100</div>
        </div>
      </div>
      <div className="float-tag float-tag-2">
        <span className="ft-dot ft-dot-2" />
        <div>
          <div className="ft-label">Launched in</div>
          <div className="ft-value">18 days</div>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------- Logo Strip ----------------------------- */
function LogoStrip() {
  const items = ["Ridgeline Coffee", "Bloom Studio", "Harbor & Pine", "Foxglove Salon", "Nordwell Build", "Field Notes Co."];
  return (
    <section className="logos">
      <div className="container logos-inner">
        <div className="logos-label">Trusted by independent shops, studios, and operators</div>
        <div className="logos-row">
          {items.map((n) => (
            <div className="logo-pill" key={n}>{n}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Section Heading ----------------------------- */
function SectionHead({ tag, title, sub, align = "left" }) {
  return (
    <div className={`section-head section-head--${align}`}>
      <Reveal className="eyebrow"><span className="dot" /> {tag}</Reveal>
      <Reveal delay={80}><h2 className="section-title">{title}</h2></Reveal>
      {sub && <Reveal delay={160}><p className="section-sub">{sub}</p></Reveal>}
    </div>
  );
}

/* ----------------------------- Services ----------------------------- */
const SERVICES = [
  { icon: "monitor", title: "Website Design", body: "Bespoke marketing sites built around your brand — strategy, copy direction, and design that converts.", points: ["Up to 8 custom pages", "On-brand identity polish", "CMS or static handoff"] },
  { icon: "refresh", title: "Website Redesigns", body: "Modernize a dated site without losing your SEO or your story. We rebuild it like new.", points: ["Audit + scope plan", "Content migration", "Performance overhaul"] },
  { icon: "target", title: "Landing Pages", body: "High-conversion single pages for launches, campaigns, and lead capture — shipped fast.", points: ["A/B-ready structure", "Custom illustrations", "Analytics + forms"] },
  { icon: "wrench", title: "Website Maintenance", body: "Monthly care so your site stays fresh, fast, and secure while you focus on the business.", points: ["Updates + edits", "Uptime monitoring", "Quarterly tune-ups"] },
  { icon: "phone", title: "Mobile App Prototypes", body: "Clickable, investor-ready prototypes for founders validating their first idea.", points: ["Figma + interactive prototype", "User flows mapped", "Hand-off to dev team"] },
];

function Services() {
  return (
    <section id="services" className="services" data-screen-label="02 Services">
      <div className="container">
        <SectionHead tag="what we do" title={<>A small studio. <em className="serif-em">Sharp</em> output.</>} sub="Five focused services, each built for small businesses who need to look bigger than they are." />
        <div className="svc-grid">
          {SERVICES.map((s, i) => {
            const IconC = Icon[s.icon];
            return (
              <Reveal key={s.title} delay={i * 60} className="svc-card">
                <div className="svc-num">{String(i + 1).padStart(2, "0")}</div>
                <div className="svc-icon"><IconC width="22" height="22" /></div>
                <h3 className="svc-title">{s.title}</h3>
                <p className="svc-body">{s.body}</p>
                <ul className="svc-points">
                  {s.points.map((p) => (
                    <li key={p}><Icon.check width="13" height="13" /> <span>{p}</span></li>
                  ))}
                </ul>
                <div className="svc-cta">
                  Learn more <Icon.arrowUR width="14" height="14" />
                </div>
              </Reveal>
            );
          })}
          <Reveal delay={SERVICES.length * 60} className="svc-card svc-card--cta">
            <div className="svc-cta-mark"><Icon.spark width="22" height="22"/></div>
            <h3 className="svc-title">Not sure which fits?</h3>
            <p className="svc-body">Send us your current site (or sketch) — we'll send back a short, honest assessment within 48 hours.</p>
            <button className="btn btn-light btn-sm" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}>
              Request a free review <Icon.arrow width="14" height="14"/>
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Who We Help ----------------------------- */
const AUDIENCES = [
  { name: "Restaurants & Cafés", line: "Menus, reservations, online ordering — designed to make hungry people show up." },
  { name: "Salons & Studios", line: "Bookings, lookbooks, and team pages with the polish your space deserves." },
  { name: "Contractors & Trades", line: "Lead-generating sites that show your work and book real jobs, not just clicks." },
  { name: "Coaches & Creators", line: "Personal brands, paid offers, and email capture that feels like you — not a template." },
  { name: "Local Service Businesses", line: "Plumbers, cleaners, vets, and dentists — local SEO and trust built in." },
  { name: "Early-stage Startups", line: "Pitch-ready marketing sites and prototypes that look funded from day one." },
];

function WhoWeHelp() {
  return (
    <section id="audience" className="audience" data-screen-label="03 Who We Help">
      <div className="container">
        <SectionHead tag="who we help" title={<>Built for the businesses <em className="serif-em">behind</em> the doors on Main Street.</>} sub="We work best with small teams who care about their craft as much as we care about ours." />
        <div className="aud-grid">
          {AUDIENCES.map((a, i) => (
            <Reveal key={a.name} delay={i * 50} className="aud-card">
              <div className="aud-index">{String(i + 1).padStart(2, "0")}</div>
              <div className="aud-body">
                <h3 className="aud-name">{a.name}</h3>
                <p className="aud-line">{a.line}</p>
              </div>
              <Icon.arrowUR width="16" height="16" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Process ----------------------------- */
const STEPS = [
  { t: "Discover", d: "A 45-min kickoff. We learn the business, audit what exists, and align on goals before a pixel is drawn.", duration: "Week 1" },
  { t: "Design", d: "Moodboards, type, and layouts come together in Figma. You review in real time — no surprise reveals.", duration: "Week 1–2" },
  { t: "Build", d: "Clean, fast, accessible code. Built mobile-first and tested on real devices, not just resized browsers.", duration: "Week 2–3" },
  { t: "Launch", d: "Domains, DNS, analytics, SEO basics — handled. You press go; we make sure nothing breaks.", duration: "Week 3–4" },
  { t: "Support", d: "Optional ongoing care. Updates, edits, and a real human to answer when something's off.", duration: "Ongoing" },
];

function Process() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % STEPS.length), 4200);
    return () => clearInterval(id);
  }, []);
  return (
    <section id="process" className="process" data-screen-label="04 Process">
      <div className="container">
        <SectionHead tag="how we work" title={<>Five steps. <em className="serif-em">Zero</em> mystery.</>} sub="A calm, transparent process you can actually follow along with — no agency theatre." />
        <div className="proc-wrap">
          <div className="proc-rail">
            <div className="proc-rail-line" />
            <div className="proc-rail-fill" style={{ height: `${((active + 1) / STEPS.length) * 100}%` }} />
          </div>
          <ol className="proc-list">
            {STEPS.map((s, i) => (
              <li
                key={s.t}
                className={`proc-item ${i === active ? "is-active" : ""} ${i < active ? "is-done" : ""}`}
                onMouseEnter={() => setActive(i)}
              >
                <div className="proc-marker">
                  <span className="proc-num">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="proc-body">
                  <div className="proc-row">
                    <h3 className="proc-title">{s.t}</h3>
                    <span className="proc-dur">{s.duration}</span>
                  </div>
                  <p className="proc-desc">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Pricing ----------------------------- */
const PLANS = [
  {
    name: "Starter Website",
    blurb: "A clean, modern presence — perfect for new businesses and side projects.",
    price: "1,800",
    unit: "one-time",
    cta: "Start here",
    feat: ["Up to 4 custom pages", "Mobile-first responsive design", "Contact form + Google Maps", "Basic SEO setup", "Launched in ~2 weeks"],
  },
  {
    name: "Business Website",
    blurb: "Our most-picked plan. Everything a growing local business needs to look the part.",
    price: "3,600",
    unit: "one-time",
    cta: "Most popular",
    featured: true,
    feat: ["Up to 8 custom pages", "Brand polish + copy direction", "Custom illustrations or photo art", "Lead capture + analytics", "CMS so you can edit yourself", "30 days of post-launch support"],
  },
  {
    name: "Premium Website",
    blurb: "Bespoke design, custom interactions, and a partner that sticks around.",
    price: "6,900",
    unit: "from",
    cta: "Let's talk",
    feat: ["Unlimited core pages", "Custom motion + interactions", "Booking, ecommerce, or member areas", "Strategy + content workshops", "Quarterly design check-ins", "90 days of priority support"],
  },
];

function Pricing() {
  return (
    <section id="pricing" className="pricing" data-screen-label="05 Pricing">
      <div className="container">
        <SectionHead tag="pricing" title={<>Honest <em className="serif-em">flat-rate</em> packages.</>} sub="No hidden retainers. No surprise hours. Pick a package, we ship — or we'll quote custom work upfront." />
        <div className="price-grid">
          {PLANS.map((p, i) => (
            <Reveal key={p.name} delay={i * 80} className={`price-card ${p.featured ? "is-featured" : ""}`}>
              {p.featured && <div className="price-badge">Most picked</div>}
              <div className="price-head">
                <h3 className="price-name">{p.name}</h3>
                <p className="price-blurb">{p.blurb}</p>
              </div>
              <div className="price-amt">
                <span className="price-unit">{p.unit}</span>
                <span className="price-sym">$</span>
                <span className="price-num">{p.price}</span>
              </div>
              <ul className="price-feat">
                {p.feat.map((f) => (
                  <li key={f}><Icon.check width="14" height="14" /> <span>{f}</span></li>
                ))}
              </ul>
              <button className={`btn ${p.featured ? "btn-primary" : "btn-outline"} btn-block`}>
                {p.cta} <Icon.arrow width="14" height="14" />
              </button>
            </Reveal>
          ))}
        </div>
        <div className="price-foot">
          Need something between plans? <a onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}>Ask us about custom scope →</a>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Portfolio ----------------------------- */
const PROJECTS = [
  { name: "Ridgeline Coffee", tag: "Restaurant · Redesign", year: "2025", color: "warm" },
  { name: "Bloom Studio", tag: "Salon · New Site + Booking", year: "2025", color: "rose" },
  { name: "Nordwell Build", tag: "Contractor · Lead Gen Site", year: "2024", color: "slate" },
  { name: "Field Notes Co.", tag: "Coach · Personal Brand", year: "2024", color: "olive" },
  { name: "Harbor & Pine", tag: "Boutique · E-commerce", year: "2024", color: "navy" },
  { name: "Drift Wellness", tag: "Startup · App Prototype", year: "2025", color: "mint" },
];

function Portfolio() {
  return (
    <section id="work" className="work" data-screen-label="06 Work">
      <div className="container">
        <SectionHead tag="selected work" title={<>Real sites for <em className="serif-em">real</em> small businesses.</>} sub="A taste of recent launches. Click any project for the full case study (we'll wire those up when the user asks)." />
        <div className="work-grid">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 70} className={`work-card work-${p.color}`}>
              <div className="work-thumb">
                <div className="work-mock">
                  <div className="wm-bar"><i/><i/><i/></div>
                  <div className="wm-body">
                    <div className="wm-eyebrow">— {p.name}</div>
                    <div className="wm-title">{p.name.split(" ")[0]}<span className="wm-em">.</span></div>
                    <div className="wm-block wm-b1" />
                    <div className="wm-block wm-b2" />
                  </div>
                </div>
                <div className="work-overlay">
                  <span>View case study</span>
                  <Icon.arrowUR width="16" height="16" />
                </div>
              </div>
              <div className="work-meta">
                <div className="work-name">{p.name}</div>
                <div className="work-tag">{p.tag} · {p.year}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Testimonial ----------------------------- */
function Testimonial() {
  return (
    <section className="testi">
      <div className="container testi-inner">
        <Reveal className="testi-quote">
          <span className="testi-mark">“</span>
          Our new site finally looks like the shop people walk into. Bookings doubled in the first month — and I can actually <em>edit</em> it myself.
        </Reveal>
        <Reveal delay={120} className="testi-meta">
          <div className="testi-avatar" aria-hidden>JR</div>
          <div>
            <div className="testi-name">Jules Reyes</div>
            <div className="testi-role">Owner, Bloom Studio · Brooklyn, NY</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------- FAQ ----------------------------- */
const FAQS = [
  { q: "How long does a typical project take?", a: "Most Starter sites launch in about two weeks. Business sites land between three and four. Premium projects vary — we'll give you a calendar on day one and stick to it." },
  { q: "Do you write the copy too?", a: "We give you direction, prompts, and a structured outline — and we can rewrite or polish your draft. For full copywriting from scratch, we'll bring in a trusted writer-partner and quote it separately." },
  { q: "Can I edit the site myself afterwards?", a: "Yes. Business and Premium sites ship on a clean CMS (Webflow, Framer, or WordPress — your call). We'll record a short Loom walkthrough so you're confident on day one." },
  { q: "What if I already have a designer or brand?", a: "Even better. We work directly from your existing identity and brand guidelines, and we'll loop your designer in if you'd like a collaborator at the table." },
  { q: "Do you offer payment plans?", a: "We split every project into 50% to kick off and 50% at launch by default. For Premium projects we can structure 3 milestones — just ask." },
  { q: "What happens after launch?", a: "You own everything. We can hand off entirely, or stay on with a Maintenance plan ($240/mo) for updates, edits, and quarterly tune-ups." },
];

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="faq" data-screen-label="07 FAQ">
      <div className="container">
        <SectionHead tag="questions" title={<>Things small business owners <em className="serif-em">actually</em> ask.</>} />
        <div className="faq-list">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 40} className={`faq-item ${open === i ? "is-open" : ""}`}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span className="faq-q-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="faq-q-text">{f.q}</span>
                <span className="faq-q-ico">{open === i ? <Icon.minus width="18" height="18"/> : <Icon.plus width="18" height="18"/>}</span>
              </button>
              <div className="faq-a-wrap">
                <p className="faq-a">{f.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Contact ----------------------------- */
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", business: "", message: "", budget: "Business ($3.6k)" });
  const [sent, setSent] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4200);
  };
  const f = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  return (
    <section id="contact" className="contact" data-screen-label="08 Contact">
      <div className="container contact-inner">
        <div className="contact-left">
          <Reveal className="eyebrow"><span className="dot"/> let's build</Reveal>
          <Reveal delay={80}><h2 className="contact-title">Tell us about your <em className="serif-em">business</em>.</h2></Reveal>
          <Reveal delay={160}><p className="contact-sub">A short form. A real human reply within one business day. No "let's hop on a 30-minute discovery call" unless we both want to.</p></Reveal>
          <Reveal delay={240} className="contact-meta">
            <div className="cmeta">
              <Icon.mail width="16" height="16"/>
              <div>
                <div className="cmeta-label">Email</div>
                <div className="cmeta-val">hello@avanordesigns.com</div>
              </div>
            </div>
            <div className="cmeta">
              <Icon.spark width="16" height="16"/>
              <div>
                <div className="cmeta-label">Now booking</div>
                <div className="cmeta-val">2 projects, July–August</div>
              </div>
            </div>
            <div className="cmeta">
              <Icon.target width="16" height="16"/>
              <div>
                <div className="cmeta-label">Free review</div>
                <div className="cmeta-val">48-hour turnaround</div>
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal delay={120} className="contact-right">
          <form className="form" onSubmit={submit}>
            <div className="form-row">
              <label className="field">
                <span className="lbl">Your name</span>
                <input value={form.name} onChange={f("name")} placeholder="Jamie Chen" required/>
              </label>
              <label className="field">
                <span className="lbl">Email</span>
                <input type="email" value={form.email} onChange={f("email")} placeholder="you@business.com" required/>
              </label>
            </div>
            <label className="field">
              <span className="lbl">Business or project</span>
              <input value={form.business} onChange={f("business")} placeholder="Ridgeline Coffee — single-origin café"/>
            </label>
            <label className="field">
              <span className="lbl">Rough budget</span>
              <div className="chips">
                {["Starter ($1.8k)", "Business ($3.6k)", "Premium ($6.9k+)", "Not sure yet"].map((b) => (
                  <button type="button" key={b} className={`chip ${form.budget === b ? "is-on" : ""}`} onClick={() => setForm({ ...form, budget: b })}>{b}</button>
                ))}
              </div>
            </label>
            <label className="field">
              <span className="lbl">Tell us a little more</span>
              <textarea rows="4" value={form.message} onChange={f("message")} placeholder="What you have today, what you'd like, and roughly when you'd like to launch."/>
            </label>
            <button type="submit" className={`btn btn-primary btn-block btn-lg ${sent ? "is-sent" : ""}`}>
              {sent ? <><Icon.check width="16" height="16"/> Sent — talk soon</> : <>Send & get my free review <Icon.arrow width="16" height="16"/></>}
            </button>
            <div className="form-foot">By sending, you agree to a single follow-up email. We don't spam, ever.</div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------- Footer ----------------------------- */
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo logo--lg">
              <span className="logo-mark" aria-hidden>
                <svg viewBox="0 0 32 32" fill="none">
                  <path d="M6 26 16 6l10 20" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
                  <path d="M11 21h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                  <circle cx="16" cy="6" r="1.2" fill="currentColor"/>
                </svg>
              </span>
              <span className="logo-word">Avanor<span className="logo-dot">.</span></span>
            </div>
            <p className="footer-tag">A small studio designing modern, mobile-friendly websites for small businesses ready to grow online.</p>
          </div>
          <div className="footer-cols">
            <div>
              <div className="fc-h">Studio</div>
              <a>About</a><a>Process</a><a>Journal</a><a>Careers</a>
            </div>
            <div>
              <div className="fc-h">Services</div>
              <a>Website Design</a><a>Redesigns</a><a>Landing Pages</a><a>Maintenance</a><a>App Prototypes</a>
            </div>
            <div>
              <div className="fc-h">Elsewhere</div>
              <a>Instagram ↗</a><a>Dribbble ↗</a><a>Read.cv ↗</a><a>Email us</a>
            </div>
          </div>
        </div>
        <div className="footer-bot">
          <span>© {new Date().getFullYear()} Avanor Designs LLC · Made in Portland, OR</span>
          <span>Open for July–August projects · 2 spots</span>
        </div>
      </div>
    </footer>
  );
}

/* ----------------------------- App ----------------------------- */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "emerald",
  "theme": "navy"
}/*EDITMODE-END*/;

const ACCENTS = {
  emerald: { hex: "#4FB286", soft: "#dff1e7", deep: "#1E5A41", name: "Emerald" },
  gold:    { hex: "#C8A35C", soft: "#f4ebd6", deep: "#6B4F1F", name: "Gold" },
  blue:    { hex: "#6892D6", soft: "#dbe7f7", deep: "#274F8F", name: "Blue" },
};

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const accent = ACCENTS[t.accent] || ACCENTS.emerald;

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--accent", accent.hex);
    root.style.setProperty("--accent-soft", accent.soft);
    root.style.setProperty("--accent-deep", accent.deep);
  }, [accent]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: "smooth" });
  };

  return (
    <>
      <Nav onCta={() => scrollTo("contact")} />
      <main>
        <Hero scrollTo={scrollTo} />
        <LogoStrip />
        <Services />
        <WhoWeHelp />
        <Process />
        <Pricing />
        <Portfolio />
        <Testimonial />
        <FAQ />
        <Contact />
      </main>
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Accent">
          <TweakRadio
            label="Color"
            value={t.accent}
            options={["emerald", "gold", "blue"]}
            onChange={(v) => setTweak("accent", v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
