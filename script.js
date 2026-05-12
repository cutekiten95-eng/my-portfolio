document.addEventListener("DOMContentLoaded", () => {

  const safe = el => el !== null;

  /* Sticky CTA */
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

  /* Notifications */
  const notif = document.getElementById("notif");
  if (safe(notif)) {
    const messages = [
      "Someone just booked 🔥",
      "New client joined",
      "Order received ⚡"
    ];

    setInterval(() => {
      notif.textContent =
        messages[Math.floor(Math.random()*messages.length)];
      notif.style.display = "block";

      setTimeout(() => notif.style.display = "none", 3000);

    }, 7000);
  }

  /* Exit popup */
  const popup = document.getElementById("exitPopup");
  const close = document.getElementById("closePopup");
  let shown = false;

  if (safe(popup)) {
    document.addEventListener("mouseleave", e => {
      if (e.clientY < 10 && !shown) {
        popup.style.display = "block";
        shown = true;
      }
    });
  }

  if (safe(close)) {
    close.addEventListener("click", () => {
      popup.style.display = "none";
    });
  }

  /* Multi-language FULL */
  const translations = {
    en: {
      hero_title:"Get More Clients. Stop Losing Money.",
      hero_sub:"I build websites that bring you real clients.",
      nav_home:"Home", nav_about:"About", nav_services:"Services",
      nav_proof:"Results", nav_contact:"Contact",
      about_title:"About Me",
      about_text:"I help businesses grow with high-converting websites.",
      services_title:"Services",
      proof_title:"Results",
      contact_title:"Contact",
      exit:"Wait... before you leave 👀",
      trust:"✔ Fast ✔ Results ✔ Proven"
    },
    fr: {
      hero_title:"Obtenez plus de clients",
      hero_sub:"Je crée des sites qui génèrent des clients"
    },
    ar: {
      hero_title:"احصل على المزيد من العملاء",
      hero_sub:"أبني مواقع تجلب لك عملاء حقيقيين"
    },
    de: {
      hero_title:"Mehr Kunden gewinnen",
      hero_sub:"Ich erstelle Websites, die Kunden bringen"
    }
  };

  const lang = document.getElementById("lang");

  if (safe(lang)) {
    lang.addEventListener("change", () => {
      const l = lang.value;

      document.body.classList.toggle("rtl", l === "ar");

      document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.dataset.key;
        if (translations[l] && translations[l][key]) {
          el.textContent = translations[l][key];
        }
      });
    });
  }

});
