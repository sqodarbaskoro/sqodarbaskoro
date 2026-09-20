/**
 * @file script.js
 * @description Seismic-trace atmosphere animation and interaction polish
 * @author Sri Yanto Qodarbaskoro
 * @contact sqodarbaskoro@gmail.com
 * @linkedin https://www.linkedin.com/in/sqodarbaskoro/
 * @created 2026-09-20
 * @modified 2026-09-20
 * @version 1.0.0
 * @copyright © 2025 Sri Yanto Qodarbaskoro
 */

(() => {
  const canvas = document.getElementById("trace-canvas");
  if (!canvas) {
    return;
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (reduceMotion.matches) {
    return;
  }

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return;
  }

  let width = 0;
  let height = 0;
  let rafId = 0;
  let start = performance.now();

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const drawTrace = (t, yBase, amplitude, frequency, alpha, phase) => {
    ctx.beginPath();
    for (let x = 0; x <= width; x += 3) {
      const nx = x / width;
      const pulse =
        Math.sin(nx * Math.PI * frequency + t * 0.0012 + phase) *
        Math.exp(-Math.pow((nx - (0.35 + 0.2 * Math.sin(t * 0.00025 + phase))) * 3.2, 2));
      const noise = Math.sin(nx * 40 + t * 0.002 + phase) * 0.08;
      const y = yBase + (pulse + noise) * amplitude;
      if (x === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.strokeStyle = `rgba(46, 196, 182, ${alpha})`;
    ctx.lineWidth = 1.25;
    ctx.stroke();
  };

  const frame = (now) => {
    const t = now - start;
    ctx.clearRect(0, 0, width, height);

    const bands = [
      { y: height * 0.18, amp: 28, freq: 8, alpha: 0.22, phase: 0.2 },
      { y: height * 0.32, amp: 42, freq: 11, alpha: 0.3, phase: 1.1 },
      { y: height * 0.48, amp: 34, freq: 9, alpha: 0.18, phase: 2.4 },
      { y: height * 0.64, amp: 22, freq: 13, alpha: 0.14, phase: 0.7 },
    ];

    for (const band of bands) {
      drawTrace(t, band.y, band.amp, band.freq, band.alpha, band.phase);
    }

    rafId = window.requestAnimationFrame(frame);
  };

  resize();
  window.addEventListener("resize", resize, { passive: true });
  rafId = window.requestAnimationFrame(frame);

  reduceMotion.addEventListener("change", (event) => {
    if (event.matches) {
      window.cancelAnimationFrame(rafId);
      ctx.clearRect(0, 0, width, height);
    } else {
      start = performance.now();
      rafId = window.requestAnimationFrame(frame);
    }
  });
})();
