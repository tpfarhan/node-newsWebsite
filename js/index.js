import News from "./models/newsAPI"
import createMainNews from "./utils/mainNewsContent"
var navigation = document.getElementById("navigation"),
    close= document.getElementById("close"),
    menuBtn = document.getElementById("menu-btn"),
    fullOverlay = document.getElementById("overlay"),
    newsContainer =document.getElementById("news-container")

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
if(window.matchMedia("(min-width:1025px)")){
    console.log(window.matchMedia("(min-width:1025px)"))
    navigation.style.display="flex";
    navigation.style.width="auto";

}


fetch("https://saurav.tech/NewsAPI/top-headlines/category/general/in.json", {
    method: "GET"
})
    .then((response) =>{
        return response.json();
    })
    .then((jsonResponse) =>{
        if(jsonResponse.artcles){
            for(var i = 0; i < 8 ; i++){
                let newsData = new News(jsonResponse.artcles[i]);
                newsContainer.appendChild(createMainNews(newsdata))
            }
        }
    })

