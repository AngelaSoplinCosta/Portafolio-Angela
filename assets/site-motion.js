/* Angela Soplín · Movimiento editorial compartido
 * Curiosidad: revelar · Análisis: dar secuencia · Empatía: no distraer.
 * Entrada al bajar y al subir. Sin librerías externas.
 */
(() => {
  "use strict";

  const root = document.documentElement;
  const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
  const selectors = [
    ".projects-heading",
    "main .case-hero",
    "main .page-intro",
    "main .brand-case-highlight",
    "main .case-snapshot",
    "main .story",
    "main .pixel-story-interlude",
    "main .about-brand-intro",
    "main .about-grid",
    "main .about-path-heading",
    "main .about-path-steps > article",
    "main .statement-inner",
    "main .contact-intro",
    "main .contact-links",
    ".case-footer-top"
  ];

  const targets = [...new Set(document.querySelectorAll(
    ["[data-reveal]", ...selectors].join(",")
  ))];
  const videos = [...document.querySelectorAll(".pixel-signature video")];

  targets.forEach((target) => {
    target.setAttribute("data-reveal", "");
  });

  let enterObserver = null;
  let exitObserver = null;
  let lastScrollY = window.scrollY;
  let scrollFramePending = false;

  window.addEventListener("scroll", () => {
    if (scrollFramePending) return;
    scrollFramePending = true;
    window.requestAnimationFrame(() => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      if (Math.abs(delta) >= 4) {
        root.dataset.scrollDirection = delta < 0 ? "up" : "down";
        lastScrollY = currentScrollY;
      }
      scrollFramePending = false;
    });
  }, { passive: true });

  document.addEventListener("focusin", (event) => {
    const section = event.target.closest?.("[data-reveal]");
    if (section) section.classList.add("is-visible");
  });

  const syncVideos = () => {
    videos.forEach((video) => {
      if (motionPreference.matches || document.hidden) {
        video.pause();
      } else {
        video.play().catch(() => {});
      }
    });
  };

  const setup = () => {
    enterObserver?.disconnect();
    exitObserver?.disconnect();

    const supported = !motionPreference.matches && "IntersectionObserver" in window;
    if (!supported) {
      root.classList.remove("motion-ready");
      targets.forEach((target) => target.classList.add("is-visible"));
      syncVideos();
      return;
    }

    const viewportHeight = window.innerHeight;
    targets.forEach((target) => {
      const bounds = target.getBoundingClientRect();
      const visible = bounds.bottom > 0 && bounds.top < viewportHeight;
      target.classList.toggle("is-visible", visible);
    });

    enterObserver = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) target.classList.add("is-visible");
      });
    }, { threshold: 0, rootMargin: "-6% 0px -6% 0px" });

    // Rearma la animación únicamente cuando la sección haya salido
    // por completo de pantalla, con margen para evitar parpadeos.
    exitObserver = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting && !target.contains(document.activeElement)) {
          target.classList.remove("is-visible");
        }
      });
    }, { threshold: 0, rootMargin: "17% 0px 17% 0px" });

    targets.forEach((target) => {
      enterObserver.observe(target);
      exitObserver.observe(target);
    });
    root.classList.add("motion-ready");
    syncVideos();
  };

  setup();
  document.addEventListener("visibilitychange", syncVideos);
  if (typeof motionPreference.addEventListener === "function") {
    motionPreference.addEventListener("change", setup);
  } else if (typeof motionPreference.addListener === "function") {
    motionPreference.addListener(setup);
  }
})();
