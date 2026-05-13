document.addEventListener("DOMContentLoaded",()=>{

const translations={
en:{hero_title:"Get More Clients",hero_sub:"Websites that convert"},
fr:{hero_title:"Plus de clients",hero_sub:"Sites efficaces"},
ar:{hero_title:"احصل على عملاء",hero_sub:"مواقع قوية"},
de:{hero_title:"Mehr Kunden",hero_sub:"Conversion Websites"}
};

const lang=document.getElementById("lang");

lang.addEventListener("change",()=>{
const l=lang.value;
document.querySelectorAll("[data-key]").forEach(el=>{
const key=el.dataset.key;
if(translations[l] && translations[l][key]){
el.textContent=translations[l][key];
}
});
});

const notif=document.getElementById("notif");

setInterval(()=>{
notif.textContent="Someone just booked";
notif.style.display="block";
setTimeout(()=>notif.style.display="none",3000);
},5000);

});
