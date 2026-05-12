document.addEventListener("DOMContentLoaded", () => {

  const safe = el => el !== null;

  /* 🔥 TRANSLATIONS FULL */
  const translations = {
    en: {
      nav_home: "Home",
      nav_about: "About",
      nav_services: "Services",
      nav_proof: "Results",
      nav_contact: "Contact",

      hero_title: "Get More Clients. Stop Losing Customers.",
      hero_sub: "I build websites that turn visitors into paying clients.",
      trust: "✔ Fast ✔ Proven ✔ Results",

      about_title: "Why Work With Me",
      about_text: "Most websites look good but don’t bring clients. I focus on results.",
      
      services_title: "What You Get",
      s1: "Get More Clients Online",
      s1d: "High converting websites",
      s2: "Turn Data Into Decisions",
      s2d: "Automation & data",
      s3: "Reach Global Clients",
      s3d: "AR / FR / EN / DE",

      proof_title: "Real Results",

      contact_title: "Start Now",
      exit: "Wait... before you leave 👀"
    },

    fr: {
      nav_home: "Accueil",
      nav_about: "À propos",
      nav_services: "Services",
      nav_proof: "Résultats",
      nav_contact: "Contact",

      hero_title: "Obtenez plus de clients",
      hero_sub: "Je crée des sites qui attirent des clients",
      trust: "✔ Rapide ✔ Résultats ✔ Fiable",

      about_title: "Pourquoi me choisir",
      about_text: "Je crée des sites qui convertissent vraiment.",

      services_title: "Services",
      s1: "Obtenez plus de clients",
      s1d: "Sites optimisés conversion",
      s2: "Analyse de données",
      s2d: "Automatisation & insights",
      s3: "Clients internationaux",
      s3d: "AR / FR / EN / DE",

      proof_title: "Résultats",

      contact_title: "Commencer",
      exit: "Attendez avant de partir 👀"
    },

    ar: {
      nav_home: "الرئيسية",
      nav_about: "من أنا",
      nav_services: "الخدمات",
      nav_proof: "النتائج",
      nav_contact: "تواصل",

      hero_title: "احصل على المزيد من العملاء",
      hero_sub: "أبني مواقع تحول الزوار إلى عملاء",
      trust: "✔ سريع ✔ نتائج ✔ موثوق",

      about_title: "لماذا تختارني",
      about_text: "أنا أركز على النتائج وليس فقط التصميم.",

      services_title: "الخدمات",
      s1: "جلب عملاء أكثر",
      s1d: "مواقع عالية التحويل",
      s2: "تحليل البيانات",
      s2d: "أتمتة ونتائج",
      s3: "عملاء عالميين",
      s3d: "عربي / فرنسي / إنجليزي / ألماني",

      proof_title: "النتائج",

      contact_title: "ابدأ الآن",
      exit: "انتظر قبل أن تغادر 👀"
    },

    de: {
      nav_home: "Startseite",
      nav_about: "Über mich",
      nav_services: "Dienstleistungen",
      nav_proof: "Ergebnisse",
      nav_contact: "Kontakt",

      hero_title: "Mehr Kunden gewinnen",
      hero_sub: "Ich erstelle Websites die Kunden bringen",
      trust: "✔ Schnell ✔ Ergebnisse ✔ Bewährt",

      about_title: "Warum ich",
      about_text: "Ich fokussiere mich auf echte Ergebnisse.",

      services_title: "Services",
      s1: "Mehr Kunden gewinnen",
      s1d: "Conversion Websites",
      s2: "Datenanalyse",
      s2d: "Automatisierung",
      s3: "Globale Kunden",
      s3d: "AR / FR / EN / DE",

      proof_title: "Ergebnisse",

      contact_title: "Jetzt starten",
      exit: "Warte... bevor du gehst 👀"
    }
  };

  /* 🌍 LANGUAGE SWITCH */
  const langSelect = document.getElementById("lang");

  if (safe(langSelect)) {
    langSelect.addEventListener("change", () => {

      const lang = langSelect.value;

      /* HTML lang */
      document.documentElement.lang = lang;

      /* RTL */
      document.body.classList.toggle("rtl", lang === "ar");

      /* APPLY TRANSLATION */
      document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.dataset.key;

        if (translations[lang] && translations[lang][key]) {
          el.textContent = translations[lang][key];
        }
      });

    });
  }

});
