const CemsDashboard = () => {
  const CO2 = useTicker(7.18, 0.04, 2200);
  const series = React.useMemo(() => ({
    CO2: genSeries(7.2, 0.08, 28, 11),
  }));

  const [isBtnActive, setBtnActive] = React.useState("24H");
  return (
    <>
      <div className="browser-bar">
        <div className="window-dots" aria-hidden="true">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                width: 8,
                height: 8,
                borderRadius: 99,
                background: "var(--line)",
              }}
            />
          ))}
        </div>
        <p className="mono">vepolink.com / stations / demo-abcd / live</p>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span
            style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
            className="mono"
          >
            <LivePulse />
            <span
              style={{
                fontSize: 11,
                color: "var(--ink)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Live
            </span>
          </span>
          <span className="mono" style={{ fontSize: 11, color: "var(--mute)" }}>
            ↻ 5s
          </span>
        </div>
      </div>
      <div className="station-bar">
        <div>
          <p
            className="mono overline no-underline"
            style={{ textDecoration: "none" }}
          >
            Station · CPCB ID 5572-TN-08
          </p>
          <h2>Demo STP - Outfall A</h2>
          <p className="mono muted">
            12.99 N · 80.07 E · Last calibration 14 days ago
          </p>
        </div>
        <div className="range-tabs" aria-label="Time range">
          {["1H", "24H", "7D", "30D"].map((t, i) => (
            <button
              aria-pressed={t === isBtnActive ? true : false}
              key={t}
              type="button"
              onClick={() => setBtnActive(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
      <div className="metric-grid">
        <Reveal delay={120 * 1}>
          <ParamTile
            label="spm"
            unit="µg/m³"
            value={useTicker(25, 2, 1000)}
            decimals={2}
            range={[0, 50]}
            status="ok"
            series={genSeries(0.5, 0.02, 28, 11)}
            accent="oklch(58% 0.18 285)"
          />
        </Reveal>
        <Reveal delay={120 * 2}>
          <ParamTile
            label="so2"
            unit="µg/m³"
            value={useTicker(150, 2, 1800)}
            decimals={2}
            range={[0, 300]}
            status="ok"
            series={genSeries(0.5, 0.02, 28, 11)}
            accent="oklch(58% 0.18 285)"
          />
        </Reveal>
        <Reveal delay={120 * 3}>
          <ParamTile
            label="nox"
            unit="µg/m³"
            value={useTicker(150, 3, 2500)}
            decimals={2}
            range={[0, 300]}
            status="ok"
            series={genSeries(0.5, 0.02, 28, 11)}
            accent="oklch(58% 0.18 285)"
          />
        </Reveal>
        <Reveal delay={120 * 4}>
          <ParamTile
            label="CO"
            unit="µg/m³"
            value={useTicker(50, 2, 1800)}
            decimals={2}
            range={[0, 100]}
            status="ok"
            series={genSeries(0.5, 0.02, 28, 11)}
            accent="oklch(58% 0.18 285)"
          />
        </Reveal>
        <Reveal delay={120 * 5}>
          <ParamTile
            label="CO₂"
            unit="ppm"
            value={useTicker(1000, 6, 1100)}
            decimals={2}
            range={[300, 2000]}
            status="ok"
            series={genSeries(0.5, 0.02, 28, 11)}
            accent="oklch(58% 0.18 285)"
          />
        </Reveal>

        <Reveal delay={120 * 6}>
          <ParamTile
            label="PM2.5"
            unit="µg/m³"
            value={useTicker(32.5, 2, 1200)}
            decimals={2}
            range={[0, 75]}
            status="ok"
            series={genSeries(0.5, 0.02, 28, 11)}
            accent="oklch(58% 0.18 285)"
          />
        </Reveal>
      </div>
      <div className="alert-strip">
        <span aria-hidden="true"></span>
        <p>
          <strong>Watch · 14:32:08 IST</strong> Turbidity trending toward upper
          bound - 3.8 NTU at Station 5572-TN-08
        </p>
      </div>
    </>
  );
};

Object.assign(window, { CemsDashboard });
