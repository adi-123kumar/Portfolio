import { useEffect, useRef } from 'react';

// Canvas starfield background. Pure canvas (no extra dependency), drifts
// slowly and twinkles. Respects prefers-reduced-motion by rendering a single
// static frame instead of animating.
export default function StarField({ density = 90, className = '' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let stars = [];
    let width, height;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function resize() {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      initStars();
    }

    function initStars() {
      stars = Array.from({ length: density }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.4 + 0.3,
        vx: (Math.random() * 0.15 + 0.03) * (Math.random() < 0.5 ? -1 : 1),
        vy: (Math.random() - 0.5) * 0.05,
        twinkleSpeed: Math.random() * 0.002 + 0.0008,
        twinklePhase: Math.random() * Math.PI * 2,
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      const now = Date.now();
      stars.forEach((s) => {
        if (!prefersReducedMotion) {
          s.x += s.vx;
          s.y += s.vy;
          if (s.x < -5) s.x = width + 5;
          if (s.x > width + 5) s.x = -5;
          if (s.y < -5) s.y = height + 5;
          if (s.y > height + 5) s.y = -5;
        }
        const twinkle = prefersReducedMotion
          ? 0.6
          : 0.4 + Math.sin(now * s.twinkleSpeed + s.twinklePhase) * 0.3 + 0.3;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(94, 234, 212, ${twinkle})`; // matches dark-mode accent
        ctx.fill();
      });
      if (!prefersReducedMotion) {
        animationId = requestAnimationFrame(draw);
      }
    }

    resize();
    draw();
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}