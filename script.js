document.addEventListener("DOMContentLoaded", ()=>{

  // fade
  const fades = document.querySelectorAll(".fade");

  function show(){
    fades.forEach(el=>{
      if(el.getBoundingClientRect().top < window.innerHeight - 100){
        el.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", show);
  show();

  // popup
  let shown=false;
  document.addEventListener("mouseleave",(e)=>{
    if(e.clientY<0 && !shown){
      document.getElementById("popup").style.display="block";
      shown=true;
    }
  });

});

// service modal
function openService(type){
  const data={
    web:"Websites that convert visitors into clients.",
    python:"Automation tools to save time.",
    data:"Clean data for better decisions."
  };

  document.getElementById("serviceText").innerText=data[type];
  document.getElementById("serviceModal").style.display="block";
}

function closeService(){
  document.getElementById("serviceModal").style.display="none";
}

function closePopup(){
  document.getElementById("popup").style.display="none";
}

// form
document.addEventListener("submit",function(e){
  if(e.target.id==="contactForm"){
    e.preventDefault();
    alert("Message sent!");
    window.open("https://www.fiverr.com/","_blank");
  }
});
