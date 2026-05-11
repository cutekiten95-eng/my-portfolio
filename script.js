// LOADER
window.addEventListener("load", ()=>{
  document.getElementById("loader").style.display="none";
});

// SERVICES CLICK
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
