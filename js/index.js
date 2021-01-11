
var navigation = document.getElementById("navigation"),
    close= document.getElementById("close"),
    menuBtn = document.getElementById("menu-btn"),
    fullOverlay = document.getElementById("overlay");

menuBtn.addEventListener("click",() =>{
    navigation.style.width = "15em";
    fullOverlay.style.display="block";
    fullOverlay.classList.remove("fadeout")
    fullOverlay.classList.add("fadein")
});
close.addEventListener("click",()=>{
    navigation.style.width = "0";
    fullOverlay.classList.add("fadeout")
    setTimeout(() => {
        fullOverlay.style.display="none";
    }, 1000);

})