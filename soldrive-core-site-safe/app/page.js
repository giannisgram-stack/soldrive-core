export default function HomePage() {
  const specs = [
    { label: "Product", value: "Soldrive Core" },
    { label: "Maximum length", value: "Up to 75 m" },
    { label: "PV power", value: "39 kWp" },
    { label: "Operation", value: "Autonomous" },
    { label: "Tracking accuracy", value: "1°" },
    { label: "Drive type", value: "Single Axis" },
    { label: "Wind resistance", value: "Up to 140 km/h" },
    { label: "Back tracking", value: "Smart" },
    { label: "Safe mode", value: "Horizontal position in strong winds" },
    { label: "Maintenance", value: "Zero maintenance" },
    { label: "Monitoring", value: "Smart monitoring & telemetry" },
  ];

  const features = [
    {
      title: "Precision tracking",
      text: "Single-axis operation with tracking accuracy up to 1° for optimized solar capture.",
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
      text: "Monitor tracker position and performance in real time from mobile through telemetry-enabled monitoring.",
    },
  ];

  const applications = [
    "Commercial & industrial solar",
    "Remote energy systems",
    "Hybrid & autonomous projects",
    "Infrastructure applications",
  ];

  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">Soldrive Core</div>
            <h1>Soldrive Core</h1>
            <p className="moto">Smart tracking. Autonomous power. Built to perform.</p>
            <p className="lead">
              A 39 kWp autonomous single-axis solar tracker expandable up to 75 m,
              designed for fast deployment, zero maintenance and real-time monitoring.
            </p>
            <p className="lead lead-gr">
              Αυτόνομος μονοαξονικός ηλιακός ιχνηλάτης 39 kWp, επεκτάσιμος έως 75 m,
              σχεδιασμένος για γρήγορη εγκατάσταση, μηδενική συντήρηση και real-time παρακολούθηση.
            </p>
            <div className="cta-row">
              <a href="#specs" className="btn btn-primary">View Specs</a>
              <a href="#contact" className="btn btn-secondary">Contact</a>
            </div>
          </div>
          <div className="logo-card">
            <img src="/soldrive-core-logo.jpeg" alt="Soldrive Core logo" />
          </div>
        </div>
      </section>

      <section id="specs" className="section section-alt">
        <div className="container">
          <div className="section-head">
            <div className="section-tag">Specifications</div>
            <h2>Core product specs</h2>
            <p>
              Soldrive Core combines autonomous operation, 39 kWp installed power,
              single-axis movement, smart back tracking, high wind resistance and
              zero-maintenance design for long-term field performance.
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
            <div className="section-tag">Highlights</div>
            <h2>Built for resilience and visibility</h2>
            <p>
              Precision tracking, fast startup, smart protection and remote monitoring
              in one clear product platform.
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

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <div className="section-tag">Applications</div>
            <h2>Positioned for modern energy use cases</h2>
            <p>
              Soldrive Core gives you one coherent product story across infrastructure,
              remote and hybrid energy needs.
            </p>
          </div>
          <div className="grid app-grid">
            {applications.map((item) => (
              <div key={item} className="card app-card">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <div className="contact-box">
            <div className="section-tag">Contact</div>
            <h2>Ready to present Soldrive Core</h2>
            <p>
              Add your email, brochure PDF, product renders and final commercial details
              to turn this into the public version of soldrivecore.com.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
