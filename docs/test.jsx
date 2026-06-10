const AquaSpectrumBackdrop = () => {
  const scanBars = Array.from({ length: 22 }, (_, i) => ({
    x: 70 + i * 68,
    h: 40 + (i % 6) * 18 + ((i * 7) % 5) * 10,
    d: (i % 8) * 0.32,
  }));

  const droplets = [
    {
      path: "M 180 130 C 260 180, 340 210, 460 220 S 690 210, 820 260 S 1080 350, 1360 320",
      d: 0,
    },
    {
      path: "M 60 360 C 200 330, 360 300, 520 340 S 860 430, 1080 390 S 1340 250, 1510 290",
      d: 1.4,
    },
    {
      path: "M 260 520 C 420 470, 610 500, 790 450 S 1080 300, 1310 180",
      d: 2.3,
    },
  ];

  const sensors = [
    { x: 240, y: 180, d: 0.2 },
    { x: 640, y: 300, d: 1.2 },
    { x: 1040, y: 230, d: 2.2 },
    { x: 1320, y: 420, d: 0.8 },
  ];

  return (
    <>
      <svg
        viewBox="0 0 1600 640"
        preserveAspectRatio="xMidYMid slice"
        style={{
          position: "absolute",
          top: 0,
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 0,
          maskImage:
            "linear-gradient(180deg, black 0%, black 72%, transparent 100%)",
        }}
      >
        {/* soft water contours */}
        <path
          d="M0 250 C180 210, 340 190, 510 230 S850 320, 1080 270 S1380 180, 1600 240 L1600 640 L0 640 Z"
          fill="url(#aquaWave)"
        />
        <path
          d="M0 330 C200 380, 380 360, 560 320 S910 230, 1160 300 S1410 410, 1600 360 L1600 640 L0 640 Z"
          fill="url(#aquaWave)"
          opacity="0.65"
        >
          <animate
            attributeName="d"
            dur="9s"
            repeatCount="indefinite"
            values="
            M0 330 C200 380, 380 360, 560 320 S910 230, 1160 300 S1410 410, 1600 360 L1600 640 L0 640 Z;
            M0 340 C180 300, 390 350, 590 300 S910 260, 1150 320 S1410 390, 1600 340 L1600 640 L0 640 Z;
            M0 330 C200 380, 380 360, 560 320 S910 230, 1160 300 S1410 410, 1600 360 L1600 640 L0 640 Z
          "
          />
        </path>

        {/* spectrograph bars */}
        {scanBars.map((b, i) => (
          <g key={i}>
            <rect
              x={b.x}
              y={560 - b.h}
              width="14"
              height={b.h}
              rx="7"
              fill="url(#specBar)"
              opacity="0.32"
            >
              <animate
                attributeName="height"
                values={`${b.h};${b.h + 24};${b.h}`}
                dur="3.6s"
                begin={`${b.d}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                values={`${560 - b.h};${560 - (b.h + 24)};${560 - b.h}`}
                dur="3.6s"
                begin={`${b.d}s`}
                repeatCount="indefinite"
              />
            </rect>
          </g>
        ))}

        {/* dotted baseline */}
        {Array.from({ length: 28 }, (_, i) => (
          <circle
            key={i}
            cx={50 + i * 56}
            cy="562"
            r="1.4"
            fill="var(--ink-3)"
            opacity="0.18"
          />
        ))}

        {/* flowing droplets / data packets */}
        {droplets.map((item, i) => (
          <g key={i}>
            <path
              d={item.path}
              fill="none"
              stroke="var(--cyan)"
              strokeWidth="1"
              opacity="0.1"
            />
            <circle r="3.5" fill="var(--cyan)" opacity="0.95">
              <animateMotion
                path={item.path}
                dur="5.8s"
                begin={`${item.d}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                dur="5.8s"
                begin={`${item.d}s`}
                repeatCount="indefinite"
              />
            </circle>
            <ellipse rx="10" ry="6" fill="url(#sensorGlow)" opacity="0.6">
              <animateMotion
                path={item.path}
                dur="5.8s"
                begin={`${item.d}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0;0.35;0.2;0"
                dur="5.8s"
                begin={`${item.d}s`}
                repeatCount="indefinite"
              />
            </ellipse>
          </g>
        ))}

        {/* sensor nodes */}
        {sensors.map((s, i) => (
          <g key={i}>
            <circle
              cx={s.x}
              cy={s.y}
              r="16"
              fill="url(#sensorGlow)"
              opacity="0.45"
            />
            <circle cx={s.x} cy={s.y} r="3" fill="var(--cyan)" opacity="0.95" />
            <circle
              cx={s.x}
              cy={s.y}
              r="4"
              fill="none"
              stroke="var(--cyan)"
              strokeWidth="1"
              opacity="0.45"
            >
              <animate
                attributeName="r"
                from="4"
                to="48"
                dur="4.8s"
                begin={`${s.d}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                from="0.45"
                to="0"
                dur="4.8s"
                begin={`${s.d}s`}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        ))}

        {/* vertical scan sweep */}
        <rect
          x="-220"
          y="0"
          width="220"
          height="640"
          fill="url(#aquaWave)"
          opacity="0.16"
        >
          <animate
            attributeName="x"
            from="-220"
            to="1600"
            dur="8.5s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>
    </>
  );
};
const AquaSpectrumBackdrop = () => {
  const scanBars = Array.from({ length: 22 }, (_, i) => ({
    x: 70 + i * 68,
    h: 40 + (i % 6) * 18 + ((i * 7) % 5) * 10,
    d: (i % 8) * 0.32,
  }));

  const droplets = [
    {
      path: "M 180 130 C 260 180, 340 210, 460 220 S 690 210, 820 260 S 1080 350, 1360 320",
      d: 0,
    },
    {
      path: "M 60 360 C 200 330, 360 300, 520 340 S 860 430, 1080 390 S 1340 250, 1510 290",
      d: 1.4,
    },
    {
      path: "M 260 520 C 420 470, 610 500, 790 450 S 1080 300, 1310 180",
      d: 2.3,
    },
  ];

  const sensors = [
    { x: 240, y: 180, d: 0.2 },
    { x: 640, y: 300, d: 1.2 },
    { x: 1040, y: 230, d: 2.2 },
    { x: 1320, y: 420, d: 0.8 },
  ];

  return (
    <>
      <svg
        viewBox="0 0 1600 640"
        preserveAspectRatio="xMidYMid slice"
        style={{
          position: "absolute",
          top: 0,
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 0,
          maskImage:
            "linear-gradient(180deg, black 0%, black 72%, transparent 100%)",
        }}
      >
        {/* soft water contours */}
        <path
          d="M0 250 C180 210, 340 190, 510 230 S850 320, 1080 270 S1380 180, 1600 240 L1600 640 L0 640 Z"
          fill="url(#aquaWave)"
        />
        <path
          d="M0 330 C200 380, 380 360, 560 320 S910 230, 1160 300 S1410 410, 1600 360 L1600 640 L0 640 Z"
          fill="url(#aquaWave)"
          opacity="0.65"
        >
          <animate
            attributeName="d"
            dur="9s"
            repeatCount="indefinite"
            values="
            M0 330 C200 380, 380 360, 560 320 S910 230, 1160 300 S1410 410, 1600 360 L1600 640 L0 640 Z;
            M0 340 C180 300, 390 350, 590 300 S910 260, 1150 320 S1410 390, 1600 340 L1600 640 L0 640 Z;
            M0 330 C200 380, 380 360, 560 320 S910 230, 1160 300 S1410 410, 1600 360 L1600 640 L0 640 Z
          "
          />
        </path>

        {/* spectrograph bars */}
        {scanBars.map((b, i) => (
          <g key={i}>
            <rect
              x={b.x}
              y={560 - b.h}
              width="14"
              height={b.h}
              rx="7"
              fill="url(#specBar)"
              opacity="0.32"
            >
              <animate
                attributeName="height"
                values={`${b.h};${b.h + 24};${b.h}`}
                dur="3.6s"
                begin={`${b.d}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                values={`${560 - b.h};${560 - (b.h + 24)};${560 - b.h}`}
                dur="3.6s"
                begin={`${b.d}s`}
                repeatCount="indefinite"
              />
            </rect>
          </g>
        ))}

        {/* dotted baseline */}
        {Array.from({ length: 28 }, (_, i) => (
          <circle
            key={i}
            cx={50 + i * 56}
            cy="562"
            r="1.4"
            fill="var(--ink-3)"
            opacity="0.18"
          />
        ))}

        {/* flowing droplets / data packets */}
        {droplets.map((item, i) => (
          <g key={i}>
            <path
              d={item.path}
              fill="none"
              stroke="var(--cyan)"
              strokeWidth="1"
              opacity="0.1"
            />
            <circle r="3.5" fill="var(--cyan)" opacity="0.95">
              <animateMotion
                path={item.path}
                dur="5.8s"
                begin={`${item.d}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                dur="5.8s"
                begin={`${item.d}s`}
                repeatCount="indefinite"
              />
            </circle>
            <ellipse rx="10" ry="6" fill="url(#sensorGlow)" opacity="0.6">
              <animateMotion
                path={item.path}
                dur="5.8s"
                begin={`${item.d}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0;0.35;0.2;0"
                dur="5.8s"
                begin={`${item.d}s`}
                repeatCount="indefinite"
              />
            </ellipse>
          </g>
        ))}

        {/* sensor nodes */}
        {sensors.map((s, i) => (
          <g key={i}>
            <circle
              cx={s.x}
              cy={s.y}
              r="16"
              fill="url(#sensorGlow)"
              opacity="0.45"
            />
            <circle cx={s.x} cy={s.y} r="3" fill="var(--cyan)" opacity="0.95" />
            <circle
              cx={s.x}
              cy={s.y}
              r="4"
              fill="none"
              stroke="var(--cyan)"
              strokeWidth="1"
              opacity="0.45"
            >
              <animate
                attributeName="r"
                from="4"
                to="48"
                dur="4.8s"
                begin={`${s.d}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                from="0.45"
                to="0"
                dur="4.8s"
                begin={`${s.d}s`}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        ))}

        {/* vertical scan sweep */}
        <rect
          x="-220"
          y="0"
          width="220"
          height="640"
          fill="url(#aquaWave)"
          opacity="0.16"
        >
          <animate
            attributeName="x"
            from="-220"
            to="1600"
            dur="8.5s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>
    </>
  );
};

const AquaSpectrumBackdrop = () => {
  const scanBars = Array.from({ length: 22 }, (_, i) => ({
    x: 70 + i * 68,
    h: 40 + (i % 6) * 18 + ((i * 7) % 5) * 10,
    d: (i % 8) * 0.32,
  }));

  const droplets = [
    {
      path: "M 180 130 C 260 180, 340 210, 460 220 S 690 210, 820 260 S 1080 350, 1360 320",
      d: 0,
    },
    {
      path: "M 60 360 C 200 330, 360 300, 520 340 S 860 430, 1080 390 S 1340 250, 1510 290",
      d: 1.4,
    },
    {
      path: "M 260 520 C 420 470, 610 500, 790 450 S 1080 300, 1310 180",
      d: 2.3,
    },
  ];

  const sensors = [
    { x: 240, y: 180, d: 0.2 },
    { x: 640, y: 300, d: 1.2 },
    { x: 1040, y: 230, d: 2.2 },
    { x: 1320, y: 420, d: 0.8 },
  ];

  return (
    <>
      <svg
        viewBox="0 0 1600 640"
        preserveAspectRatio="xMidYMid slice"
        style={{
          position: "absolute",
          top: 0,
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 0,
          maskImage:
            "linear-gradient(180deg, black 0%, black 72%, transparent 100%)",
        }}
      >
        {/* soft water contours */}
        <path
          d="M0 250 C180 210, 340 190, 510 230 S850 320, 1080 270 S1380 180, 1600 240 L1600 640 L0 640 Z"
          fill="url(#aquaWave)"
        />
        <path
          d="M0 330 C200 380, 380 360, 560 320 S910 230, 1160 300 S1410 410, 1600 360 L1600 640 L0 640 Z"
          fill="url(#aquaWave)"
          opacity="0.65"
        >
          <animate
            attributeName="d"
            dur="9s"
            repeatCount="indefinite"
            values="
            M0 330 C200 380, 380 360, 560 320 S910 230, 1160 300 S1410 410, 1600 360 L1600 640 L0 640 Z;
            M0 340 C180 300, 390 350, 590 300 S910 260, 1150 320 S1410 390, 1600 340 L1600 640 L0 640 Z;
            M0 330 C200 380, 380 360, 560 320 S910 230, 1160 300 S1410 410, 1600 360 L1600 640 L0 640 Z
          "
          />
        </path>

        {/* spectrograph bars */}
        {scanBars.map((b, i) => (
          <g key={i}>
            <rect
              x={b.x}
              y={560 - b.h}
              width="14"
              height={b.h}
              rx="7"
              fill="url(#specBar)"
              opacity="0.32"
            >
              <animate
                attributeName="height"
                values={`${b.h};${b.h + 24};${b.h}`}
                dur="3.6s"
                begin={`${b.d}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                values={`${560 - b.h};${560 - (b.h + 24)};${560 - b.h}`}
                dur="3.6s"
                begin={`${b.d}s`}
                repeatCount="indefinite"
              />
            </rect>
          </g>
        ))}

        {/* dotted baseline */}
        {Array.from({ length: 28 }, (_, i) => (
          <circle
            key={i}
            cx={50 + i * 56}
            cy="562"
            r="1.4"
            fill="var(--ink-3)"
            opacity="0.18"
          />
        ))}

        {/* flowing droplets / data packets */}
        {droplets.map((item, i) => (
          <g key={i}>
            <path
              d={item.path}
              fill="none"
              stroke="var(--cyan)"
              strokeWidth="1"
              opacity="0.1"
            />
            <circle r="3.5" fill="var(--cyan)" opacity="0.95">
              <animateMotion
                path={item.path}
                dur="5.8s"
                begin={`${item.d}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                dur="5.8s"
                begin={`${item.d}s`}
                repeatCount="indefinite"
              />
            </circle>
            <ellipse rx="10" ry="6" fill="url(#sensorGlow)" opacity="0.6">
              <animateMotion
                path={item.path}
                dur="5.8s"
                begin={`${item.d}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0;0.35;0.2;0"
                dur="5.8s"
                begin={`${item.d}s`}
                repeatCount="indefinite"
              />
            </ellipse>
          </g>
        ))}

        {/* sensor nodes */}
        {sensors.map((s, i) => (
          <g key={i}>
            <circle
              cx={s.x}
              cy={s.y}
              r="16"
              fill="url(#sensorGlow)"
              opacity="0.45"
            />
            <circle cx={s.x} cy={s.y} r="3" fill="var(--cyan)" opacity="0.95" />
            <circle
              cx={s.x}
              cy={s.y}
              r="4"
              fill="none"
              stroke="var(--cyan)"
              strokeWidth="1"
              opacity="0.45"
            >
              <animate
                attributeName="r"
                from="4"
                to="48"
                dur="4.8s"
                begin={`${s.d}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                from="0.45"
                to="0"
                dur="4.8s"
                begin={`${s.d}s`}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        ))}

        {/* vertical scan sweep */}
        <rect
          x="-220"
          y="0"
          width="220"
          height="640"
          fill="url(#aquaWave)"
          opacity="0.16"
        >
          <animate
            attributeName="x"
            from="-220"
            to="1600"
            dur="8.5s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>
    </>
  );
};
const DataFlowBackdrop = () => {
  const nodes = [
    { x: 150, y: 180 },
    { x: 420, y: 120 },
    { x: 680, y: 240 },
    { x: 980, y: 150 },
    { x: 1280, y: 220 },
    { x: 1450, y: 120 },

    { x: 250, y: 420 },
    { x: 520, y: 500 },
    { x: 840, y: 420 },
    { x: 1180, y: 520 },
  ];

  const connections = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],

    [0, 6],
    [6, 7],
    [7, 8],
    [8, 9],
    [3, 8],
  ];

  return (
    <svg
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
      viewBox="0 0 1600 700"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="flowLine">
          <stop offset="0%" stopColor="#00e5ff" stopOpacity="0" />
          <stop offset="50%" stopColor="#00e5ff" stopOpacity="1" />
          <stop offset="100%" stopColor="#00e5ff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Grid */}
      {Array.from({ length: 20 }).map((_, i) => (
        <line
          key={`v-${i}`}
          x1={i * 80}
          y1="0"
          x2={i * 80}
          y2="700"
          stroke="rgba(255,255,255,.03)"
        />
      ))}

      {Array.from({ length: 10 }).map((_, i) => (
        <line
          key={`h-${i}`}
          x1="0"
          y1={i * 80}
          x2="1600"
          y2={i * 80}
          stroke="rgba(255,255,255,.03)"
        />
      ))}

      {/* Connections */}
      {connections.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="rgba(0,229,255,.12)"
          strokeWidth="1.5"
        />
      ))}

      {/* Sensor Nodes */}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="4" fill="#00e5ff" />

          <circle cx={n.x} cy={n.y} r="4" fill="none" stroke="#00e5ff">
            <animate
              attributeName="r"
              values="4;18;4"
              dur={`${4 + i * 0.2}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="1;0;1"
              dur={`${4 + i * 0.2}s`}
              repeatCount="indefinite"
            />
          </circle>
        </g>
      ))}

      {/* Moving Data Packets */}
      {connections.map(([a, b], i) => (
        <circle key={`packet-${i}`} r="3" fill="#00e5ff">
          <animateMotion
            dur={`${4 + i * 0.5}s`}
            repeatCount="indefinite"
            path={`M ${nodes[a].x} ${nodes[a].y}
                   L ${nodes[b].x} ${nodes[b].y}`}
          />
        </circle>
      ))}
    </svg>
  );
};

const CommandCenterBackdrop = () => {
  const nodes = [
    { x: 180, y: 160 },
    { x: 420, y: 110 },
    { x: 720, y: 220 },
    { x: 1050, y: 140 },
    { x: 1380, y: 190 },

    { x: 260, y: 450 },
    { x: 560, y: 520 },
    { x: 860, y: 430 },
    { x: 1180, y: 510 },
  ];

  const links = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [0, 5],
    [5, 6],
    [6, 7],
    [7, 8],
    [2, 7],
    [3, 8],
  ];

  return (
    <svg
      viewBox="0 0 1600 700"
      preserveAspectRatio="xMidYMid slice"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <defs>
        <linearGradient id="scanBeam">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="50%" stopColor="#00E5FF" stopOpacity="0.25" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>

        <radialGradient id="cloudGlow">
          <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#00E5FF" stopOpacity="0" />
        </radialGradient>

        <filter id="blur">
          <feGaussianBlur stdDeviation="20" />
        </filter>
      </defs>

      {/* Background Grid */}
      {Array.from({ length: 25 }).map((_, i) => (
        <line
          key={`v-${i}`}
          x1={i * 70}
          y1="0"
          x2={i * 70}
          y2="700"
          stroke="rgba(255,255,255,.03)"
        />
      ))}

      {Array.from({ length: 12 }).map((_, i) => (
        <line
          key={`h-${i}`}
          x1="0"
          y1={i * 70}
          x2="1600"
          y2={i * 70}
          stroke="rgba(255,255,255,.03)"
        />
      ))}

      {/* Cloud Glow */}
      <circle
        cx="1280"
        cy="120"
        r="180"
        fill="url(#cloudGlow)"
        filter="url(#blur)"
      >
        <animate
          attributeName="opacity"
          values="0.4;1;0.4"
          dur="6s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Connections */}
      {links.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="rgba(0,229,255,.15)"
          strokeWidth="1.5"
        />
      ))}

      {/* Nodes */}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="4" fill="#00E5FF" />

          <circle cx={n.x} cy={n.y} r="4" fill="none" stroke="#00E5FF">
            <animate
              attributeName="r"
              values="4;22;4"
              dur={`${3 + i * 0.4}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="1;0;1"
              dur={`${3 + i * 0.4}s`}
              repeatCount="indefinite"
            />
          </circle>
        </g>
      ))}

      {/* Data Packets */}
      {links.map(([a, b], i) => (
        <circle key={`packet-${i}`} r="2.5" fill="#00E5FF">
          <animateMotion
            dur={`${4 + i * 0.3}s`}
            repeatCount="indefinite"
            path={`M ${nodes[a].x} ${nodes[a].y}
                   L ${nodes[b].x} ${nodes[b].y}`}
          />
        </circle>
      ))}

      {/* Vertical Scanner */}

      {/* Floating Labels */}
      <g opacity="0.75">
        <text x="220" y="80" fill="#00E5FF" fontSize="12" letterSpacing="2">
          LIVE DATA
        </text>

        <text x="540" y="610" fill="#00E5FF" fontSize="12" letterSpacing="2">
          EDGE ANALYTICS
        </text>

        <text x="980" y="360" fill="#00E5FF" fontSize="12" letterSpacing="2">
          SCADA READY
        </text>

        <text x="1240" y="80" fill="#00E5FF" fontSize="12" letterSpacing="2">
          CLOUD ENABLED
        </text>

        <text x="1320" y="520" fill="#00E5FF" fontSize="12" letterSpacing="2">
          24×7 MONITORING
        </text>
      </g>

      {/* Cloud Icon */}
      <g transform="translate(1230 110)">
        <path
          d="M40 50
             C20 50 10 35 10 22
             C10 10 20 0 35 0
             C42 -15 70 -10 75 10
             C95 10 105 25 105 40
             C105 55 95 65 80 65
             L40 65
             C25 65 15 58 15 50"
          fill="none"
          stroke="#00E5FF"
          strokeWidth="2"
        >
          <animate
            attributeName="opacity"
            values="0.5;1;0.5"
            dur="5s"
            repeatCount="indefinite"
          />
        </path>
      </g>
    </svg>
  );
};
const EnviroDataFlowAnimation = () => {
  return (
    <svg viewBox="0 0 1400 560" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="flowLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.08"></stop>
          <stop offset="50%" stop-color="#06b6d4" stop-opacity="0.7"></stop>
          <stop offset="100%" stop-color="#06b6d4" stop-opacity="0.08"></stop>
        </linearGradient>
        <radialGradient id="nodeGlow">
          <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.35"></stop>
          <stop offset="100%" stop-color="#06b6d4" stop-opacity="0"></stop>
        </radialGradient>
        <filter id="softGlow">
          <feGaussianBlur stdDeviation="6" result="blur"></feGaussianBlur>
        </filter>
      </defs>

      <line
        x1="50"
        y1="250"
        x2="1320"
        y2="250"
        stroke="#334155"
        stroke-width="1"
        opacity="0.2"
      ></line>

      <path
        d="M 230 250 C 260 250, 290 250, 320 250"
        fill="none"
        stroke="url(#flowLine)"
        stroke-width="3"
        opacity="0.45"
      ></path>
      <path
        d="M 450 250 C 470 250, 495 250, 520 250"
        fill="none"
        stroke="url(#flowLine)"
        stroke-width="3"
        opacity="0.45"
      ></path>
      <path
        d="M 660 250 C 760 190, 880 150, 1020 130"
        fill="none"
        stroke="url(#flowLine)"
        stroke-width="3"
        opacity="0.45"
      ></path>
      <path
        d="M 660 250 C 770 250, 900 250, 1020 250"
        fill="none"
        stroke="url(#flowLine)"
        stroke-width="3"
        opacity="0.45"
      ></path>
      <path
        d="M 660 250 C 760 320, 880 390, 1020 410"
        fill="none"
        stroke="url(#flowLine)"
        stroke-width="3"
        opacity="0.45"
      ></path>

      <rect
        x="120"
        y="210"
        width="110"
        height="80"
        rx="18"
        fill="#1e293b"
        stroke="#06b6d4"
        stroke-width="2"
        stroke-opacity="0.4"
      ></rect>
      <text
        x="175"
        y="250"
        text-anchor="middle"
        fill="var(--card)"
        font-size="18"
        font-weight="600"
      >
        Probe
      </text>
      <text x="175" y="270" text-anchor="middle" fill="#94a3b8" font-size="13">
        Raw Data
      </text>

      <rect
        x="320"
        y="200"
        width="130"
        height="100"
        rx="20"
        fill="#1e293b"
        stroke="#06b6d4"
        stroke-width="2"
        stroke-opacity="0.4"
      ></rect>
      <text
        x="385"
        y="245"
        text-anchor="middle"
        fill="var(--card)"
        font-size="18"
        font-weight="600"
      >
        Analyzer
      </text>
      <text x="385" y="265" text-anchor="middle" fill="#94a3b8" font-size="13">
        Processing
      </text>

      <rect
        x="520"
        y="205"
        width="140"
        height="90"
        rx="20"
        fill="#1e293b"
        stroke="#06b6d4"
        stroke-width="2"
        stroke-opacity="0.4"
      ></rect>
      <text
        x="590"
        y="245"
        text-anchor="middle"
        fill="var(--card)"
        font-size="18"
        font-weight="600"
      >
        IoT Device
      </text>
      <text x="590" y="265" text-anchor="middle" fill="#94a3b8" font-size="13">
        Transmitter
      </text>

      <rect
        x="1020"
        y="90"
        width="200"
        height="80"
        rx="18"
        fill="#1e293b"
        stroke="#06b6d4"
        stroke-width="2"
        stroke-opacity="0.4"
      ></rect>
      <text
        x="1120"
        y="130"
        text-anchor="middle"
        fill="var(--card)"
        font-size="18"
        font-weight="600"
      >
        CPCB Server
      </text>
      <text x="1120" y="150" text-anchor="middle" fill="#94a3b8" font-size="13">
        Central Board
      </text>

      <rect
        x="1020"
        y="210"
        width="200"
        height="80"
        rx="18"
        fill="#1e293b"
        stroke="#06b6d4"
        stroke-width="2"
        stroke-opacity="0.4"
      ></rect>
      <text
        x="1120"
        y="250"
        text-anchor="middle"
        fill="var(--card)"
        font-size="18"
        font-weight="600"
      >
        SPCB Server
      </text>
      <text x="1120" y="270" text-anchor="middle" fill="#94a3b8" font-size="13">
        State Board
      </text>

      <rect
        x="1020"
        y="370"
        width="200"
        height="80"
        rx="18"
        fill="#1e293b"
        stroke="#06b6d4"
        stroke-width="2"
        stroke-opacity="0.4"
      ></rect>
      <text
        x="1120"
        y="410"
        text-anchor="middle"
        fill="var(--card)"
        font-size="18"
        font-weight="600"
      >
        Vepolink Enviro
      </text>
      <text x="1120" y="430" text-anchor="middle" fill="#94a3b8" font-size="13">
        Company Dashboard
      </text>

      <circle r="6" fill="#06b6d4" filter="url(#softGlow)">
        <animateMotion
          path="M 230 250 C 260 250, 290 250, 320 250"
          dur="2s"
          repeatCount="indefinite"
        ></animateMotion>
      </circle>
      <circle r="6" fill="#06b6d4" filter="url(#softGlow)">
        <animateMotion
          path="M 450 250 C 470 250, 495 250, 520 250"
          dur="2s"
          repeatCount="indefinite"
        ></animateMotion>
      </circle>
      <circle r="6" fill="#06b6d4" filter="url(#softGlow)">
        <animateMotion
          path="M 660 250 C 760 190, 880 150, 1020 130"
          dur="3s"
          repeatCount="indefinite"
        ></animateMotion>
      </circle>
      <circle r="6" fill="#06b6d4" filter="url(#softGlow)">
        <animateMotion
          path="M 660 250 C 770 250, 900 250, 1020 250"
          dur="3s"
          repeatCount="indefinite"
        ></animateMotion>
      </circle>
      <circle r="6" fill="#06b6d4" filter="url(#softGlow)">
        <animateMotion
          path="M 660 250 C 760 320, 880 390, 1020 410"
          dur="3s"
          repeatCount="indefinite"
        ></animateMotion>
      </circle>
    </svg>
  );
};

const AquaSpectrumBackdrop = () => {
  const scanBars = Array.from({ length: 22 }, (_, i) => ({
    x: 70 + i * 68,
    h: 40 + (i % 6) * 18 + ((i * 7) % 5) * 10,
    d: (i % 8) * 0.32,
  }));

  const droplets = [
    {
      path: "M 180 130 C 260 180, 340 210, 460 220 S 690 210, 820 260 S 1080 350, 1360 320",
      d: 0,
    },
    {
      path: "M 60 360 C 200 330, 360 300, 520 340 S 860 430, 1080 390 S 1340 250, 1510 290",
      d: 1.4,
    },
    {
      path: "M 260 520 C 420 470, 610 500, 790 450 S 1080 300, 1310 180",
      d: 2.3,
    },
  ];

  const sensors = [
    { x: 240, y: 180, d: 0.2 },
    { x: 640, y: 300, d: 1.2 },
    { x: 1040, y: 230, d: 2.2 },
    { x: 1320, y: 420, d: 0.8 },
  ];

  return (
    <>
      <svg
        viewBox="0 0 1600 640"
        preserveAspectRatio="xMidYMid slice"
        style={{
          position: "absolute",
          top: 0,
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 0,
          maskImage:
            "linear-gradient(180deg, black 0%, black 72%, transparent 100%)",
        }}
      >
        {/* soft water contours */}
        <path
          d="M0 250 C180 210, 340 190, 510 230 S850 320, 1080 270 S1380 180, 1600 240 L1600 640 L0 640 Z"
          fill="url(#aquaWave)"
        />
        <path
          d="M0 330 C200 380, 380 360, 560 320 S910 230, 1160 300 S1410 410, 1600 360 L1600 640 L0 640 Z"
          fill="url(#aquaWave)"
          opacity="0.65"
        >
          <animate
            attributeName="d"
            dur="9s"
            repeatCount="indefinite"
            values="
            M0 330 C200 380, 380 360, 560 320 S910 230, 1160 300 S1410 410, 1600 360 L1600 640 L0 640 Z;
            M0 340 C180 300, 390 350, 590 300 S910 260, 1150 320 S1410 390, 1600 340 L1600 640 L0 640 Z;
            M0 330 C200 380, 380 360, 560 320 S910 230, 1160 300 S1410 410, 1600 360 L1600 640 L0 640 Z
          "
          />
        </path>

        {/* spectrograph bars */}
        {scanBars.map((b, i) => (
          <g key={i}>
            <rect
              x={b.x}
              y={560 - b.h}
              width="14"
              height={b.h}
              rx="7"
              fill="url(#specBar)"
              opacity="0.32"
            >
              <animate
                attributeName="height"
                values={`${b.h};${b.h + 24};${b.h}`}
                dur="3.6s"
                begin={`${b.d}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                values={`${560 - b.h};${560 - (b.h + 24)};${560 - b.h}`}
                dur="3.6s"
                begin={`${b.d}s`}
                repeatCount="indefinite"
              />
            </rect>
          </g>
        ))}

        {/* dotted baseline */}
        {Array.from({ length: 28 }, (_, i) => (
          <circle
            key={i}
            cx={50 + i * 56}
            cy="562"
            r="1.4"
            fill="var(--ink-3)"
            opacity="0.18"
          />
        ))}

        {/* flowing droplets / data packets */}
        {droplets.map((item, i) => (
          <g key={i}>
            <path
              d={item.path}
              fill="none"
              stroke="var(--cyan)"
              strokeWidth="1"
              opacity="0.1"
            />
            <circle r="3.5" fill="var(--cyan)" opacity="0.95">
              <animateMotion
                path={item.path}
                dur="5.8s"
                begin={`${item.d}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                dur="5.8s"
                begin={`${item.d}s`}
                repeatCount="indefinite"
              />
            </circle>
            <ellipse rx="10" ry="6" fill="url(#sensorGlow)" opacity="0.6">
              <animateMotion
                path={item.path}
                dur="5.8s"
                begin={`${item.d}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0;0.35;0.2;0"
                dur="5.8s"
                begin={`${item.d}s`}
                repeatCount="indefinite"
              />
            </ellipse>
          </g>
        ))}

        {/* sensor nodes */}
        {sensors.map((s, i) => (
          <g key={i}>
            <circle
              cx={s.x}
              cy={s.y}
              r="16"
              fill="url(#sensorGlow)"
              opacity="0.45"
            />
            <circle cx={s.x} cy={s.y} r="3" fill="var(--cyan)" opacity="0.95" />
            <circle
              cx={s.x}
              cy={s.y}
              r="4"
              fill="none"
              stroke="var(--cyan)"
              strokeWidth="1"
              opacity="0.45"
            >
              <animate
                attributeName="r"
                from="4"
                to="48"
                dur="4.8s"
                begin={`${s.d}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                from="0.45"
                to="0"
                dur="4.8s"
                begin={`${s.d}s`}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        ))}

        {/* vertical scan sweep */}
        <rect
          x="-220"
          y="0"
          width="220"
          height="640"
          fill="url(#aquaWave)"
          opacity="0.16"
        >
          <animate
            attributeName="x"
            from="-220"
            to="1600"
            dur="8.5s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>
    </>
  );
};