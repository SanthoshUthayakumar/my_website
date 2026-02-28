import { useEffect, useRef, useCallback } from "react";
import "./ElectricBorder.css";

const ElectricBorder = ({
  children,
  color = "#5227FF",
  speed = 1,
  chaos = 0.12,
  borderRadius = 24,
  className,
  style
}) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const timeRef = useRef(0);
  const lastFrameTimeRef = useRef(0);

  /* -------------------- Noise -------------------- */

  const random = useCallback(x => {
    return (Math.sin(x * 12.9898) * 43758.5453) % 1;
  }, []);

  const noise2D = useCallback(
    (x, y) => {
      const i = Math.floor(x);
      const j = Math.floor(y);
      const fx = x - i;
      const fy = y - j;

      const a = random(i + j * 57);
      const b = random(i + 1 + j * 57);
      const c = random(i + (j + 1) * 57);
      const d = random(i + 1 + (j + 1) * 57);

      const ux = fx * fx * (3 - 2 * fx);
      const uy = fy * fy * (3 - 2 * fy);

      return (
        a * (1 - ux) * (1 - uy) +
        b * ux * (1 - uy) +
        c * (1 - ux) * uy +
        d * ux * uy
      );
    },
    [random]
  );

  const octavedNoise = useCallback(
    (x, octaves, lacunarity, gain, amplitude, frequency, time, seed) => {
      let y = 0;
      let amp = amplitude;
      let freq = frequency;

      for (let i = 0; i < octaves; i++) {
        y += amp * noise2D(freq * x + seed * 100, time * freq * 0.3);
        freq *= lacunarity;
        amp *= gain;
      }

      return y;
    },
    [noise2D]
  );

  /* -------------------- Border Math -------------------- */

  const getRoundedRectPoint = useCallback((t, w, h, r) => {
    const straightW = w - 2 * r;
    const straightH = h - 2 * r;
    const cornerArc = (Math.PI * r) / 2;
    const total =
      2 * straightW + 2 * straightH + 4 * cornerArc;

    const dist = t * total;
    let acc = 0;

    // Top
    if (dist <= acc + straightW)
      return { x: r + dist, y: 0 };
    acc += straightW;

    // Top Right
    if (dist <= acc + cornerArc) {
      const p = (dist - acc) / cornerArc;
      const angle = -Math.PI / 2 + p * (Math.PI / 2);
      return {
        x: w - r + r * Math.cos(angle),
        y: r + r * Math.sin(angle)
      };
    }
    acc += cornerArc;

    // Right
    if (dist <= acc + straightH)
      return { x: w, y: r + (dist - acc) };
    acc += straightH;

    // Bottom Right
    if (dist <= acc + cornerArc) {
      const p = (dist - acc) / cornerArc;
      const angle = p * (Math.PI / 2);
      return {
        x: w - r + r * Math.cos(angle),
        y: h - r + r * Math.sin(angle)
      };
    }
    acc += cornerArc;

    // Bottom
    if (dist <= acc + straightW)
      return { x: w - r - (dist - acc), y: h };
    acc += straightW;

    // Bottom Left
    if (dist <= acc + cornerArc) {
      const p = (dist - acc) / cornerArc;
      const angle = Math.PI / 2 + p * (Math.PI / 2);
      return {
        x: r + r * Math.cos(angle),
        y: h - r + r * Math.sin(angle)
      };
    }
    acc += cornerArc;

    // Left
    return { x: 0, y: h - r - (dist - acc) };
  }, []);

  /* -------------------- Effect -------------------- */

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let scale = 0;

    const displacementFactor = 0.09;

    const updateSize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = rect.width;
      height = rect.height;

      scale = Math.min(width, height) * displacementFactor;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    updateSize();

    const draw = time => {
      const dt = (time - lastFrameTimeRef.current) / 1000;
      timeRef.current += dt * speed;
      lastFrameTimeRef.current = time;

      ctx.clearRect(0, 0, width, height);

      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      const radius = Math.min(borderRadius, width / 2, height / 2);
      const perimeter = 2 * (width + height);
      const samples = Math.floor(perimeter / 3);

      ctx.beginPath();

      for (let i = 0; i <= samples; i++) {
        const t = i / samples;
        const p = getRoundedRectPoint(t, width, height, radius);

        const nx = octavedNoise(
          t * 8,
          8,
          1.6,
          0.7,
          chaos,
          10,
          timeRef.current,
          0
        );

        const ny = octavedNoise(
          t * 8,
          8,
          1.6,
          0.7,
          chaos,
          10,
          timeRef.current,
          1
        );

        const x = p.x + nx * scale;
        const y = p.y + ny * scale;

        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      ctx.closePath();
      ctx.stroke();

      animationRef.current = requestAnimationFrame(draw);
    };

    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(container);

    animationRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationRef.current);
      resizeObserver.disconnect();
    };
  }, [color, speed, chaos, borderRadius, octavedNoise, getRoundedRectPoint]);

  return (
    <div
      ref={containerRef}
      className={`electric-border ${className ?? ""}`}
      style={{ position: "relative", ...style }}
    >
      <canvas
        ref={canvasRef}
        className="eb-canvas"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none"
        }}
      />
      <div style={{ position: "relative", zIndex: 2 }}>
        {children}
      </div>
    </div>
  );
};

export default ElectricBorder;