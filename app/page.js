export default function SoldriveLandingPage() {
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
      text: "Fully self-sustained operation without external power dependency, ideal for remote and infrastructure-driven use cases.",
    },
    {
      title: "Built for Harsh Conditions",
      text: "Wind resistance up to 140 km/h with automatic safe mode transition to horizontal position during strong wind events.",
    },
  ];

  const features = [
    {
      title: "Precision tracking",
      text: "Single-axis operation with tracking accuracy up to 1° for optimized solar capture and improved yield.",
    },
    {
      title: "Wind protection",
      text: "Automatic transition to safe mode in horizontal position during strong wind events, with resistance up to 140 km/h.",
    },
    {
      title: "Long-life operation",
      text: "Designed with durable materials for decades of reliable, low-maintenance field operation.",
    },
    {
      title: "Smart monitoring",
      text: "Monitor tracker position, performance and system status in real time through telemetry-enabled mobile or desktop monitoring.",
    },
  ];

  const specs = [
    { label: "Product", value: "Soldrive Core" },
    { label: "Maximum length", value: "Up to 75 m" },
    { label: "PV power", value: "39 kWp" },
    { label: "Operation", value: "Autonomous" },
    { label: "Tracking accuracy", value: "1°" },
    { label: "Drive type", value: "Single Axis" },
    { label: "Wind resistance", value: "Up to 140 km/h" },
    { label: "Back tracking", value: "3d backtracking" },
    { label: "Safe mode", value: "Horizontal position in strong winds" },
    { label: "Maintenance", value: "Zero maintenance" },
    { label: "Monitoring", value: "Smart monitoring & telemetry" },
  ];

  const applications = [
    "Commercial & industrial solar",
    "Remote energy systems",
    "Hybrid & autonomous projects",
    "Agricultural and infrastructure applications",
  ];

  const installations = [
    { src: "/s01.jpg", title: "S01", caption: "Soldrive Power" },
    { src: "/S02.jpg", title: "S02", caption: "Soldrive Core" },
    { src: "/S03.jpg", title: "S03", caption: "Harvesting the sun" },
    {
      src: "/S04.jpg",
      title: "S04",
      caption: "Solar farm installation integrated into an olive grove landscape.",
    },
    { src: "/S05.jpg", title: "S05", caption: "Where tradition meets technology" },
    {
      src: "/S06.jpg",
      title: "S06",
      caption: "Detailed view of high-efficiency photovoltaic panels installed in a rural area.",
    },
  ];

  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">Soldrive Core</div>
            <h1>Increase Solar Yield. Reduce Complexity.</h1>
            <p className="moto">
              Plug &amp; Play Single-Axis Solar Tracker — up to 39 kWp, autonomous, zero maintenance.
            </p>
            <p className="lead">
              A commercial-grade single-axis solar tracker designed for EPCs, remote installations and
              modern energy projects that need faster deployment, stronger performance and smart monitoring.
            </p>
            <p className="lead lead-gr">
              Μονοαξονικός solar tracker έτοιμος για εμπορικές εφαρμογές, σχεδιασμένος για EPCs,
              απομακρυσμένες εγκαταστάσεις και σύγχρονα ενεργειακά έργα που απαιτούν γρήγορη
              ανάπτυξη, υψηλότερη απόδοση και smart monitoring.
            </p>

            <div className="hero-points">
              <div>+20–30% higher energy yield vs fixed systems</div>
              <div>Fully autonomous operation with no grid dependency</div>
              <div>Fast installation — ready in hours, not days</div>
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

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="section-tag">Why Soldrive Core</div>
            <h2>Built to improve performance and return</h2>
            <p>
              Soldrive Core is positioned as a commercial product that helps developers, EPCs and asset
              owners improve yield, reduce complexity and accelerate deployment.
            </p>
          </div>

          <div className="grid feature-grid">
            {benefits.map((item, index) => (
              <div key={item.title} className="card feature-card">
                <div className={index % 2 === 0 ? "feature-index blue" : "feature-index orange"}>
                  0{index + 1}
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="specs" className="section section-alt">
        <div className="container">
          <div className="section-head">
            <div className="section-tag">Specifications</div>
            <h2>Core product specs</h2>
            <p>
              Soldrive Core combines autonomous operation, 39 kWp installed power, single-axis movement,
              smart back tracking, high wind resistance and zero-maintenance design for long-term field
              performance.
            </p>
          </div>

          <div className="grid specs-grid">
            {specs.map((item) => (
              <div key={item.label} className="card">
                <div className="card-label">{item.label}</div>
                <div className="card-value">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="section-tag">Designed for EPCs &amp; Energy Projects</div>
            <h2>Positioned for real deployment scenarios</h2>
            <p>
              Soldrive Core is designed to fit real project workflows and commercial requirements, making
              it easier to specify, deploy and scale.
            </p>
          </div>

          <div className="grid app-grid">
            <div className="card app-card">Ideal for remote and off-grid installations</div>
            <div className="card app-card">Suitable for agricultural and industrial use</div>
            <div className="card app-card">Scalable for distributed energy systems</div>
            <div className="card app-card">Plug &amp; play integration into PV projects</div>
          </div>
        </div>
      </section>

      <section className="section section-installations">
        <div className="container">
          <div className="section-head">
            <div className="section-tag">Field Installations</div>
            <h2>Installed in real conditions</h2>
            <p>
              From close-up engineering details to full-scale solar fields, Soldrive Core is presented
              through real installation imagery that builds trust and commercial credibility.
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

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <div className="section-tag">Smart Monitoring Included</div>
            <h2>Visibility that adds operational confidence</h2>
            <p>
              Monitor performance, tracker position and system status in real time from mobile or desktop,
              turning Soldrive Core into a smarter and more bankable energy asset.
            </p>
          </div>

          <div className="grid feature-grid">
            {features.map((item, index) => (
              <div key={item.title} className="card feature-card">
                <div className={index % 2 === 0 ? "feature-index blue" : "feature-index orange"}>
                  0{index + 1}
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="section-tag">Applications</div>
            <h2>Positioned for modern energy use cases</h2>
            <p>
              Soldrive Core gives you one coherent product story across infrastructure, remote and hybrid
              energy needs.
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

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <div className="section-tag">Engineered for Reliability</div>
            <h2>Commercial confidence built into the product</h2>
            <p>
              Designed and engineered for long-life operation, minimal maintenance and dependable
              performance under real field conditions.
            </p>
          </div>

          <div className="grid app-grid">
            <div className="card app-card">Designed &amp; engineered in Greece</div>
            <div className="card app-card">Tested for real field conditions</div>
            <div className="card app-card">Long-life materials for decades of operation</div>
            <div className="card app-card">Minimal maintenance requirements</div>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <div className="contact-box">
            <div className="section-tag">Request a Quote</div>
            <h2>Start your next solar project with smarter tracking</h2>
            <p>
              Add your sales email, brochure PDF and commercial details here to turn Soldrive Core into a
              complete lead-generation page.
            </p>

            <div className="cta-row">
              <a href="mailto:info@soldrivecore.com" className="btn btn-primary">
                Contact Us
              </a>
              <a href="#specs" className="btn btn-secondary">
                View Specs
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
