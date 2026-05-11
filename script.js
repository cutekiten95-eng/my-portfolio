// LOADER
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

// PROGRESS
window.addEventListener("scroll", () => {
  let s = document.documentElement.scrollTop;
  let h = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  document.getElementById("progress").style.width = (s / h) * 100 + "%";
});

// MENU
function toggleMenu(){
  document.querySelector(".nav-links").classList.toggle("active");
}

// SERVICES
function toggleCard(card){
  card.classList.toggle("active");
}

// MODAL
function openModal(){
  document.getElementById("modal").style.display = "block";
}

function closeModal(){
  document.getElementById("modal").style.display = "none";
}

// POPUP
let shown=false;
document.addEventListener("mouseout", e=>{
  if(!shown && e.clientY<=0){
    document.getElementById("popup").style.display="block";
    shown=true;
  }
});

// LANGUAGE
const data = {
  en:{heroTitle:"I build websites that bring clients",heroDesc:"Fast. Clean. Built from scratch."},
  fr:{heroTitle:"Je crée des sites qui attirent des clients",heroDesc:"Rapide. Propre. Sur mesure."},
  ar:{heroTitle:"أبني مواقع تجلب العملاء",heroDesc:"سريع، نظيف ومخصص"},
  de:{heroTitle:"Ich erstelle Websites, die Kunden bringen",heroDesc:"Schnell. Sauber. Individuell."}
};

function setLang(lang){
  document.querySelectorAll("[data-key]").forEach(el=>{
    el.textContent = data[lang][el.dataset.key];
  });
  document.body.dir = lang==="ar"?"rtl":"ltr";
}
