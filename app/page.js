import Image from "next/image";

const galleryImages = [
  { src: "/S01.jpg", caption: "Soldrive Power" },
  { src: "/S02.jpg", caption: "Soldrive Core" },
  { src: "/S03.jpg", caption: "Harvesting the sun" },
  {
    src: "/S04.jpg",
    caption: "Solar farm installation integrated into an olive grove landscape.",
  },
  { src: "/S05.jpg", caption: "Where tradition meets technology" },
  {
    src: "/S06.jpg",
    caption:
      "Detailed view of high-efficiency photovoltaic panels installed in a rural area.",
  },
];

const specs = [
  ["Tracker Type", "Horizontal Single Axis Tracker (HSAT)"],
  ["Rotation Range", "±60°"],
  ["Tracking Accuracy", "1°"],
  ["Nominal Movement Speed", "0.15°/s"],
  ["Maximum Row Length", "Up to 70 m"],
  ["PV Modules per Row", "Up to 60"],
  ["Installed Capacity per Row", "Up to 39 kWp"],
  ["Support Spacing", "5–7 m"],
  ["Safe Stow Position", "0° horizontal"],
  ["Controller Consumption", "≤0.1 kWh/day"],
];

const valueCards = [
  {
    title: "Utility-Scale Ready",
    text: "Designed for large photovoltaic plants with scalable architecture, long row configurations, and predictable installation workflow.",
  },
  {
    title: "Autonomous Operation",
    text: "Powered by an integrated Li-ion system, reducing dependence on external auxiliary infrastructure and simplifying deployment.",
  },
  {
    title: "Engineered for Reliability",
    text: "Structural steel members, industrial components, and optimized mechanical behavior support long-term durability and stable field performance.",
  },
];

const engineeringCards = [
  {
    title: "Structural Steel System",
    text: "Engineered around galvanized C180 / IPE160 structural members for rigidity, durability, and repeatable performance in demanding solar environments.",
  },
  {
    title: "Dynamic Stability Control",
    text: "Dual dynamic dampers and optimized structural response contribute to controlled behavior under wind-induced and dynamic loading conditions.",
  },
  {
    title: "Industrial Drive System",
    text: "Industrial slew drive architecture and ZA120A bearings support dependable movement, repeatable positioning, and long-span operation.",
  },
];

const dynamicCards = [
  {
    title: "Dual Dynamic Dampers",
    text: "Integrated dual dynamic dampers support improved oscillation behavior and structural stability under dynamic loading scenarios.",
  },
  {
    title: "Industrial Slew Drive",
    text: "Heavy-duty slew drive architecture supports controlled movement, repeatable positioning, and dependable operation throughout the tracker lifecycle.",
  },
  {
    title: "ZA120A Bearings",
    text: "Selected bearing configuration supports long-span operation with dependable mechanical performance and optimized structural response.",
  },
];

const controlItems = [
  "Astronomical tracking",
  "Tilt sensing",
  "Backtracking logic",
  "Closed-loop feedback",
  "Low daily energy consumption",
  "Autonomous field operation",
];

const applications = [
  "Utility-scale solar farms",
  "EPC solar projects",
  "Independent power producer developments",
  "Agrivoltaic solar installations",
  "Photovoltaic plants requiring autonomous tracking architecture",
  "Projects prioritizing mechanical robustness and smart control logic",
];

const compliance = [
  "IEC/TS 62727:2012",
  "IEC 61400-1",
  "EN 1991-1-4",
  "EN 1993-1-1",
  "IEC 61215",
  "EN ISO 1461",
];

const brochures = [
  {
    title: "Technical Brochure (EN)",
    description:
      "Download the English technical brochure for Soldrive Core, including product overview, key specifications, and engineering highlights.",
    href: "/soldrive-core-brochure-en.pdf",
    cta: "Download English PDF",
  },
  {
    title: "Technical Brochure (GR)",
    description:
      "Download the Greek technical brochure for Soldrive Core, including product overview, key specifications, and engineering highlights.",
    href: "/soldrive-core-brochure-gr.pdf",
    cta: "Download Greek PDF",
  },
];

export default function HomePage() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <div className="container nav-wrap">
          <a href="#top" className="brand">
            <span className="brand-mark" />
            <span>Soldrive Core</span>
          </a>

          <nav className="nav">
            <a href="#specs">Specs</a>
            <a href="#engineering">Engineering</a>
            <a href="#applications">Applications</a>
            <a href="#gallery">Gallery</a>
            <a href="#brochures">Brochures</a>
            <a href="#quote">Contact</a>
          </nav>

          <a href="#quote" className="nav-cta">
            Get Quote
          </a>
        </div>
      </header>

      <a
        href="#quote"
        className="sticky-quote-button"
        aria-label="Jump to quote request form"
      >
        Get Quote
      </a>

      <section
        id="top"
        className="hero section-watermark watermark-hero"
        style={{
          "--watermark-image":
            "url('/watermark-hero.png'), url('/watermark.png')",
        }}
      >
        <div className="hero-overlay" />
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <span className="eyebrow">Autonomous Solar Tracking Platform</span>

            <h1>
              Solar Tracker System (HSAT) for Utility-Scale Photovoltaic
              Projects
            </h1>

            <p className="hero-lead">
              Soldrive Core is a horizontal single axis tracker (HSAT)
              engineered for EPC contractors, energy developers, and
              utility-scale solar plants. Autonomous operation, structural
              reliability, and smart control logic in one robust platform.
            </p>

            <div className="hero-highlights">
              <span>Autonomous Li-ion powered system</span>
              <span>Up to 70 m row length</span>
              <span>Engineered for EPC deployment</span>
            </div>

            <div className="hero-actions">
              <a href="#quote" className="btn btn-primary">
                Request a Quote
              </a>
              <a href="#specs" className="btn btn-secondary">
                Explore Specifications
              </a>
            </div>

            <div className="hero-metrics">
              <div className="metric-card">
                <strong>±60°</strong>
                <span>Rotation range</span>
              </div>
              <div className="metric-card">
                <strong>Up to 70 m</strong>
                <span>Maximum row length</span>
              </div>
              <div className="metric-card">
                <strong>Up to 39 kWp</strong>
                <span>Per tracker row</span>
              </div>
            </div>
          </div>

          <div className="hero-panel glass-card reveal reveal-delay-1">
            <h3>Designed for real EPC requirements</h3>
            <ul className="check-list">
              <li>Autonomous Li-ion power architecture</li>
              <li>Industrial slew drive and robust steel members</li>
              <li>Closed-loop smart controller logic</li>
              <li>Dynamic stability enhancement with dampers</li>
              <li>Compliance-oriented engineering approach</li>
            </ul>
          </div>
        </div>
      </section>

      <section
        className="section section-watermark watermark-left"
        style={{
          "--watermark-image":
            "url('/watermark-value.png'), url('/watermark.png')",
        }}
      >
        <div className="container">
          <div className="section-heading reveal">
            <span className="eyebrow">Commercial Positioning</span>
            <h2>Built for Real-World Solar Projects</h2>
            <p>
              Soldrive Core is not a conceptual tracker. It is a field-ready
              solar tracking system designed for real EPC execution, efficient
              deployment, and long-term operation in demanding photovoltaic
              environments.
            </p>
          </div>

          <div className="cards-3">
            {valueCards.map((item, index) => (
              <article
                key={item.title}
                className={`glass-card feature-card reveal reveal-step-${index + 1}`}
              >
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="specs"
        className="section section-watermark watermark-right"
        style={{
          "--watermark-image":
            "url('/watermark-specs.png'), url('/watermark.png')",
        }}
      >
        <div className="container">
          <div className="section-heading reveal">
            <span className="eyebrow">Technical Data</span>
            <h2>Technical Overview</h2>
            <p>
              A horizontal single axis tracker designed for precise solar
              tracking, mechanical stability, and efficient energy harvesting in
              utility-scale photovoltaic systems.
            </p>
          </div>

          <div className="specs-grid">
            {specs.map(([label, value], index) => (
              <div
                key={label}
                className={`spec-item glass-card reveal reveal-step-${(index % 4) + 1}`}
              >
                <span className="spec-label">{label}</span>
                <strong className="spec-value">{value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="engineering"
        className="section section-watermark watermark-left"
        style={{
          "--watermark-image":
            "url('/watermark-engineering.png'), url('/watermark.png')",
        }}
      >
        <div className="container">
          <div className="section-heading reveal">
            <span className="eyebrow">Engineering Value</span>
            <h2>Engineering Architecture</h2>
            <p>
              Soldrive Core integrates mechanical, structural, and control
              engineering into a unified solar tracking platform optimized for
              stability, efficiency, and field reliability.
            </p>
          </div>

          <div className="cards-3">
            {engineeringCards.map((item, index) => (
              <article
                key={item.title}
                className={`glass-card feature-card reveal reveal-step-${index + 1}`}
              >
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section section-watermark watermark-center"
        style={{
          "--watermark-image":
            "url('/watermark-dynamics.png'), url('/watermark.png')",
        }}
      >
        <div className="container two-col">
          <div className="reveal">
            <div className="section-heading align-left">
              <span className="eyebrow">Structural Behavior</span>
              <h2>Dynamic Stability & Structural Control</h2>
              <p>
                Designed to maintain controlled movement and structural
                integrity under dynamic wind loading conditions, ensuring
                predictable behavior and long-term system reliability.
              </p>
            </div>
          </div>

          <div className="stack-grid">
            {dynamicCards.map((item, index) => (
              <article
                key={item.title}
                className={`glass-card stack-card reveal reveal-step-${index + 1}`}
              >
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section section-watermark watermark-right"
        style={{
          "--watermark-image":
            "url('/watermark-controller.png'), url('/watermark.png')",
        }}
      >
        <div className="container two-col">
          <div className="reveal">
            <div className="section-heading align-left">
              <span className="eyebrow">Intelligent Operation</span>
              <h2>Smart Tracking & Control System</h2>
              <p>
                The integrated TCU enables precise solar tracking with
                intelligent control algorithms, reduced energy demand, and
                reliable real-time feedback for autonomous operation.
              </p>
            </div>
          </div>

          <div className="glass-card reveal reveal-delay-1">
            <ul className="logic-list">
              {controlItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        id="applications"
        className="section section-watermark watermark-left"
        style={{
          "--watermark-image":
            "url('/watermark-applications.png'), url('/watermark.png')",
        }}
      >
        <div className="container">
          <div className="section-heading reveal">
            <span className="eyebrow">Use Cases</span>
            <h2>Applications</h2>
            <p>
              Soldrive Core is designed for energy projects where performance,
              reliability, and scalability are critical across modern solar
              development and EPC execution.
            </p>
          </div>

          <div className="application-grid">
            {applications.map((item, index) => (
              <div
                key={item}
                className={`application-item glass-card reveal reveal-step-${(index % 3) + 1}`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section section-watermark watermark-center"
        style={{
          "--watermark-image":
            "url('/watermark-compliance.png'), url('/watermark.png')",
        }}
      >
        <div className="container two-col">
          <div className="reveal">
            <div className="section-heading align-left">
              <span className="eyebrow">Standards & Quality</span>
              <h2>Compliance & Engineering Standards</h2>
              <p>
                Designed in alignment with international standards for
                structural integrity, wind loading, steel design, module
                compatibility, and galvanization quality.
              </p>
            </div>
          </div>

          <div className="glass-card reveal reveal-delay-1">
            <div className="badge-grid">
              {compliance.map((item) => (
                <span key={item} className="standard-badge">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="gallery"
        className="section section-watermark watermark-right"
        style={{
          "--watermark-image":
            "url('/watermark-gallery.png'), url('/watermark.png')",
        }}
      >
        <div className="container">
          <div className="section-heading reveal">
            <span className="eyebrow">Project Visuals</span>
            <h2>Field Installations</h2>
            <p>
              Real-world deployment environments demonstrating integration into
              utility-scale and agricultural solar projects.
            </p>
          </div>

          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <figure
                key={image.src}
                className={`gallery-card reveal reveal-step-${(index % 3) + 1}`}
              >
                <div className="gallery-image-wrap">
                  <Image
                    src={image.src}
                    alt={image.caption}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    className="gallery-image"
                  />
                </div>
                <figcaption>{image.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section
        id="brochures"
        className="section section-watermark watermark-right"
        style={{
          "--watermark-image":
            "url('/watermark-brochures.png'), url('/watermark.png')",
        }}
      >
        <div className="container">
          <div className="section-heading reveal">
            <span className="eyebrow">Downloads</span>
            <h2>Technical Brochures</h2>
            <p>
              Download the Soldrive Core technical brochures in English and
              Greek for project evaluation, internal review, and commercial
              discussions.
            </p>
          </div>

          <div className="brochure-grid">
            {brochures.map((item, index) => (
              <article
                key={item.href}
                className={`glass-card brochure-card reveal reveal-step-${index + 1}`}
              >
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <a
                  href={item.href}
                  download
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  {item.cta}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="quote"
        className="section section-watermark watermark-left"
        style={{
          "--watermark-image":
            "url('/watermark-contact.png'), url('/watermark.png')",
        }}
      >
        <div className="container quote-layout">
          <div className="quote-copy reveal">
            <div className="section-heading align-left quote-heading">
              <span className="eyebrow">Commercial Contact</span>
              <h2>Request a Quote</h2>
              <p>
                Contact our engineering team for project evaluation, technical
                specifications, and commercial proposals tailored to your solar
                installation.
              </p>
            </div>

            <div className="contact-grid contact-grid-single">
              <div className="glass-card contact-card">
                <span className="contact-label">Email</span>
                <a href="mailto:info@palsengineering.com">
                  info@palsengineering.com
                </a>
              </div>

              <div className="glass-card contact-card">
                <span className="contact-label">Phone</span>
                <a href="tel:+302815103020">+30 2815 103020</a>
              </div>

              <div className="glass-card contact-card">
                <span className="contact-label">WhatsApp</span>
                <a
                  href="https://wa.me/306974354486"
                  target="_blank"
                  rel="noreferrer"
                >
                  +30 697 435 4486
                </a>
              </div>
            </div>
          </div>

          <div className="glass-card quote-form-card reveal reveal-delay-1">
            <form
              className="quote-form"
              action="mailto:info@palsengineering.com"
              method="post"
              encType="text/plain"
            >
              <div className="form-grid">
                <div className="field">
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    name="Full Name"
                    type="text"
                    placeholder="Your name"
                  />
                </div>

                <div className="field">
                  <label htmlFor="company">Company</label>
                  <input
                    id="company"
                    name="Company"
                    type="text"
                    placeholder="Company name"
                  />
                </div>

                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="Email"
                    type="email"
                    placeholder="name@company.com"
                  />
                </div>

                <div className="field">
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    name="Phone"
                    type="text"
                    placeholder="+30 ..."
                  />
                </div>

                <div className="field field-full">
                  <label htmlFor="project">Project Type</label>
                  <input
                    id="project"
                    name="Project Type"
                    type="text"
                    placeholder="Utility-scale PV / EPC tender / Technical evaluation"
                  />
                </div>

                <div className="field field-full">
                  <label htmlFor="message">Project Details</label>
                  <textarea
                    id="message"
                    name="Project Details"
                    rows="6"
                    placeholder="Tell us about your project, target capacity, location, and timeline."
                  />
                </div>
              </div>

              <div className="form-actions">
                <button type="submit" className="btn btn-primary">
                  Send Request
                </button>
                <a
                  href="https://wa.me/306974354486"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  WhatsApp Us
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section
        className="section seo-block section-watermark watermark-center"
        style={{
          "--watermark-image":
            "url('/watermark-seo.png'), url('/watermark.png')",
        }}
      >
        <div className="container">
          <div className="section-heading reveal">
            <span className="eyebrow">Search Visibility</span>
            <h2>Solar Tracking System for EPC and Utility PV</h2>
            <p>
              Soldrive Core is a solar tracker system designed for EPC
              contractors and utility-scale photovoltaic plants. As a horizontal
              single axis tracker (HSAT), it supports increased energy yield
              while maintaining structural stability, autonomous operation, and
              efficient field execution.
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-wrap">
          <div>
            <div className="footer-brand">Soldrive Core</div>
            <p className="footer-text">
              Autonomous HSAT platform for robust, utility-scale photovoltaic
              deployment.
            </p>
          </div>

          <div className="footer-links">
            <a href="#specs">Specs</a>
            <a href="#engineering">Engineering</a>
            <a href="#applications">Applications</a>
            <a href="#gallery">Gallery</a>
            <a href="#brochures">Brochures</a>
            <a href="#quote">Contact</a>
          </div>

          <div className="footer-contact">
            <a href="mailto:info@palsengineering.com">
              info@palsengineering.com
            </a>
            <a href="tel:+302815103020">+30 2815 103020</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
