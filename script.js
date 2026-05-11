document.addEventListener("DOMContentLoaded", function(){

// loader
setTimeout(function(){
  const loader = document.getElementById("loader");
  if(loader) loader.style.display="none";
},800);

// fade
const fades=document.querySelectorAll(".fade");

window.addEventListener("scroll", function(){
  fades.forEach(function(el){
    if(el.getBoundingClientRect().top < window.innerHeight-100){
      el.classList.add("show");
    }
  });
});

// popup
let shown=false;

document.addEventListener("mouseout", function(e){
  if(!shown && e.clientY<=0){
    const popup=document.getElementById("popup");
    if(popup) popup.style.display="flex";
    shown=true;
  }
});

// sticky
const sticky=document.getElementById("sticky");

window.addEventListener("scroll", function(){
  if(window.scrollY>400){
    sticky.innerText="Get Offer";
  }else{
    sticky.innerText="Start";
  }
});

// notifications
setInterval(function(){
  const notif=document.getElementById("notif");
  if(notif){
    notif.style.display="block";
    setTimeout(()=>notif.style.display="none",3000);
  }
},8000);

// countdown
let time=300;

setInterval(function(){
  const t=document.getElementById("timer");
  if(t){
    t.innerText="Offer ends in "+time+"s";
    time--;
  }
},1000);

// form
document.getElementById("form").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Message sent!");
});

});

function closePopup(){
  const popup=document.getElementById("popup");
  if(popup) popup.style.display="none";
}
