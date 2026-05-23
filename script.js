document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     🌍 LANGUAGE SYSTEM
  ========================== */

  const translations = {
    en: {
      hero_title: "I Build Websites That Get Clients",
      hero_sub: "Fast, clean, modern websites that convert visitors into clients"
    },
    fr: {
      hero_title: "Je crée des sites qui attirent des clients",
      hero_sub: "Sites rapides et efficaces qui convertissent"
    },
    ar: {
      hero_title: "أبني مواقع تجلب العملاء",
      hero_sub: "مواقع سريعة وتحول الزوار إلى عملاء"
    }
  };

  const langSelect = document.getElementById("lang");

  const applyLanguage = (lang) => {
    document.querySelectorAll("[data-key]").forEach(el => {
      const key = el.dataset.key;
      const value = translations?.[lang]?.[key];
      if (value) el.textContent = value;
    });
  };

  if (langSelect) {
    langSelect.addEventListener("change", e => applyLanguage(e.target.value));
    applyLanguage(langSelect.value);
  }

  /* =========================
     👀 STORY SCROLL (APPLE STYLE)
  ========================== */

  const revealElements = document.querySelectorAll(".fade");

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  revealElements.forEach(el => revealObserver.observe(el));

  /* =========================
     📩 FORM HANDLING
  ========================== */

  const form = document.querySelector("form");
  const notif = document.getElementById("notif");

  const showNotif = (msg) => {
    if (!notif) return;
    notif.textContent = msg;
    notif.style.display = "block";

    setTimeout(() => {
      notif.style.display = "none";
    }, 2500);
  };

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const inputs = form.querySelectorAll("input, textarea");
      const isValid = [...inputs].every(i => i.value.trim());

      showNotif(
        isValid
          ? "Message sent 🚀"
          : "Fill all fields ⚠️"
      );

      if (isValid) form.reset();
    });
  }

  /* =========================
     🧲 SMART STICKY CTA
  ========================== */

  const stickyCTA = document.getElementById("stickyCTA");
  const contactSection = document.getElementById("contact");

  if (stickyCTA) {
    window.addEventListener("scroll", () => {
      stickyCTA.style.display = window.scrollY > 300 ? "block" : "none";
    });

    if (contactSection) {
      const ctaObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          stickyCTA.style.opacity = entry.isIntersecting ? "0" : "1";
        });
      }, { threshold: 0.6 });

      ctaObserver.observe(contactSection);
    }
  }

  /* =========================
     👻 EXIT INTENT POPUP
  ========================== */

  const exitPopup = document.getElementById("exitPopup");
  let exitShown = false;

  document.addEventListener("mouseout", (e) => {
    if (e.clientY <= 0 && !exitShown && exitPopup) {
      exitPopup.style.display = "flex";
      exitShown = true;
    }
  });

  /* =========================
     🧭 SCROLL PROGRESS BAR
  ========================== */

  const progressBar = document.createElement("div");
  Object.assign(progressBar.style, {
    position: "fixed",
    top: "0",
    left: "0",
    height: "3px",
    width: "0%",
    background: "#ff4ecd",
    zIndex: "9999"
  });

  document.body.appendChild(progressBar);

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const percent = (scrollTop / docHeight) * 100;

    progressBar.style.width = percent + "%";
  });

  /* =========================
     💰 LIVE LEADS COUNTER
  ========================== */

  let leads = 12;

  setInterval(() => {
    leads++;

    showNotif(`🔥 ${leads} people contacted you today`);
  }, 12000);

});
const sections = document.querySelectorAll(".story-section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, {
  threshold: 0.5
});

sections.forEach(sec => observer.observe(sec));
