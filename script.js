document.addEventListener("DOMContentLoaded", () => {

  const safe = el => el !== null;

  /* 🔥 SCROLL ANIMATION */
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(sec => observer.observe(sec));

  /* 🎯 STICKY CTA */
  const sticky = document.getElementById("stickyCTA");

  if (safe(sticky)) {
    window.addEventListener("scroll", () => {
      const y = window.scrollY;

      sticky.textContent =
        y < 300 ? "Start Now" :
        y < 800 ? "Get Offer" :
        "Get Clients Now";
    });
  }

  /* 🔔 NOTIFICATIONS */
  const notif = document.getElementById("notif");

  if (safe(notif)) {
    const messages = [
      "Someone just booked 🔥",
      "New client joined",
      "Order received ⚡",
      "Client got results today"
    ];

    setInterval(() => {
      const msg = messages[Math.floor(Math.random()*messages.length)];
      notif.textContent = msg;
      notif.style.display = "block";

      setTimeout(() => {
        notif.style.display = "none";
      }, 3000);

    }, 6000);
  }

  /* 😈 EXIT POPUP */
  const popup = document.getElementById("exitPopup");
  const close = document.getElementById("closePopup");
  let shown = false;

  if (safe(popup)) {
    document.addEventListener("mouseleave", e => {
      if (e.clientY < 10 && !shown) {
        popup.style.display = "flex";
        shown = true;
      }
    });
  }

  if (safe(close)) {
    close.addEventListener("click", () => {
      popup.style.display = "none";
    });
  }

  /* 🌍 MULTI LANGUAGE */
  const translations = {
    ar: {
      hero_title: "احصل على المزيد من العملاء",
      hero_sub: "أبني مواقع تجلب لك عملاء حقيقيين"
    },
    fr: {
      hero_title: "Obtenez plus de clients",
      hero_sub: "Sites qui génèrent des clients"
    },
    de: {
      hero_title: "Mehr Kunden gewinnen",
      hero_sub: "Websites die Kunden bringen"
    }
  };

  const lang = document.getElementById("lang");

  if (safe(lang)) {
    lang.addEventListener("change", () => {
      const l = lang.value;

      document.body.classList.toggle("rtl", l === "ar");
      document.documentElement.lang = l;

      document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.dataset.key;
        if (translations[l] && translations[l][key]) {
          el.textContent = translations[l][key];
        }
      });
    });
  }

});
