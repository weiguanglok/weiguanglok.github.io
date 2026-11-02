(() => {
  "use strict";

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const navigation = document.querySelector(".navigation");
  const menu = document.getElementById("primary-menu");
  const menuToggle = document.querySelector(".menu-toggle");
  const mobile = window.matchMedia("(max-width: 700px)");
  if (navigation && menu && menuToggle) {
    navigation.classList.add("has-menu");
    const closeMenu = (restoreFocus = false) => {
      menu.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "Menu";
      if (restoreFocus) menuToggle.focus();
    };
    const syncMenu = () => {
      menuToggle.hidden = !mobile.matches;
      if (!mobile.matches) closeMenu();
    };
    menuToggle.addEventListener("click", () => {
      const open = menuToggle.getAttribute("aria-expanded") !== "true";
      menu.classList.toggle("is-open", open);
      menuToggle.setAttribute("aria-expanded", String(open));
      menuToggle.textContent = open ? "Close" : "Menu";
    });
    menu.addEventListener("click", (event) => {
      if (event.target.closest("a")) closeMenu();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") closeMenu(true);
    });
    document.addEventListener("click", (event) => {
      if (!navigation.contains(event.target)) closeMenu();
    });
    mobile.addEventListener("change", syncMenu);
    syncMenu();
  }

  const gsap = window.gsap;
  if ("IntersectionObserver" in window) {
    const links = [...document.querySelectorAll(".nav-links a")];
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        for (const link of links) {
          if (link.getAttribute("href") === "#" + entry.target.id) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        }
      }
    }, { rootMargin: "-15% 0px -60% 0px", threshold: 0 });
    document.querySelectorAll("#about, #experience, #projects, #contact").forEach((section) => observer.observe(section));
  }

  if (!gsap) return;
  const media = gsap.matchMedia();
  media.add("(prefers-reduced-motion: no-preference)", (context) => {
    // Visible HTML is the baseline: animations are created only as content enters.
    gsap.fromTo(".hero h1", { y: 18 }, { y: 0, duration: 0.85, ease: "power2.out", clearProps: "transform" });
    gsap.fromTo(".railway-crop img", { scale: 1.06 }, { scale: 1, duration: 1.15, ease: "power2.out", clearProps: "transform" });
    gsap.fromTo(".hero .button", { y: 12 }, { y: 0, duration: 0.7, delay: 0.1, ease: "power2.out", clearProps: "transform" });

    let revealObserver;
    if ("IntersectionObserver" in window) {
      revealObserver = new IntersectionObserver(mediaContextSafe((entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        visible.forEach((entry, index) => {
          gsap.fromTo(entry.target, { y: 22, autoAlpha: 0.55 }, {
            y: 0, autoAlpha: 1, duration: 0.65, delay: Math.min(index, 3) * 0.07,
            ease: "power2.out", clearProps: "transform,opacity,visibility"
          });
          revealObserver.unobserve(entry.target);
        });
      }), { threshold: 0.08, rootMargin: "0px 0px -24px 0px" });
      document.querySelectorAll("[data-reveal]").forEach((element) => revealObserver.observe(element));
    }

    const topics = [...document.querySelectorAll(".game-walkthrough details")];
    const onToggle = mediaContextSafe((event) => {
      const content = event.currentTarget.querySelector(".topic-content");
      gsap.killTweensOf(content);
      gsap.set(content, { clearProps: "transform,opacity,visibility" });
      if (event.currentTarget.open) gsap.fromTo(content, { y: 10, autoAlpha: 0.6 }, {
        y: 0, autoAlpha: 1, duration: 0.3, ease: "power2.out", overwrite: "auto",
        clearProps: "transform,opacity,visibility"
      });
    });
    topics.forEach((topic) => topic.addEventListener("toggle", onToggle));
    return () => {
      if (revealObserver) revealObserver.disconnect();
      topics.forEach((topic) => topic.removeEventListener("toggle", onToggle));
      gsap.set("[data-reveal], .hero h1, .hero .button, .railway-crop img", { clearProps: "transform,opacity,visibility" });
    };

    function mediaContextSafe(callback) {
      return context.add(null, callback);
    }
  });
})();
