const useReveal = (delay = 0) => {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => setShown(true), delay);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [delay]);
  return [ref, shown];
};

const Reveal = ({ children, delay = 0, y = 18, as: As = "div", style }) => {
  const [ref, shown] = useReveal(delay);
  return (
    <As
      ref={ref}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : `translateY(${y}px)`,
        transition:
          "opacity .8s cubic-bezier(.2,.7,.2,1), transform .8s cubic-bezier(.2,.7,.2,1)",
        ...(style || {}),
      }}
    >
      {children}
    </As>
  );
};

// Hero Section

const Hero = ({ headline }) => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="shell">
        <div className="eyebrow-row">
          <span className="status-pill">
            <span></span> EN 14181 · CPCB · SPCB ready
          </span>
          <span className="mono muted">
            Trusted across 240+ industrial sites
          </span>
        </div>
        <h1 id="hero-title">
          Every Dust Particle <span className="grad-text">measured</span>.
          <br />
          <em>Every threshold, watched.</em>
        </h1>
        <div className="hero-grid">
          <p>
            Vepolink turns IoT-enabled analyzers – PM10, PM2.5, SO₂, NOₓ, CO,
            CO₂, VOCs, NH₃, H₂S, TRS compounds, and greenhouse gases – into a
            single, compliance-ready picture of every emission source across
            boilers, incinerators, kilns, and treatment units you operate.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#pilot">
              Request a pilot
            </a>
            <a className="button button-light" href="#dashboard">
              See a live station
            </a>
          </div>
        </div>
        <div className="dashboard-frame">
          <CemsDashboard />
        </div>
        <div className="stats-strip">
          {[
            ["240+", "monitoring stations live"],
            ["99.4%", "data availability SLA"],
            ["6", "wired/wireless protocols per DAS"],
            ["< 5s", "telemetry-to-alert latency"],
            ["14", "OEM analyser partners"],
          ].map(([k, v], index) => (
            <div key={v}>
              <Reveal delay={120 * index}>
                <dt>{k}</dt>
              </Reveal>
              <Reveal delay={120 * index}>
                <dd>{v}</dd>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductListCard = () => {
  return (
    <section className="bg-white py-20">
      <div className="shell">
        <div className="w-full grid grid-cols-3 gap-0  border border-(--line) rounded p-4">
          <div className="col-span-1 ">
            <div className="w-[100%] m-auto min-h-[320px] bg-white rounded-sm border border-(--line)">
              <img src="assets/images/emission.png" />
            </div>
          </div>
          <div className="col-span-2 px-5">
            <div className="w-full py-2">
              <span class="status-pill">
                <span></span> Real Time Dust Particle Monitoring System /
                Technology
              </span>
              <div className="text-[30px] font-bold mt-2 mb-3">
                Complete Emission Analysis Solutions
              </div>
              <div className="bg-(--paper-2) border border-(--line) rounded p-3 max-w-[420px]">
                <strong>Parameters:</strong>
                <div className="flex flex-wrap gap-1.5 my-2">
                  {[
                    { label: "PM10" },
                    { label: "PM2.5" },
                    { label: "SO₂" },
                    { label: "NOₓ" },
                    { label: "CO" },
                    { label: "CO₂" },
                    { label: "VOCs" },
                    { label: "NH₃" },
                    { label: "H₂S" },
                    { label: "TRS compounds" },
                    { label: "greenhouse gases" },
                  ].map((l, i) => (
                    <span
                      key={i}
                      className="capitalize flex-inline text-center min-h-[31px] px-[12px] py-[5px] border border-(--line) bg-(--card) text-(--link-2) text-[12px] rounded-full"
                    >
                      {l.label}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-row items-end gap-2 justify-end mt-5">
                <a
                  class="px-8 py-2.5 text-sm text-white bg-(--ink-2) rounded-full hover:bg-(--ink)"
                  href="mailto:sales@vepolink.com"
                  style={{ color: "var(--card)" }}
                >
                  Book a walkthrough →
                </a>
                <a
                  class="px-8 py-2.5 text-sm text-(--ink) bg-transparent border border-(--ink) rounded-full hover:border-(--ink-2)"
                  href="mailto:engineering@vepolink.com"
                  style={{ color: "var(--ink)" }}
                >
                  Talk to engineering →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const Capabilities = () => {
  const data = [
    { label: "spm", value: "25" },
    { label: "so2", value: "256" },
    { label: "nox", value: "275" },
  ];
  return (
    <section className="section" id="platform" aria-labelledby="platform-title">
      <div className="shell split-heading">
        <div>
          <Reveal delay={120 * 1}>
            <p className="mono overline">Platform</p>
          </Reveal>
          <Reveal delay={120 * 2}>
            <h2 id="platform-title">
              What you get when
              <br />
              <em>water becomes legible.</em>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={120 * 3}>
          <p>
            A real-time data acquisition, monitoring and analytics platform
            built for environmental compliance, designed around the operating
            reality of a plant supervisor.
          </p>
        </Reveal>
      </div>
      <div className="shell capability-grid">
        <article className="cap-card wide" id="sensors">
          <div className="cap-top">
            <Reveal delay={120 * 4}>
              <p className="mono overline">01 · Integrated sensors</p>
            </Reveal>
            <Reveal delay={120 * 5}>
              <span className="cap-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M9 2v6M15 2v6M7 8h10v3a5 5 0 0 1-10 0V8zM12 17v5"></path>
                </svg>
              </span>
            </Reveal>
          </div>
          <div className="cap-visual rack-visual" aria-hidden="true">
            <div>
              <Reveal delay={120 * 1}>
                <span className="mono">DAS · 02-AB</span>
              </Reveal>
              {["CH-01", "CH-02", "CH-03", "CH-04"].map((l, i) => (
                <Reveal key={i} delay={120 * i}>
                  <p>
                    <i></i>
                    {l}
                    <b></b>live
                  </p>
                </Reveal>
              ))}
            </div>
            <div>
              <Reveal delay={180 * 1}>
                <span className="mono">Analyser</span>
              </Reveal>
              {data.map((item, i) => (
                <Reveal key={i} delay={180 * i}>
                  <p>
                    {String(item.label).toUpperCase()} {item.value}
                  </p>
                </Reveal>
              ))}
            </div>
            <div className="cloud-mini">
              <span className="mono">Cloud</span>
              <svg
                viewBox="0 0 150 80"
                role="img"
                aria-label="Cloud data trend"
              >
                <path
                  className="cloud-fill"
                  d="M3 41 C18 8 30 21 38 15 S51 58 62 40 78 18 89 43 110 68 122 46 137 64 147 28 L147 78 L3 78 Z"
                ></path>
                <path
                  className="cloud-line"
                  d="M3 41 C18 8 30 21 38 15 S51 58 62 40 78 18 89 43 110 68 122 46 137 64 147 28"
                ></path>
              </svg>
            </div>
          </div>
          <Reveal delay={120 * 1}>
            <h3>One dashboard. Every analyser.</h3>
          </Reveal>
          <Reveal delay={120 * 2}>
            <p>
              Map data from single or multi-parameter analysers through one or
              many IoT DAS units with station-level tagging and multi-protocol
              support.
            </p>
          </Reveal>
          <Reveal delay={120 * 3}>
            <strong>99% data availability target</strong>
          </Reveal>
        </article>
        <article className="cap-card">
          <div className="cap-top">
            <Reveal delay={120 * 1}>
              <p className="mono overline">02 · Smart alerts</p>
            </Reveal>
            <Reveal delay={120 * 2}>
              <span className="cap-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M6 8a6 6 0 0 1 12 0c0 6 2 7 2 7H4s2-1 2-7zM10 19a2 2 0 0 0 4 0"></path>
                </svg>
              </span>
            </Reveal>
          </div>
          <div className="cap-visual alert-visual" aria-hidden="true">
            {[
              {
                limit: "14:32",
                label: "SO₂ ↑ 180 mg/Nm³ — Stack A",
                cls: "warn-dot",
              },
              {
                limit: "14:18",
                label: "NOx approaching 95 mg/Nm³ — Boiler 02",
                cls: "alert-dot",
              },
              {
                limit: "13:55",
                label: "CO restored — Furnace-3 back online",
                cls: "",
              },
            ].map((item, i) => (
              <Reveal key={i} delay={180 * i}>
                <p>
                  <i className={item.cls}></i>
                  <span>{item.limit}</span>
                  {item.label}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={180 * 1}>
            <h3>Catch the breach before the audit does.</h3>
          </Reveal>
          <Reveal delay={180 * 2}>
            <p>
              Threshold-aware SMS and email dispatch calibrated to your CPCB
              consent conditions.
            </p>
          </Reveal>
          <Reveal delay={180 * 3}>
            <strong>Pre-threshold warnings</strong>
          </Reveal>
        </article>
        <article className="cap-card">
          <div className="cap-top">
            <Reveal delay={120 * 1}>
              <p className="mono overline">03 · Multiplexing DAS</p>
            </Reveal>
            <Reveal delay={120 * 2}>
              <span className="cap-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M9 3v2M15 3v2M9 19v2M15 19v2M3 9h2M3 15h2M19 9h2M19 15h2M6 6h12v12H6zM10 10h4v4h-4z"></path>
                </svg>
              </span>
            </Reveal>
          </div>
          <div className="cap-visual protocol-visual" aria-hidden="true">
            <div>
              {[
                "Modbus",
                "MQTT",
                "4-20mA",
                "OPC-UA",
                "RS-485",
                "Ethernet",
                "6 inputs / 1 DAS",
                "OTA configurable",
              ].map((l, i) => (
                <span key={i}>{l}</span>
              ))}
            </div>
          </div>
          <h3>Up to 6 protocols on a single DAS.</h3>
          <p>
            Analog 4-20 mA, RS-485 Modbus, MQTT, LAN/WAN/Ethernet, and
            remote-configurable radios.
          </p>
          <strong>6 protocols / 1 box</strong>
        </article>
        <article className="cap-card">
          <div className="cap-top">
            <p className="mono overline">04 · Compliance reporting</p>
            <span className="cap-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M12 2 4 6v6c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6l-8-4z"></path>
              </svg>
            </span>
          </div>
          <div className="cap-visual report-visual" aria-hidden="true">
            <div>
              <span className="mono">Form V — Q3 2026</span>
              <strong>Emission Discharge Compliance</strong>
              <i></i>
              <i></i>
              <i></i>
              <small>↳ CPCB</small>
            </div>
          </div>
          <h3>EN 14181 and CPCB-aligned reports.</h3>
          <p>
            Printable PDFs, CSV exports, signed audit trails, and scheduled
            submissions.
          </p>
          <strong>Auto-routed audits</strong>
        </article>
        <article className="cap-card">
          <div className="cap-top">
            <p className="mono overline">05 · Serverless architecture</p>
            <span className="cap-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M7 18a5 5 0 0 1-1-9.9 5 5 0 0 1 9.6-1.4A4.5 4.5 0 0 1 18 18H7z"></path>
              </svg>
            </span>
          </div>
          <div className="cap-visual scale-visual" aria-hidden="true">
            <span>
              <i></i>Outfall
            </span>
            <span>
              <i></i>Line
            </span>
            <span>
              <i></i>Plant
            </span>
            <span>
              <i></i>Cluster
            </span>
          </div>
          <h3>Scales from one outfall to a refinery.</h3>
          <p>
            Plug-and-play DAS, low cost of ownership, and integration with
            existing SCADA environments.
          </p>
          <strong>Plug &amp; play</strong>
        </article>
      </div>
    </section>
  );
};

// ─── How it works ─────────────────────────────────────
const HowItWorks = () => {
  const steps = [
    {
      n: "01",
      k: "Sensor",
      t: "Field analyser",
      d: "pH, turbidity, DO, ORP, conductivity, temperature, ammonia, BOD/COD probes.",
    },
    {
      n: "02",
      k: "DAS",
      t: "Plug-and-play DAS",
      d: "Multi-protocol data acquisition with onboard buffering and field configuration.",
    },
    {
      n: "03",
      k: "Cloud",
      t: "Vepolink cloud",
      d: "Serverless ingest, station tagging, time-series storage, REST and OPC-UA outputs.",
    },
    {
      n: "04",
      k: "View",
      t: "Live dashboard",
      d: "Operators, supervisors, plant heads and regulators each get the view they need.",
    },
    {
      n: "05",
      k: "Act",
      t: "Alerts & reports",
      d: "Pre-threshold messages, automated forms, and third-party API pushes.",
    },
  ];
  return (
    <section className="process" aria-labelledby="process-title">
      <div className="shell process-head">
        <div>
          <p className="mono overline">How it works</p>
          <h2 id="process-title">
            From probe to plant head,
            <br />
            <em>under five seconds.</em>
          </h2>
        </div>
        <p>
          One architecture, every site. Wired in over a weekend; tuned to your
          consent conditions in the first week.
        </p>
      </div>
      <ol className="shell process-grid">
        {steps.map((s, i) => (
          <Reveal key={i} delay={180 * i}>
            <li>
              <span>{s.n}</span>
              <strong>{s.t}</strong>
              <p>{s.d}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
};

const Compliance = () => (
  <section
    className="section compliance"
    id="compliance"
    aria-labelledby="compliance-title"
  >
    <div className="shell compliance-grid">
      <div>
        <p className="mono overline">Compliance, by design</p>
        <h2 id="compliance-title">
          Built around the rules
          <br />
          <em>you already operate under.</em>
        </h2>
        <p>
          CEMS-style continuity for water. Reporting mapped to state pollution
          control board templates. Calibration certificates retained for the
          audit lifecycle.
        </p>
        <ul className="check-list">
          {[
            [
              "EN 14181 data treatment",
              "Validation, normalisation, drift correction baked in.",
            ],
            [
              "CPCB / SPCB submission templates",
              "Form V, Form IV, real-time data feed to OCEMS portals.",
            ],
            [
              "OTP-secured multi-tier access",
              "Super-admin, admin, sub-user — with module-level visibility.",
            ],
            [
              "SI-traceable remote calibration",
              "Manufacturer-signed certificates retained with each record.",
            ],
          ].map(([k, v], i) => (
            <Reveal key={i} delay={180 * i}>
              <li>
                <strong>{k}</strong>
                <span>{v}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>

      <ComplianceVisual />
    </div>
  </section>
);
const ComplianceVisual = () => (
  <aside className="rules-panel" aria-label="Alert rule example">
    {/* alert composer */}
    <p className="mono overline">ALERT RULES · Demo A · Industrial Emission</p>
    {[
      { p: "SO₂", op: "<", v: "80 µg/m³", st: "ok" },
      { p: "NOₓ", op: "<", v: "100 µg/m³", st: "warn" },
      { p: "CO", op: "<", v: "50 mg/Nm³", st: "ok" },
      { p: "PM2.5", op: "<", v: "35 µg/m³", st: "ok" },
      { p: "VOC", op: "<", v: "50 µg/m³", st: "warn" },
      { p: "CO₂", op: "<", v: "450 ppm", st: "ok" },
    ].map((r, i) => (
      <Reveal key={i} delay={180 * i}>
        <div className="rule-row">
          <span
            style={{
              background:
                r.st === "warn" ? "var(--signal-warn)" : "var(--signal-ok)",
            }}
          ></span>
          <strong>{r.p}</strong>
          <small>{r.op}</small>
          <b>{r.v}</b>
          <em>SMS · MAIL</em>
        </div>
      </Reveal>
    ))}
    <div className="route-box">
      <div>
        <small>Auto-route on breach</small>
        <strong>Plant Head → Compliance Officer → SPCB Portal</strong>
      </div>
      <span aria-hidden="true">→</span>
    </div>
  </aside>
);

const IndustriesWeWork = () => {
  const IndustriesList = [
    {
      id: 1,
      name: "Chemical, petrochemical and process industries",
      param: "CO₂ · CH₄ · N₂O",
    },
    {
      id: 2,
      name: "Fertilizers industries",
      param: "NOₓ · SO₂ · CO₂ · NH₃ · and particulates",
    },
    {
      id: 3,
      name: "Pharmaceutical industries",
      param: "NOₓ · SO₂ · CO₂ · CO · NH₃ · PM2.5 · PM10",
    },
    {
      id: 4,
      name: "Food and drug industries",
      param: "NOₓ · SO₂ · CO · CO₂ · VOCs · and particulates",
    },
    {
      id: 5,
      name: "Sugar, beverage industries",
      param: "CO₂ · NOₓ · SO₂ · CO · and particulates",
    },
    {
      id: 6,
      name: "Paper and pulp industries",
      param: "SO₂ · NOₓ · CO · CO₂ · particulates · VOCs · and TRS compounds",
    },
    {
      id: 7,
      name: "Water and waste water management",
      param: "NOₓ · SO₂ · CO · PM · VOCs",
    },
    {
      id: 8,
      name: "Dredging industries",
      param: "CO₂ · NOₓ · SO₂ · PM10 · PM2.5",
    },
  ];
  return (
    <section
      className="section industries"
      id="industries"
      aria-labelledby="industries-title"
    >
      <div className="shell industries-panel">
        <div className="industries-copy">
          <p className="mono overline">Industries</p>
          <h2 id="industries-title">
            Built for plants where water data cannot be late.
          </h2>
          <p>
            Deploy across Sewage Treatment Plants (STPs), Common Effluent
            Treatment Plants (CETPs), pharmaceuticals, textiles, food
            processing, refineries, and campus utilities without rebuilding your
            instrumentation stack.
          </p>
          <div className="industry-tags" aria-label="Supported industries">
            {[
              "STP",
              "ETP",
              "CETP",
              "Pharmaceuticals",
              "Textiles",
              "Food processing",
              "Refineries",
              "Campus utilities",
            ].map((l, i) => (
              <Reveal key={i} delay={180 * i}>
                <span>{l}</span>
              </Reveal>
            ))}
          </div>
        </div>
        <aside
          className="industry-matrix"
          aria-label="Industry deployment examples"
        >
          <div className="max-h-[310px] overflow-auto">
            {IndustriesList.map((li, i) => (
              <Reveal key={i} delay={180 * i}>
                <div className="matrix-row active">
                  <span></span>
                  <strong>{li.name}</strong>
                  <small>{li.param}</small>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="matrix-foot mono">
            <span>{IndustriesList.length} sectors</span>
            <span>1 reporting layer</span>
          </div>
        </aside>
      </div>
    </section>
  );
};

// ─── Partners ─────────────────────────────────────────
const Partners = () => {
  const partners = [
    "Anodyne",
    "Enhanced Wapp Systems",
    "Hemera Analysers",
    "Process Instruments",
    "Tata Projects",
    "WOG Technologies",
    "Tethys Instruments",
    "Uniphos Envirotronic",
    "Turnkey Instruments",
    "Airpointer",
    "Siemens",
    "Adept Fluidyne",
    "Horiba",
    "Digital Paani",
  ];
  return (
    <section
      className="partners"
      id="partners"
      aria-labelledby="partners-title"
    >
      <div className="shell">
        <p className="mono overline">OEM analyser partners · 14</p>
        <h2 id="partners-title" className="sr-only">
          OEM analyser partners
        </h2>
        <div className="partner-marquee" aria-label="OEM analyser partners">
          <div>
            {[...partners, ...partners].map((p, i) => (
              <span key={i}>{p}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── CTA ──────────────────────────────────────────────
const CTA = () => (
  <section className="cta" id="pilot" aria-labelledby="cta-title">
    <div className="shell cta-panel">
      <div>
        <p className="mono overline">Pilot in 30 days</p>
        <h2 id="cta-title">
          Bring one outfall
          <br />
          <em>online this quarter.</em>
        </h2>
      </div>
      <div>
        <p>
          A 30-day pilot covers one station, one DAS, four parameters and full
          compliance reporting. Hardware shipped and commissioned by our team.
        </p>
        <a
          className="button button-light-filled"
          href="mailto:sales@vepolink.com"
        >
          Book a walkthrough →
        </a>
        <a
          className="button button-ghost-dark"
          href="mailto:engineering@vepolink.com"
        >
          Talk to engineering
        </a>
      </div>
    </div>
  </section>
);
Object.assign(window, {
  Hero,
  Capabilities,
  HowItWorks,
  Compliance,
  IndustriesWeWork,
  Partners,
  CTA,
  ProductListCard,
});
