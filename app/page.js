"use client";

import { useEffect, useRef } from "react";

export default function SoldriveLandingPage() {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const y = window.scrollY;
      heroRef.current.style.setProperty("--parallax-offset", `${y * 0.15}px`);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const benefits = [
    {
      title: "Higher ROI",
      text: "Increase energy production by up to 30% compared to fixed installations, improving project economics and long-term asset value.",
    },
    {
      title: "Fast Deployment",
      text: "Pre-engineered architecture with minimal assembly time, helping teams move from delivery to operation in hours, not days.",
    },
    {
      title: "Autonomous Operation",
      text: "Fully self-sustained operation without external power dependency, enabled by integrated battery-backed control architecture.",
    },
    {
      title: "Built for Harsh Conditions",
      text: "Wind-resistant design with smart stow strategy, structural damping and robust industrial components for demanding outdoor environments.",
    },
  ];

  const specs = [
    { label: "Tracker type", value: "Horizontal Single Axis Tracker (HSAT)" },
    { label: "Rotation range", value: "±60°" },
    { label: "Tracking accuracy", value: "1°" },
    { label: "Nominal movement speed", value: "0.15°/s" },
    { label: "Maximum row length", value: "Up to 70 m" },
    { label: "PV modules per row", value: "60 modules" },
    { label: "PV power", value: "Up to 39 kWp" },
    { label: "Drive type", value: "Industrial slew drive" },
    { label: "Safe stow position", value: "0° horizontal" },
    { label: "Operation", value: "Autonomous" },
    { label: "Backtracking", value: "Smart backtracking" },
    { label: "Monitoring", value: "Smart monitoring & telemetry" },
  ];

  const engineeringHighlights = [
    {
      title: "Minimal moving parts",
      text: "The design philosophy focuses on reducing moving components while maximizing structural reliability and motion stability under wind load.",
    },
    {
      title: "Heavy-duty structural support",
      text: "Support spacing of 5–7 m with C180 and IPE160 hot-dip galvanized steel members built for stiffness, lower weight and bending resistance.",
    },
    {
      title: "Industrial support bearings",
      text: "ZA120A bearings support ±10° inclination and combine aluminum alloy bodies with hot-dip galvanized steel bases and high corrosion resistance.",
    },
    {
      title: "Autonomous power architecture",
      text: "Integrated Li-ion battery with BMS, polarity protection and charge/discharge protection eliminates the need for external power supply.",
    },
  ];

  const dynamicControl = [
    {
      title: "Dual Dynamic Dampers",
      text: "Symmetrically positioned dual-axis dampers reduce vibration, absorb gust loads and help stabilize tracker behavior under asymmetric wind loading.",
    },
    {
      title: "Reduced structural stress",
      text: "The damping system limits torsion on the rotation axis, reduces bending on the support members and lowers stress on the joints and frame.",
    },
    {
      title: "PV module protection",
      text: "Reduced vibration helps protect module frames and mounting points, limiting fatigue and contributing to longer service life and stable output.",
    },
    {
      title: "Galloping mitigation",
      text: "The system improves behavior in long-row applications by reducing the probability of aeroelastic oscillation phenomena under wind excitation.",
    },
  ];

  const controllerFeatures = [
    {
      title: "Astronomical tracking",
      text: "Precision astronomical algorithm combined with tilt sensing supports stable tracking without unnecessary oscillation.",
    },
    {
      title: "Smart backtracking",
      text: "Integrated backtracking reduces inter-row shading and improves system operation in real layout conditions.",
    },
    {
      title: "Closed-loop control",
      text: "Feedback-based control ensures the tracker responds to real position conditions rather than relying only on theoretical movement commands.",
    },
    {
      title: "Low power consumption",
      text: "Controller system consumption is ≤0.1 kWh/day with stabilized 24 VDC output for reliable autonomous operation.",
    },
  ];

  const applications = [
    "Commercial & industrial solar",
    "Remote energy systems",
    "Hybrid & autonomous projects",
    "Agricultural and infrastructure applications",
    "Sites with complex topography",
    "Regions with increased wind loads",
  ];

  const compliance = [
    "IEC/TS 62727:2012 – Solar tracker specifications",
    "IEC 61400-1 – Wind load methodology",
    "EN 1991-1-4 (Eurocode 1) – Wind actions",
    "EN 1993-1-1 (Eurocode 3) – Steel structures",
    "IEC 61215 – PV module compatibility",
    "EN ISO 1461 – Hot-dip galvanizing",
  ];

  const installations = [
    { src: "/S01.jpg", title: "S01", caption: "Soldrive Power" },
    { src: "/S02.jpg", title: "S02", caption: "Soldrive Core" },
    { src: "/S03.jpg", title: "S03", caption: "Harvesting the sun" },
    {
      src: "/S04.jpg",
      title: "S04",
      caption: "Solar farm installation integrated into an olive grove landscape.",
    },
    {
      src: "/S05.jpg",
      title: "S05",
      caption: "Where tradition meets technology",
    },
    {
      src: "/S06.jpg",
      title: "S06",
      caption: "Detailed view of high-efficiency photovoltaic panels installed in a rural area.",
    },
  ];

  return (
    <main>
      <section className="hero hero-parallax section-watermark watermark-hero" ref={heroRef}>
        <div className="hero-orb hero-orb-blue" />
        <div className="hero-orb hero-orb-orange" />

        <div className="container hero-grid">
          <div>
            <div className="eyebrow">Soldrive Core</div>

            <h1>Increase Solar Yield. Reduce Complexity.</h1>

            <p className="moto">
              Plug &amp; Play Single-Axis Solar Tracker — engineered for performance,
              durability and autonomous operation.
            </p>

            <p className="lead">
              Soldrive Core is a commercial-grade Horizontal Single Axis Tracker
              (HSAT) designed for EPCs, remote installations and demanding energy
              projects that require structural reliability, smart control and faster
              deployment.
            </p>

            <div className="hero-points">
              <div>±60° rotation range with 1° tracking accuracy</div>
              <div>Up to 70 m row length and 60 PV modules per row</div>
              <div>Autonomous operation with integrated battery-backed control</div>
            </div>

            <div className="cta-row">
              <a href="#contact" className="btn btn-primary">
                Get a Quote
              </a>
              <a href="#specs" className="btn btn-secondary">
                Download Specs
              </a>
            </div>
          </div>

          <div className="logo-card logo-card-hero">
            <img src="/soldrive-core-logo.jpeg" alt="Soldrive Core logo" />
          </div>
        </div>
      </section>

      <section className="section section-watermark watermark-left">
        <div className="container">
          <div className="section-head">
            <div className="section-tag">Why Soldrive Core</div>
            <h2>Built to improve performance and return</h2>
            <p>
              Soldrive Core combines robust mechanical engineering, intelligent
              control and low-operational-complexity architecture for modern utility,
              industrial and remote solar applications.
            </p>
          </div>

          <div className="grid feature-grid">
            {benefits.map((item, index) => (
              <div key={item.title} className="card feature-card">
                <div
                  className={index % 2 === 0 ? "feature-index blue" : "feature-index orange"}
                >
                  0{index + 1}
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="specs" className="section section-alt section-watermark watermark-right">
        <div className="container">
          <div className="section-head">
            <div className="section-tag">Specifications</div>
            <h2>Core product specs</h2>
            <p>
              Soldrive Core combines autonomous operation, industrial drive
              technology, smart control and high structural integrity for long-term
              field performance.
            </p>
          </div>

          <div className="grid specs-grid">
            {specs.map((item) => (
              <div key={item.label} className="card specs-card">
                <div className="card-label">{item.label}</div>
                <div className="card-value">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-watermark watermark-center">
        <div className="container">
          <div className="section-head">
            <div className="section-tag">Engineering Highlights</div>
            <h2>Designed for structural reliability</h2>
            <p>
              The system is built around a philosophy of fewer moving parts,
              stronger load behavior and more dependable operation in real outdoor
              conditions.
            </p>
          </div>

          <div className="grid feature-grid">
            {engineeringHighlights.map((item, index) => (
              <div key={item.title} className="card feature-card">
                <div
                  className={index % 2 === 0 ? "feature-index blue" : "feature-index orange"}
                >
                  0{index + 1}
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt section-watermark watermark-left">
        <div className="container">
          <div className="section-head">
            <div className="section-tag">Dynamic Stability</div>
            <h2>Dual dynamic dampers for wind resilience</h2>
            <p>
              Soldrive Core incorporates dual-axis vibration dampers that work
              alongside the slew drive and intermediate supports to improve dynamic
              behavior under gust loading and reduce oscillation.
            </p>
          </div>

          <div className="grid feature-grid">
            {dynamicControl.map((item, index) => (
              <div key={item.title} className="card feature-card">
                <div
                  className={index % 2 === 0 ? "feature-index blue" : "feature-index orange"}
                >
                  0{index + 1}
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-watermark watermark-right">
        <div className="container">
          <div className="section-head">
            <div className="section-tag">Controller & Smart Logic</div>
            <h2>Intelligence built into every movement</h2>
            <p>
              The TCU controller acts as the intelligence layer of the tracker,
              combining astronomical control, tilt sensing, backtracking and
              closed-loop feedback in an autonomous architecture.
            </p>
          </div>

          <div className="grid feature-grid">
            {controllerFeatures.map((item, index) => (
              <div key={item.title} className="card feature-card">
                <div
                  className={index % 2 === 0 ? "feature-index blue" : "feature-index orange"}
                >
                  0{index + 1}
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-installations section-watermark watermark-center">
        <div className="container">
          <div className="section-head">
            <div className="section-tag">Field Installations</div>
            <h2>Installed in real conditions</h2>
            <p>
              From engineering close-ups to full-scale field layouts, Soldrive Core
              is presented through real installation imagery that reinforces
              technical credibility.
            </p>
          </div>

          <div className="installations-grid">
            {installations.map((item) => (
              <div key={item.title} className="installation-card">
                <img src={item.src} alt={item.caption} className="installation-image" />
                <div className="installation-content">
                  <div className="installation-code">{item.title}</div>
                  <div className="installation-caption">{item.caption}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt section-watermark watermark-left">
        <div className="container">
          <div className="section-head">
            <div className="section-tag">Applications</div>
            <h2>Positioned for real deployment scenarios</h2>
            <p>
              Soldrive Core is suitable for demanding solar projects where
              reliability, adaptability and field-ready performance matter.
            </p>
          </div>

          <div className="grid app-grid">
            {applications.map((item) => (
              <div key={item} className="card app-card">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-watermark watermark-right">
        <div className="container">
          <div className="section-head">
            <div className="section-tag">Compliance & Reliability</div>
            <h2>Aligned with recognized standards</h2>
            <p>
              The system has been designed in alignment with international and
              European standards relevant to tracker behavior, wind actions, steel
              structures, PV module compatibility and galvanization.
            </p>
          </div>

          <div className="grid app-grid">
            {compliance.map((item) => (
              <div key={item} className="card app-card">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section section-alt section-watermark watermark-center">
        <div className="container">
          <div className="contact-box contact-advanced">
            <div className="section-tag">Request a Quote</div>

            <h2>Let’s build your next solar project</h2>

            <p>
              Get in touch with our team to receive technical specs, pricing and
              deployment guidance for your project.
            </p>

            <div className="contact-grid">
              <div className="contact-item">
                <div className="contact-label">Email</div>
                <a href="mailto:info@palsengineering.com">info@palsengineering.com</a>
              </div>

              <div className="contact-item">
                <div className="contact-label">Phone</div>
                <a href="tel:+302815103020">+30 2815 103020</a>
              </div>

              <div className="contact-item">
                <div className="contact-label">WhatsApp</div>
                <a
                  href="https://wa.me/306974354486"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +30 697 435 4486
                </a>
              </div>
            </div>

            <div className="cta-row">
              <a href="mailto:info@palsengineering.com" className="btn btn-primary">
                Request Offer
              </a>

              <a
                href="https://wa.me/306974354486"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                WhatsApp Now
              </a>
            </div>

            <div className="contact-note">
              Ideal for EPC contractors, developers, agrivoltaic projects and hybrid
              energy systems.
            </div>
          </div>
        </div>
      </section>

      <a href="#contact" className="floating-quote-btn">
        Get Quote
      </a>
    </main>
  );
}
