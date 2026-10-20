const canvas = document.getElementById("cyber-particles");
const main = document.querySelector(".login-main");

if (canvas && main) {
  const ctx = canvas.getContext("2d");

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  let width = 0;
  let height = 0;
  let particles = [];
  let animationId = null;

  function resizeCanvas() {
    const rect = main.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    width = rect.width;
    height = rect.height;

    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.min(
      140,
      Math.max(45, Math.floor(width / 8))
    );

    particles = Array.from({ length: count }, () => {
      // Concentra más partículas en el lado izquierdo.
      const leftSide = Math.random() < 0.75;

      return {
        x: leftSide
          ? Math.random() * width * 0.65
          : Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.5 + 0.6
      };
    });
  }

  function drawParticles(animate = true) {
    ctx.clearRect(0, 0, width, height);

    // Mueve los puntos suavemente.
    for (const p of particles) {
      if (animate) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(100, 190, 255, 0.8)";
      ctx.shadowBlur = 7;
      ctx.shadowColor = "#1389ef";
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    // Conecta los puntos cercanos.
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i];
        const b = particles[j];

        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const distance = Math.hypot(dx, dy);

        if (distance < 100) {
          const opacity = (1 - distance / 100) * 0.3;

          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(19, 137, 239, ${opacity})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }
    }

    if (animate && !reduceMotion.matches) {
      animationId = requestAnimationFrame(() => drawParticles(true));
    }
  }

  function startAnimation() {
    cancelAnimationFrame(animationId);
    resizeCanvas();

    drawParticles(!reduceMotion.matches);
  }

  startAnimation();

  window.addEventListener("resize", startAnimation);

  reduceMotion.addEventListener("change", startAnimation);
}