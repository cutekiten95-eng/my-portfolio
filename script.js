// =======================
// 🔥 LOADER (يختافي تلقائياً)
// =======================
document.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById("loader");

  if (loader) {
    setTimeout(() => {
      loader.style.opacity = "0";
      setTimeout(() => {
        loader.style.display = "none";
      }, 500);
    }, 800);
  }
});


// =======================
// ✨ SCROLL ANIMATION
// =======================
const fades = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  fades.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});


// =======================
// 📦 PROJECT MODAL
// =======================
function openModal(){
  document.getElementById("modal").style.display = "block";
}

function closeModal(){
  document.getElementById("modal").style.display = "none";
}


// =======================
// 🧠 SERVICE MODAL
// =======================
function openService(type){
  const data = {
    web: "Custom websites built to convert visitors into real clients.",
    python: "Automation tools that save time and increase efficiency.",
    data: "Clean, structured, and reliable data ready for real decisions.",
    translate: "Professional translation (Arabic / French / English / German)."
  };

  document.getElementById("serviceText").innerText = data[type];
  document.getElementById("serviceModal").style.display = "block";
}

function closeService(){
  document.getElementById("serviceModal").style.display = "none";
}


// =======================
// 😈 EXIT POPUP (يحبس الكليان)
// =======================
let popupShown = false;

document.addEventListener("mouseout", (e) => {
  if (!popupShown && e.clientY <= 0) {
    document.getElementById("popup").style.display = "block";
    popupShown = true;
  }
});


// =======================
// 🌍 MULTI-LANGUAGE SYSTEM (PRO)
// =======================
const translations = {

  en: {
    title: "Your website shouldn’t just exist — it should bring clients",
    desc: "High-performance websites & tools built to attract, build trust, and convert.",
    cta1: "Start Your Project",
    cta2: "See Work",
    servicesTitle: "Services",
    projectsTitle: "Projects",
    contactTitle: "Let’s Build Something Powerful",
    contactDesc: "If you're serious about results — I'm ready.",
    contactBtn: "Contact Me Now",
    popupTitle: "Wait… don’t leave yet",
    popupDesc: "You’re one step away from a better website.",
    popupBtn: "Start Now",
    sticky: "Start"
  },

  fr: {
    title: "Votre site ne doit pas juste exister — il doit attirer des clients",
    desc: "Sites et outils performants conçus pour attirer, convaincre et convertir.",
    cta1: "Démarrer votre projet",
    cta2: "Voir les projets",
    servicesTitle: "Services",
    projectsTitle: "Projets",
    contactTitle: "Construisons quelque chose de puissant",
    contactDesc: "Si vous voulez des résultats — je suis prêt.",
    contactBtn: "Contactez-moi",
    popupTitle: "Attendez… ne partez pas",
    popupDesc: "Vous êtes à un pas d’un meilleur site.",
    popupBtn: "Commencer",
    sticky: "Start"
  },

  ar: {
    title: "موقعك لا يجب أن يكون مجرد شكل — بل يجب أن يجلب عملاء",
    desc: "مواقع وأدوات قوية مصممة لجذب الزوار وتحويلهم إلى عملاء.",
    cta1: "ابدأ مشروعك",
    cta2: "شاهد الأعمال",
    servicesTitle: "الخدمات",
    projectsTitle: "المشاريع",
    contactTitle: "لنصنع شيئاً قوياً",
    contactDesc: "إذا كنت تريد نتائج حقيقية — أنا جاهز.",
    contactBtn: "تواصل معي الآن",
    popupTitle: "انتظر… لا تغادر",
    popupDesc: "أنت على بعد خطوة من موقع أفضل.",
    popupBtn: "ابدأ الآن",
    sticky: "ابدأ"
  },

  de: {
    title: "Deine Website sollte nicht nur existieren — sie sollte Kunden bringen",
    desc: "Leistungsstarke Websites und Tools, die Aufmerksamkeit erzeugen und konvertieren.",
    cta1: "Projekt starten",
    cta2: "Projekte ansehen",
    servicesTitle: "Dienstleistungen",
    projectsTitle: "Projekte",
    contactTitle: "Lass uns etwas Starkes bauen",
    contactDesc: "Wenn du echte Ergebnisse willst — ich bin bereit.",
    contactBtn: "Kontaktiere mich",
    popupTitle: "Warte… geh noch nicht",
    popupDesc: "Du bist nur einen Schritt von einer besseren Website entfernt.",
    popupBtn: "Jetzt starten",
    sticky: "Start"
  }

};


// =======================
// 🔁 CHANGE LANGUAGE
// =======================
function setLang(lang){
  localStorage.setItem("lang", lang);

  const elements = document.querySelectorAll("[data-key]");

  elements.forEach(el => {
    const key = el.getAttribute("data-key");

    if (translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });

  document.body.style.direction = (lang === "ar") ? "rtl" : "ltr";
}


// =======================
// 🔄 LOAD SAVED LANGUAGE
// =======================
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "en";
  setLang(savedLang);
});
