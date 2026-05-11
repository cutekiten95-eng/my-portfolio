// LOADER
window.addEventListener("load",()=>{
  document.getElementById("loader").style.display="none";
});

// SERVICES
function toggleCard(card){
  card.classList.toggle("active");
}

// MODAL
function openModal(){
  document.getElementById("modal").style.display="block";
}
function closeModal(){
  document.getElementById("modal").style.display="none";
}

// EXIT POPUP
let shown=false;
document.addEventListener("mouseout",e=>{
  if(!shown && e.clientY<=0){
    document.getElementById("popup").style.display="block";
    shown=true;
  }
});
