const shareBtn = document.getElementById("share-button");
const shareContainer = document.getElementById("share-container");

shareBtn.addEventListener("click", event => {
  event.stopPropagation();

  const isOpen = shareContainer.classList.toggle("visible-box");

  shareBtn.classList.toggle("active-btn");

  shareBtn.setAttribute("aria-expanded", isOpen);
})

document.addEventListener("click", event => {
  const clickedOutsideShareBtn = !shareBtn.contains(event.target);
  const clickedOutsideShareBox = !shareContainer.contains(event.target);
  
  if (clickedOutsideShareBox && clickedOutsideShareBtn) {
    shareContainer.classList.remove("visible-box");
    
    shareBtn.classList.remove("active-btn");

    shareBtn.setAttribute("aria-expanded", "false");
  }
})


// shareBtn.addEventListener("click", () => {
//   shareContainer.classList.toggle("visible-box");

//   shareBtn.classList.toggle("active-btn");

//   const isExplanded = shareBtn.getAttribute("aria-expanded") === "true";
//   shareBtn.setAttribute("aria-expanded", !isExplanded);
// });
