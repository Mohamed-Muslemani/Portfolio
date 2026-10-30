// Shared site scripts: scroll reveal, project filtering, header shadow on scroll, tooltips, current year.
(() => {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Scroll reveal ---------- */
  const revealTargets = document.querySelectorAll("[data-reveal]");

  if (revealTargets.length) {
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      revealTargets.forEach((el) => el.classList.add("is-revealed"));
    } else {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-revealed");
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );

      revealTargets.forEach((el, i) => {
        // Stagger items in the same section a touch.
        el.style.setProperty("--reveal-delay", `${Math.min(i * 40, 240)}ms`);
        observer.observe(el);
      });
    }
  }

  /* ---------- Header elevation on scroll ---------- */
  const header = document.querySelector(".site-header");
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 8) {
        header.classList.add("is-scrolled");
      } else {
        header.classList.remove("is-scrolled");
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Project filter chips ---------- */
  const filterChips = document.querySelectorAll(".filter-chip");
  const projectCards = document.querySelectorAll(".project-card[data-categories]");
  const filterEmpty = document.getElementById("filterEmpty");

  if (filterChips.length && projectCards.length) {
    filterChips.forEach((chip) => {
      chip.addEventListener("click", () => {
        const filter = chip.dataset.filter;

        filterChips.forEach((c) => {
          c.classList.toggle("is-active", c === chip);
          c.setAttribute("aria-selected", c === chip ? "true" : "false");
        });

        let visibleCount = 0;
        projectCards.forEach((card) => {
          const categories = (card.dataset.categories || "").split(/\s+/);
          const match = filter === "all" || categories.includes(filter);
          card.toggleAttribute("hidden", !match);
          if (match) visibleCount++;
        });

        if (filterEmpty) {
          filterEmpty.toggleAttribute("hidden", visibleCount > 0);
        }
      });
    });
  }

  /* ---------- Hover tooltips (mouse and trackpad only) ---------- */
  const tooltipTargets = document.querySelectorAll("[data-bs-title]");

  if (tooltipTargets.length && typeof bootstrap !== "undefined" && window.matchMedia("(hover: hover)").matches) {
    tooltipTargets.forEach((el) => {
      // The gallery modal returns focus to its button on close, so focus can't trigger those tooltips.
      const trigger = el.matches("[data-bs-toggle='modal']") ? "hover" : "hover focus";
      const tooltip = new bootstrap.Tooltip(el, { trigger });
      el.addEventListener("click", () => tooltip.hide());
    });
  }

  /* ---------- Current year in footer (optional) ---------- */
  const yearEl = document.querySelector("[data-current-year]");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
