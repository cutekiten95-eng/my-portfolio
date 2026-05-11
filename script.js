// loader
window.onload=()=>{
  document.getElementById("loader").style.display="none";
};

// scroll animation
const fades=document.querySelectorAll(".fade");
window.addEventListener("scroll",()=>{
  fades.forEach(el=>{
    if(el.getBoundingClientRect().top<window.innerHeight-100){
      el.classList.add("show");
    }
  });
});

// modal
function openModal(){
  document.getElementById("modal").style.display="block";
}
function closeModal(){
  document.getElementById("modal").style.display="none";
}

// service modal
function openService(type){
  const data={
    web:"Custom websites built to convert visitors into clients.",
    python:"Automation tools to save time and increase efficiency.",
    data:"Clean and structured data ready for real decisions.",
    translate:"Professional translation (AR / FR / EN / DE)."
  };
  document.getElementById("serviceText").innerText=data[type];
  document.getElementById("serviceModal").style.display="block";
}
function closeService(){
  document.getElementById("serviceModal").style.display="none";
}

// exit popup
let shown=false;
document.addEventListener("mouseout",e=>{
  if(!shown && e.clientY<=0){
    document.getElementById("popup").style.display="block";
    shown=true;
  }
});

// language (basic)
function setLang(lang){
  alert("Language: "+lang);
}
