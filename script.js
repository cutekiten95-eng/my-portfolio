// =======================
// 🔥 INIT
// =======================
document.addEventListener("DOMContentLoaded", () => {

  // =======================
  // 🔥 LOADER
  // =======================
  const loader = document.getElementById("loader");
  if (loader) {
    setTimeout(() => {
      loader.style.opacity = "0";
      setTimeout(() => {
        loader.style.display = "none";
      }, 500);
    }, 800);
  }

  // =======================
  // ✨ SCROLL ANIMATION
  // =======================
  const fades = document.querySelectorAll(".fade");

  function reveal() {
    fades.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        el.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", reveal);
  reveal();

  // =======================
  // 😈 EXIT POPUP (محسن)
  // =======================
  let popupShown = false;
  const popup = document.getElementById("popup");

  document.addEventListener("mouseout", (e) => {
    if (!popupShown && e.clientY <= 0 && popup) {
      setTimeout(() => {
        popup.style.display = "block";
      }, 300);
      popupShown = true;
    }
  });

  if (popup) {
    popup.addEventListener("click", (e) => {
      if (e.target.id === "popup") {
        closePopup();
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closePopup();
    }
  });

  // =======================
  // 🌍 LOAD LANGUAGE
  // =======================
  const savedLang = localStorage.getItem("lang") || "en";
  setLang(savedLang);
});


// =======================
// 📦 PROJECT MODAL
// =======================
function openModal(){
  const modal = document.getElementById("modal");
  if(modal) modal.style.display = "block";
}

function closeModal(){
  const modal = document.getElementById("modal");
  if(modal) modal.style.display = "none";
}


// =======================
// 🧠 SERVICE MODAL
// =======================
function openService(type){
  const data = {
    web: "Custom websites built to convert visitors into real clients.",
    python: "Automation tools that save time and increase efficiency.",
    data: "Clean, structured, and reliable data ready for real decisions.",
    translate: "Professional translation (AR / FR / EN / DE)."
  };

  const text = data[type] || "Service details coming soon.";

  const el = document.getElementById("serviceText");
  const modal = document.getElementById("serviceModal");

  if(el) el.innerText = text;
  if(modal) modal.style.display = "block";
}

function closeService(){
  const modal = document.getElementById("serviceModal");
  if(modal) modal.style.display = "none";
}


// =======================
// ❌ CLOSE POPUP
// =======================
function closePopup(){
  const popup = document.getElementById("popup");
  if(popup){
    popup.style.display = "none";
  }
}


// =======================
// 🌍 TRANSLATIONS (كاملة)
// =======================
const translations = {

  en: {
    navHome:"Home",
    navServices:"Services",
    navProjects:"Projects",
    navContact:"Contact",

    title:"Get more clients with a website built to convert",
    desc:"No templates. No guesswork. Just real results.",

    cta1:"Start Your Project",
    cta2:"See Work",

    servicesTitle:"Services",
    projectsTitle:"Projects",

    contactTitle:"Ready to get more clients?",
    contactDesc:"If you're serious about results, let's build something that works.",
    contactBtn:"Start Now",

    popupTitle:"Wait… before you leave",
    popupDesc:"Most visitors leave without taking action.",
    popupBtn:"Start Now",

    sticky:"Start"
  },

  fr: {
    navHome:"Accueil",
    navServices:"Services",
    navProjects:"Projets",
    navContact:"Contact",

    title:"Obtenez plus de clients avec un site performant",
    desc:"Pas de modèles. Juste des résultats.",

    cta1:"Démarrer",
    cta2:"Voir",

    servicesTitle:"Services",
    projectsTitle:"Projets",

    contactTitle:"Prêt à obtenir plus de clients?",
    contactDesc:"Construisons quelque chose de puissant.",
    contactBtn:"Commencer",

    popupTitle:"Attendez…",
    popupDesc:"Ne partez pas sans agir.",
    popupBtn:"Commencer",

    sticky:"Start"
  },

  ar: {
    navHome:"الرئيسية",
    navServices:"الخدمات",
    navProjects:"المشاريع",
    navContact:"تواصل",

    title:"احصل على عملاء أكثر بموقع احترافي",
    desc:"بدون قوالب. فقط نتائج حقيقية.",

    cta1:"ابدأ الآن",
    cta2:"شاهد الأعمال",

    servicesTitle:"الخدمات",
    projectsTitle:"المشاريع",

    contactTitle:"جاهز للحصول على عملاء؟",
    contactDesc:"لنصنع شيئاً يعمل فعلاً.",
    contactBtn:"ابدأ الآن",

    popupTitle:"انتظر…",
    popupDesc:"لا تغادر بدون خطوة.",
    popupBtn:"ابدأ الآن",

    sticky:"ابدأ"
  },

  de: {
    navHome:"Start",
    navServices:"Services",
    navProjects:"Projekte",
    navContact:"Kontakt",

    title:"Mehr Kunden mit einer starken Website",
    desc:"Keine Vorlagen. Nur Ergebnisse.",

    cta1:"Starten",
    cta2:"Ansehen",

    servicesTitle:"Dienstleistungen",
    projectsTitle:"Projekte",

    contactTitle:"Bereit für mehr Kunden?",
    contactDesc:"Lass uns etwas Starkes bauen.",
    contactBtn:"Starten",

    popupTitle:"Warte…",
    popupDesc:"Geh nicht ohne Aktion.",
    popupBtn:"Starten",

    sticky:"Start"
  }

};


// =======================
// 🔁 CHANGE LANGUAGE
// =======================
function setLang(lang){
  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");

    if (translations[lang] && translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });

  document.body.style.direction = (lang === "ar") ? "rtl" : "ltr";
}
