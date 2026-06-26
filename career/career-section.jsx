const HeroCareerSection = () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="shell">
        <div className="eyebrow-row">
          <span className="status-pill">
            <span></span> CAREERS • JOIN VEPOLINK
          </span>
        </div>

        <h1 id="hero-title">
          Build systems that power industrial{" "}
          <span className="grad-text">intelligence</span>
        </h1>
        <div className="hero-grid">
          <p>
            Join a team focused on real-time analytics, industrial IoT,
            environmental compliance, and scalable monitoring systems built for
            modern infrastructure.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#pilot">
              CTA Buttons: View Open Roles →
            </a>
            <a className="button button-light" href="#dashboard">
              Talk to Our Team →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, HeroCareerSection);
