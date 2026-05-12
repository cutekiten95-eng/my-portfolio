document.addEventListener("DOMContentLoaded", () => {

  /* 🔥 Sticky CTA text change */
  const sticky = document.getElementById("stickyCTA");

  window.addEventListener("scroll", () => {
    let y = window.scrollY;

    if (y < 300) sticky.textContent = "Start Now";
    else if (y < 800) sticky.textContent = "Get Offer";
    else sticky.textContent = "Get Clients Now";
  });

  /* 🔔 Fake notifications */
  const notif = document.getElementById("notif");

  setInterval(() => {
    notif.style.display = "block";
    setTimeout(() => notif.style.display = "none", 3000);
  }, 8000);

  /* 😈 Exit popup */
  const popup = document.getElementById("exitPopup");
  const close = document.getElementById("closePopup");

  document.addEventListener("mouseleave", e => {
    if (e.clientY < 10) popup.style.display = "block";
  });

  if (close) {
    close.addEventListener("click", () => {
      popup.style.display = "none";
    });
  }

  /* ⏳ Countdown */
  const countdown = document.getElementById("countdown");
  let time = 3600;

  setInterval(() => {
    time--;
    let m = Math.floor(time / 60);
    let s = time % 60;
    countdown.textContent = `Offer ends in ${m}:${s}`;
  }, 1000);

  /* 🌍 Multi language */
  const translations = {
    en: { hero_title: "Get More Clients" },
    fr: { hero_title: "Obtenez plus de clients" },
    ar: { hero_title: "احصل على المزيد من العملاء" },
    de: { hero_title: "Mehr Kunden gewinnen" }
  };

  const langSelect = document.getElementById("lang");

  if (langSelect) {
    langSelect.addEventListener("change", () => {
      const lang = langSelect.value;
      document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.dataset.key;
        if (translations[lang][key]) {
          el.textContent = translations[lang][key];
        }
      });
    });
  }

});
