// =======================
// 🔥 INIT (كلشي هنا باش نتفادو errors)
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
  reveal(); // 🔥 باش تخدم من الأول

  // =======================
  // 😈 EXIT POPUP
  // =======================
  let popupShown = false;
  const popup = document.getElementById("popup");

  document.addEventListener("mouseout", (e) => {
    if (!popupShown && e.clientY <= 0 && popup) {
      popup.style.display = "block";
      popupShown = true;
    }
  });

  if (popup) {
    popup.addEventListener("click", function(e){
      if(e.target.id === "popup"){
        closePopup();
      }
    });
  }

  document.addEventListener("keydown", function(e){
    if(e.key === "Escape"){
      closePopup();
    }
  });

  // =======================
  // 🌍 LANGUAGE LOAD
  // =======================
  const savedLang = localStorage.getItem("lang") || "en";
  setLang(savedLang);
});


// =======================
// 📦 MODALS
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
    translate: "Professional translation (AR / FR / EN / DE)."
  };

  document.getElementById("serviceText").innerText = data[type];
  document.getElementById("serviceModal").style.display = "block";
}

function closeService(){
  document.getElementById("serviceModal").style.display = "none";
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
// 🌍 TRANSLATIONS
// =======================
const translations = {
  en: {
    title: "Your website shouldn’t just exist — it should bring clients",
    desc: "High-performance websites & tools built to attract and convert.",
    cta1: "Start Your Project",
    cta2: "See Work"
  },
  fr: {
    title: "Votre site doit attirer des clients",
    desc: "Sites performants conçus pour convertir.",
    cta1: "Démarrer",
    cta2: "Voir"
  },
  ar: {
    title: "موقعك يجب أن يجلب عملاء",
    desc: "مواقع قوية لجذب وتحويل الزوار.",
    cta1: "ابدأ",
    cta2: "الأعمال"
  },
  de: {
    title: "Deine Website soll Kunden bringen",
    desc: "Websites die konvertieren.",
    cta1: "Start",
    cta2: "Projekte"
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
