(() => {
  let ticking = false;

  const isHomePage = () => {
    const page = window.location.pathname.split("/").pop();
    return page === "" || page === "index.html";
  };

  const homeHref = (hash = "") => (isHomePage() ? hash || "#main" : `index.html${hash}`);

  const renderHeader = () => `
    <header class="site-header" data-header>
      <div class="shell nav-shell">
        <a class="brand" href="${homeHref()}" aria-label="Vepolink home">
          <img src="assets/vepolink-logo-horizontal-trimmed.png" width="206" height="40" alt="Vepolink">
        </a>
        <nav class="primary-nav" aria-label="Primary navigation">
          <a href="${homeHref("#platform")}">Platform</a>
          <a href="${homeHref("#sensors")}">Sensors &amp; DAS</a>
          <a href="${homeHref("#compliance")}">Compliance</a>
          <a href="${homeHref("#industries")}">Industries</a>
          <a href="${homeHref("#partners")}">Partners</a>
        </nav>
        <div class="nav-actions">
          <a href="${homeHref("#signin")}">Sign in</a>
          <a class="button button-dark" href="mailto:sales@vepolink.com">Book a walkthrough</a>
        </div>
      </div>
    </header>
  `;

  const renderFooter = () => `
    <footer class="site-footer">
      <div class="shell footer-grid">
        <div class="footer-brand">
          <a class="brand" href="${homeHref()}" aria-label="Vepolink home">
            <img src="assets/vepolink-logo-horizontal-trimmed.png" width="185" height="36" alt="Vepolink">
          </a>
          <p>Real-time data acquisition, monitoring and analytics for environmental compliance. Designed for industries that take water seriously.</p>
        </div>
        <nav aria-label="Footer platform links">
          <h2>Platform</h2>
          <a href="${homeHref("#dashboard")}">Live dashboard</a>
          <a href="${homeHref("#sensors")}">Sensors &amp; DAS</a>
          <a href="${homeHref("#platform")}">Alerts &amp; reports</a>
          <a href="${homeHref("#platform")}">SCADA bridge</a>
          <a href="${homeHref("#platform")}">Cluster maps</a>
        </nav>
        <nav aria-label="Footer industry links">
          <h2>Industries</h2>
          <a href="${homeHref("#industries")}">Pharma &amp; chemicals</a>
          <a href="${homeHref("#industries")}">Pulp &amp; paper</a>
          <a href="${homeHref("#industries")}">Power &amp; utilities</a>
          <a href="${homeHref("#industries")}">Municipal STP</a>
          <a href="${homeHref("#industries")}">F&amp;B manufacturing</a>
        </nav>
        <nav aria-label="Footer compliance links">
          <h2>Compliance</h2>
          <a href="${homeHref("#compliance")}">EN 14181</a>
          <a href="${homeHref("#compliance")}">CPCB OCEMS</a>
          <a href="${homeHref("#compliance")}">SPCB filings</a>
          <a href="${homeHref("#compliance")}">Audit trail</a>
          <a href="${homeHref("#compliance")}">Calibration</a>
        </nav>
        <nav aria-label="Footer company links">
          <h2>Company</h2>
          <a href="about.html">About</a>
          <a href="mailto:hello@vepolink.com">Careers</a>
          <a href="mailto:partners@vepolink.com">Channel partners</a>
          <a href="tel:+919810416132">Support</a>
          <a href="mailto:hello@vepolink.com">Contact</a>
        </nav>
      </div>
      <div class="shell footer-bottom">
        <p class="mono">© 2026 Vepolink Technologies LLP · Monitoring purity</p>
        <nav aria-label="Legal links">
          <a href="mailto:hello@vepolink.com">Privacy</a>
          <a href="mailto:hello@vepolink.com">Terms</a>
          <a href="mailto:hello@vepolink.com">Security</a>
          <a href="mailto:hello@vepolink.com">SLA</a>
          <a href="mailto:hello@vepolink.com">Data residency</a>
        </nav>
      </div>
    </footer>
  `;

  const syncHeader = () => {
    document.querySelectorAll("[data-header]").forEach((header) => {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    });
    ticking = false;
  };

  class SiteHeader extends HTMLElement {
    connectedCallback() {
      this.innerHTML = renderHeader();
      syncHeader();
    }
  }

  class SiteFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = renderFooter();
    }
  }

  if (!customElements.get("site-header")) {
    customElements.define("site-header", SiteHeader);
  }

  if (!customElements.get("site-footer")) {
    customElements.define("site-footer", SiteFooter);
  }

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(syncHeader);
      }
    },
    { passive: true }
  );
  syncHeader();

  const metricConfig = [
    ["ph", 7.18, 0.04, 2],
    ["turbidity", 2.8, 0.2, 1],
    ["do", 6.4, 0.08, 2],
    ["temp", 24.6, 0.06, 1],
    ["conductivity", 412, 4, 0],
    ["tds", 248, 3, 0],
  ];

  const nodes = metricConfig
    .map(([name, base, jitter, decimals]) => ({
      node: document.querySelector(`[data-metric="${name}"]`),
      value: base,
      jitter,
      decimals,
    }))
    .filter((item) => item.node);

  if (nodes.length && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.setInterval(() => {
      for (const item of nodes) {
        item.value = Math.max(0, item.value + (Math.random() - 0.5) * item.jitter);
        item.node.textContent = item.value.toFixed(item.decimals);
      }
    }, 2200);
  }
})();
