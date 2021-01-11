var menuBtn = document.getElementById("menu-btn"),
    fullOverlay = document.getElementById("overlay"),
    menuOverlay = document.getElementById("menuList"),
    close= document.getElementById("close")

menuBtn.addEventListener("click",() =>{
    fullOverlay.style.display="block";
    menuOverlay.style.display="block";
    fullOverlay.classList.remove("fadeout")
    fullOverlay.classList.add("fadein")
    menuOverlay.classList.remove("closeSlide")
    menuOverlay.classList.add("openSlide")
})
close.addEventListener("click",()=>{
    console.log("click")
    fullOverlay.classList.remove("fadein")
    fullOverlay.classList.add("fadeout")
    menuOverlay.classList.remove("openSlide")
    menuOverlay.classList.add("closeSlide")
  
    setTimeout(() => {
        fullOverlay.style.display="none";
        menuOverlay.style.display="none";
    }, 1000);

})