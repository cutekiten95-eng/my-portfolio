document.addEventListener("DOMContentLoaded",()=>{

// loader
setTimeout(()=>{
document.getElementById("loader").style.display="none";
},800);

// fade
const fades=document.querySelectorAll(".fade");
window.addEventListener("scroll",()=>{
fades.forEach(el=>{
if(el.getBoundingClientRect().top < window.innerHeight-100){
el.classList.add("show");
}
});
});

// popup
let shown=false;
document.addEventListener("mouseout",(e)=>{
if(!shown && e.clientY<=0){
document.getElementById("popup").style.display="flex";
shown=true;
}
});

// sticky text change
const sticky=document.getElementById("sticky");
window.addEventListener("scroll",()=>{
if(window.scrollY>500){
sticky.innerText="Get Offer";
}else{
sticky.innerText="Start";
}
});

// fake notifications
setInterval(()=>{
const notif=document.getElementById("notif");
notif.style.display="block";
setTimeout(()=>notif.style.display="none",3000);
},8000);

// countdown
let time=300;
setInterval(()=>{
time--;
document.getElementById("timer").innerText=time+"s";
},1000);

// form → WhatsApp
document.getElementById("form").addEventListener("submit",(e)=>{
e.preventDefault();

let name=e.target[0].value;
let msg=e.target[2].value;

let url=`https://wa.me/212XXXXXXXXX?text=Hello I am ${name} - ${msg}`;
window.open(url,"_blank");
});

});

function closePopup(){
document.getElementById("popup").style.display="none";
}
