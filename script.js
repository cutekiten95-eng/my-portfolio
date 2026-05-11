// 🌍 LANG DATA
const translations = {
  en: {
    title: "Your website shouldn’t just exist — it should bring clients",
    desc: "High-performance websites & tools built to attract and convert.",
    cta: "Start Your Project",
    services: "Services"
  },

  fr: {
    title: "Votre site ne doit pas juste exister — il doit attirer des clients",
    desc: "Sites et outils performants conçus pour attirer et convertir.",
    cta: "Démarrer votre projet",
    services: "Services"
  },

  ar: {
    title: "موقعك لا يجب أن يكون مجرد شكل — بل يجب أن يجلب عملاء",
    desc: "مواقع وأدوات قوية لجذب وتحويل الزوار إلى عملاء.",
    cta: "ابدأ مشروعك",
    services: "الخدمات"
  },

  de: {
    title: "Deine Website sollte nicht nur existieren — sie sollte Kunden bringen",
    desc: "Leistungsstarke Websites und Tools, die konvertieren.",
    cta: "Projekt starten",
    services: "Dienstleistungen"
  }
};


// 🔥 CHANGE LANGUAGE
function setLang(lang){
  const elements = document.querySelectorAll("[data-key]");

  elements.forEach(el => {
    const key = el.getAttribute("data-key");
    el.innerText = translations[lang][key];
  });

  // اتجاه العربية
  if(lang === "ar"){
    document.body.style.direction = "rtl";
  } else {
    document.body.style.direction = "ltr";
  }
}
