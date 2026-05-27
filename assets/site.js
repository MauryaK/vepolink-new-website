(() => {
  const header = document.querySelector("[data-header]");
  let ticking = false;

  const syncHeader = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 12);
    ticking = false;
  };

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
